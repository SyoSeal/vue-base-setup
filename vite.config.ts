import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "vite";
import type { ConfigEnv, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const ENV = loadEnv(mode, process.cwd(), "VITE_");

  const aliasFilePath = (path: string): string =>
    fileURLToPath(new URL(path, import.meta.url));

  return {
    base: ENV.VITE_BASE_URL,
    plugins: [vue()],
    resolve: {
      alias: {
        "@": aliasFilePath("src"),
      },
    },
    server: {
      port: 80,
      host: true,
    },
  };
});
