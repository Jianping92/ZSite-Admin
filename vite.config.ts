import { ConfigEnv, defineConfig, UserConfig } from "vite";
import path from "path";
import { createVitePlugins } from "./build/plugins";

// https://vitejs.dev/config/
export default defineConfig(({ command }: ConfigEnv): UserConfig => {
  const isBuild = command === "build";

  return {
    server: {
      port: 7878
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src")
      }
    },
    plugins: createVitePlugins(isBuild)
  };
});
