/**
 * vite的plugin统一封装
 * */
import { PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vueSetupExtend from "vite-plugin-vue-setup-extend";
import { autoComponents } from "./plugins/components";
import { autoImport } from "./plugins/autoImport";
import { compressionPlugin } from "./plugins/compression";
import { chunkPlugin } from "./plugins/chunk";
// import { visualizerPlugin } from "./plugins/visualizer";
import { buildProgress } from "./plugins/progress";
import { viteRestart } from "./plugins/restart";

export const createVitePlugins = (isBuild: boolean) => {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // 支持vue
    vue(),
    // 支持JSX
    vueJsx(),
    // setup语法糖组件名支持
    vueSetupExtend()
  ];
  // 自动引入所配置的组件
  vitePlugins.push(autoComponents());
  // 自动将配置的"库"内的 composition-api 自动导入 Vue 实例内
  vitePlugins.push(autoImport());
  // 分包工具
  vitePlugins.push(chunkPlugin());
  // 打包进度条工具
  vitePlugins.push(buildProgress());
  // 配置变化自动重启
  vitePlugins.push(viteRestart());

  if (isBuild) {
    // 压缩
    vitePlugins.push(compressionPlugin());
    // 打包分析工具 2023-04-05禁用，疑似与新版vite重的rollup不兼容 or 不兼容pnpm
    // vitePlugins.push(visualizerPlugin());
  }

  return vitePlugins;
};
