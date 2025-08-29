import type { SiteContent } from "../../shared/site-content";
import type { store as StoreType } from "./store";

async function getBlobsStore() {
  try {
    // Dynamically import so local dev without the dependency doesn't break
    const mod: any = await import("@netlify/blobs");
    if (!mod || typeof mod.getStore !== "function") return null;
    const store = mod.getStore({ name: "site-content" });
    return store as {
      get: (key: string, opts?: { type?: "json" | "text" }) => Promise<any>;
      set: (key: string, value: any, opts?: { addRandomSuffix?: boolean }) => Promise<void>;
    };
  } catch {
    return null;
  }
}

const BLOB_KEY = "site-content.json";

export async function readPersistedState(): Promise<SiteContent | null> {
  const store = await getBlobsStore();
  if (!store) return null;
  try {
    const data = await store.get(BLOB_KEY, { type: "json" });
    if (data && typeof data === "object") return data as SiteContent;
    return null;
  } catch {
    return null;
  }
}

export async function writePersistedState(state: SiteContent): Promise<void> {
  const store = await getBlobsStore();
  if (!store) return;
  try {
    await store.set(BLOB_KEY, JSON.stringify(state));
  } catch {
    // ignore write errors locally
  }
}

export function setupPersistence(appStore: typeof StoreType) {
  // Load once on startup (fire-and-forget)
  readPersistedState().then((persisted) => {
    if (persisted) {
      // Merge into current state so required defaults remain if schema evolved
      appStore.setState(persisted);
    }
  });

  // Debounced writes on change events
  let pending: any = null;
  const debounceMs = 400;
  const onChange = (next: SiteContent) => {
    if (pending) clearTimeout(pending);
    pending = setTimeout(() => {
      writePersistedState(next);
      pending = null;
    }, debounceMs);
  };
  (appStore as any).on("change", onChange);
}
