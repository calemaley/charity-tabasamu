import type { RequestHandler } from "express";
import { store } from "../state/store";

function checkAuth(req: any) {
  const token = process.env.ADMIN_TOKEN;
  if (!token) return true; // if no token configured, allow (dev mode)
  const provided = req.headers["x-admin-token"]; 
  return provided === token;
}

export const getPublicContent: RequestHandler = (_req, res) => {
  res.json(store.getState());
};

export const sseContentStream: RequestHandler = (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.flushHeaders?.();

  const send = () => {
    const data = JSON.stringify(store.getState());
    res.write(`event: update\n`);
    res.write(`data: ${data}\n\n`);
  };

  send();
  const onChange = () => send();
  store.on("change", onChange);
  req.on("close", () => {
    store.off("change", onChange);
    res.end();
  });
};

export const getAdminState: RequestHandler = (req, res) => {
  if (!checkAuth(req)) return res.status(401).json({ error: "Unauthorized" });
  res.json(store.getState());
};

export const updateAdminState: RequestHandler = (req, res) => {
  if (!checkAuth(req)) return res.status(401).json({ error: "Unauthorized" });
  const patch = req.body ?? {};
  store.setState(patch);
  res.json({ ok: true });
};

export const updateSection: RequestHandler = (req, res) => {
  if (!checkAuth(req)) return res.status(401).json({ error: "Unauthorized" });
  const { section } = req.params as { section: any };
  if (!section || !(section in store.getState())) {
    return res.status(400).json({ error: "Invalid section" });
  }
  store.update(section as any, req.body);
  res.json({ ok: true });
};
