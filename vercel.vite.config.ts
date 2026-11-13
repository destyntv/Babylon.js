import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
    root: resolve(__dirname, "vercel-app"),
    base: "/",
    build: {
        outDir: resolve(__dirname, "dist-vercel"),
        emptyOutDir: true,
    },
});
