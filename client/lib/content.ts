import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import type { SiteContent } from "@shared/site-content";

const CONTENT_KEY = ["site-content"];

function getAdminHeaders() {
  const basic = localStorage.getItem("ADMIN_BASIC");
  if (basic) return { Authorization: basic };
  const token = localStorage.getItem("ADMIN_TOKEN");
  return token ? { "X-Admin-Token": token } : {};
}

export function fetchContent(): Promise<SiteContent> {
  return fetch("/api/content").then((r) => r.json());
}

export function useContent() {
  const qc = useQueryClient();
  const query = useQuery({ queryKey: CONTENT_KEY, queryFn: fetchContent });

  useEffect(() => {
    const ev = new EventSource("/api/content/events");
    ev.addEventListener("update", (e) => {
      try {
        const data: SiteContent = JSON.parse((e as MessageEvent).data);
        qc.setQueryData(CONTENT_KEY, data);
      } catch {}
    });
    return () => ev.close();
  }, [qc]);

  const updateSection = async <K extends keyof SiteContent>(
    key: K,
    value: SiteContent[K],
  ) => {
    await fetch(`/api/admin/${String(key)}`,
      { method: "PUT", headers: { "Content-Type": "application/json", ...getAdminHeaders() }, body: JSON.stringify(value) });
  };

  const updateState = async (patch: Partial<SiteContent>) => {
    await fetch(`/api/admin/state`,
      { method: "PUT", headers: { "Content-Type": "application/json", ...getAdminHeaders() }, body: JSON.stringify(patch) });
  };

  const subscribe = async (email: string) => {
    await fetch(`/api/subscribe`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
  };

  const sendMessage = async (payload: { name: string; email: string; subject?: string; message: string; type?: string }) => {
    await fetch(`/api/contact`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
  };

  return { ...query, updateSection, updateState, subscribe, sendMessage };
}
