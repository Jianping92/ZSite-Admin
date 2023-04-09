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
    css: {
      // 如果使用scss的@use，则需要提前进行预编译，否则会一直报错
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/styles/_themes.scss" as *;`
        }
      }
    },
    plugins: createVitePlugins(isBuild)
  };
});
