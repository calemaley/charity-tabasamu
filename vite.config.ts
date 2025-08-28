// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        // Allow serving files from the project root
        "..",
        // Explicitly allow node_modules from the project root
        path.resolve(__dirname, "../node_modules"),
      ],
    },
  },
  build: {
    outDir: "dist/spa",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client"), // <-- Updated to point to /client
      "@shared": path.resolve(__dirname, "shared"), // <-- Add shared alias
    },
  },
});
