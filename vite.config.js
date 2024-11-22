import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@core": path.resolve(__dirname, "./src/modules/core"),
      "@home": path.resolve(__dirname, "./src/modules/home"),
      "@auth": path.resolve(__dirname, "./src/modules/auth"),
      "@interfaces": path.resolve(__dirname, "./src/modules/core/interfaces"),
      "@config": path.resolve(__dirname, "./src/modules/core/config"),
    },
  },
  plugins: [react()],
});
