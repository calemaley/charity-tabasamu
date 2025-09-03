// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { createServer as createApiServer } from "./server";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "express-middleware",
      configureServer(vite) {
        const app = createApiServer();
        vite.middlewares.use(app);
      },
    },
  ],
  server: {
    fs: {
      allow: ["..", path.resolve(__dirname, "../node_modules")],
    },
  },
  build: {
    outDir: "dist/spa",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
});
