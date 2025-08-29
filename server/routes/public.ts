import type { RequestHandler } from "express";
import { store } from "../state/store";

export const subscribeEmail: RequestHandler = (req, res) => {
  const { email } = req.body || {};
  if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Invalid email" });
  }
  const entry = { email, createdAt: new Date().toISOString() };
  const next = [...store.getState().subscriptions, entry];
  store.update("subscriptions", next as any);
  res.json({ ok: true });
};

export const submitContact: RequestHandler = (req, res) => {
  const { name = "", email = "", subject = "", message = "", type = "general" } = req.body || {};
  if (!name || !email || !message) return res.status(400).json({ error: "Missing fields" });
  const entry = {
    id: crypto.randomUUID(),
    name,
    email,
    subject,
    message,
    type,
    createdAt: new Date().toISOString(),
    read: false,
  };
  const next = [...store.getState().messages, entry];
  store.update("messages", next as any);
  res.json({ ok: true, id: entry.id });
};

export const listSubscriptions: RequestHandler = (_req, res) => {
  res.json(store.getState().subscriptions);
};

export const listMessages: RequestHandler = (_req, res) => {
  res.json(store.getState().messages);
};
