import { defineConfig } from "vite";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    root: resolve(repositoryRoot, "vercel-app"),
    base: "/",
    build: {
        outDir: resolve(repositoryRoot, "dist-vercel"),
        emptyOutDir: true,
    },
});
