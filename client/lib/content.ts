import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import type { SiteContent } from "@shared/site-content";

const CONTENT_KEY = ["site-content"];
const API_BASE_KEY = "__API_BASE__";
const DEFAULT_BASES = ["/api", "/.netlify/functions/api"] as const;

function getApiBase() {
  const cached = localStorage.getItem(API_BASE_KEY);
  return cached || DEFAULT_BASES[0];
}

async function resolveApiBase(): Promise<string> {
  const current = getApiBase();
  try {
    const r = await fetch(`${current}/ping`);
    if (r.ok) return current;
  } catch {}
  for (const base of DEFAULT_BASES) {
    if (base === current) continue;
    try {
      const r = await fetch(`${base}/ping`);
      if (r.ok) {
        localStorage.setItem(API_BASE_KEY, base);
        return base;
      }
    } catch {}
  }
  return current;
}

function apiUrl(path: string) {
  const base = getApiBase();
  return `${base}${path}`;
}

function getAdminHeaders() {
  const basic = localStorage.getItem("ADMIN_BASIC");
  if (basic) return { Authorization: basic } as Record<string, string>;
  const token = localStorage.getItem("ADMIN_TOKEN");
  return token ? ({ "X-Admin-Token": token } as Record<string, string>) : {};
}

async function fetchWithFallback(path: string, init?: RequestInit) {
  const bases = [getApiBase(), ...DEFAULT_BASES.filter((b) => b !== getApiBase())];
  for (const base of bases) {
    try {
      const res = await fetch(`${base}${path}`, init);
      if (res.ok) {
        localStorage.setItem(API_BASE_KEY, base);
        return res;
      }
      // If network succeeds but non-OK, return first response (don't mask server errors)
      if (base === bases[0]) return res;
    } catch (e) {
      // try next base
    }
  }
  // last attempt with first base to surface network error
  return fetch(`${bases[0]}${path}`, init);
}

export async function fetchContent(): Promise<SiteContent> {
  const res = await fetchWithFallback("/content");
  if (!res.ok) throw new Error(`Failed to load content: ${res.status}`);
  return res.json();
}

export function useContent() {
  const qc = useQueryClient();
  const query = useQuery({ queryKey: CONTENT_KEY, queryFn: fetchContent });

  useEffect(() => {
    resolveApiBase().then((base) => {
      try {
        const ev = new EventSource(`${base}/content/events`);
        ev.addEventListener("update", (e) => {
          try {
            const data: SiteContent = JSON.parse((e as MessageEvent).data);
            qc.setQueryData(CONTENT_KEY, data);
          } catch {}
        });
        (window as any).__CONTENT_EV__ = ev;
      } catch {}
    });
    return () => {
      const ev: EventSource | undefined = (window as any).__CONTENT_EV__;
      ev?.close?.();
    };
  }, [qc]);

  const updateSection = async <K extends keyof SiteContent>(
    key: K,
    value: SiteContent[K],
  ) => {
    await fetchWithFallback(`/admin/${String(key)}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", ...getAdminHeaders() },
      body: JSON.stringify(value),
    });
  };

  const updateState = async (patch: Partial<SiteContent>) => {
    await fetchWithFallback(`/admin/state`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", ...getAdminHeaders() },
      body: JSON.stringify(patch),
    });
  };

  const subscribe = async (email: string) => {
    await fetchWithFallback(`/subscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
  };

  const sendMessage = async (payload: {
    name: string;
    email: string;
    subject?: string;
    message: string;
    type?: string;
  }) => {
    await fetchWithFallback(`/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  };

  return { ...query, updateSection, updateState, subscribe, sendMessage };
}
