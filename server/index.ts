import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import {
  getPublicContent,
  sseContentStream,
  getAdminState,
  updateAdminState,
  updateSection,
} from "./routes/admin";
import {
  subscribeEmail,
  submitContact,
  listSubscriptions,
  listMessages,
} from "./routes/public";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Public submission APIs
  app.post("/api/subscribe", subscribeEmail);
  app.post("/api/contact", submitContact);

  // Content APIs
  app.get("/api/content", getPublicContent);
  app.get("/api/content/events", sseContentStream);

  // Admin APIs (optionally protected via ADMIN_TOKEN)
  app.get("/api/admin/state", getAdminState);
  app.put("/api/admin/state", updateAdminState);
  app.put("/api/admin/:section", updateSection);
  app.get("/api/admin/subscriptions", listSubscriptions);
  app.get("/api/admin/messages", listMessages);

  return app;
}
