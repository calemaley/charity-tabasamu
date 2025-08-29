import type { RequestHandler } from "express";
import { store } from "../state/store";

function parseBasicAuth(header?: string) {
  if (!header) return null;
  const [scheme, value] = header.split(" ");
  if (scheme !== "Basic" || !value) return null;
  try {
    const decoded = Buffer.from(value, "base64").toString("utf8");
    const idx = decoded.indexOf(":");
    if (idx === -1) return null;
    return { user: decoded.slice(0, idx), pass: decoded.slice(idx + 1) };
  } catch {
    return null;
  }
}

function checkAuth(req: any) {
  const token = process.env.ADMIN_TOKEN;
  const user = process.env.ADMIN_USER;
  const pass = process.env.ADMIN_PASS;

  // If none configured, allow in dev
  if (!token && !user && !pass) return true;

  // Allow token auth
  const providedToken = req.headers["x-admin-token"];
  if (token && providedToken === token) return true;

  // Allow Basic auth
  const basic = parseBasicAuth(req.headers["authorization"]);
  if (user && pass && basic && basic.user === user && basic.pass === pass) return true;

  return false;
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
