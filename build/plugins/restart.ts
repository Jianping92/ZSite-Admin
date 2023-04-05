/**
 * 监听配置变动自动重启vite
 * */
import restart from "vite-plugin-restart";

export const viteRestart = () => {
  return restart({
    restart: ["*.config.[jt]s", "**/config/*.[jt]s"]
  });
};
