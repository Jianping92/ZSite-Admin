import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueSetupExtend from "vite-plugin-vue-setup-extend";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Visualizer from "rollup-plugin-visualizer";
import ViteCompression from "vite-plugin-compression";
import { chunkSplitPlugin } from "vite-plugin-chunk-split";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 7878
  },
  plugins: [
    vue(),
    vueSetupExtend(),
    // AutoImport 的作用是自动将配置的"库"内的 composition-api 自动导入 Vue 实例内
    // AutoImport 也可以生成全局 typescript 说明
    // 具体请查阅 https://github.com/antfu/unplugin-auto-import
    AutoImport({
      // imports 内设置的是需要自动导入 composition-api 的"库"
      imports: ["vue", "vue-router", "pinia"],
      // 解析器，此处使用库提供的方案将 Element-plus 组件库注入
      resolvers: [ElementPlusResolver()],
      // 配置 vue 模版内自动导入
      vueTemplate: true,
      // 解决因自动导入导致 Eslint 报错的问题
      // enabled 为 true 时，会根据 filepath 生成一个 eslint 的配置文件
      // 这个文件需要引入到 eslint 的配置文件中
      eslintrc: {
        enabled: true,
        filepath: "./.eslintrc-auto-import.json",
        globalsPropValue: true
      }
    }),
    // Components 的作用是自动引入所配置的组件，省去大量 import 语句
    // 具体请查阅 https://github.com/antfu/unplugin-vue-components
    Components({
      // dirs 内所配置路径下的 vue 组件可以自动引入
      dirs: ["src/components"],
      // extensions 用于设置组件的文件类型
      extensions: ["vue"],
      // deep 设置为 true，表示会监测目录下的子目录内
      deep: true,
      // 解析器，这里自动引入 Element-Plus 组件库组件
      resolvers: [ElementPlusResolver()]
    }),
    // 压缩
    ViteCompression({
      // 大于1mb的文件压缩
      threshold: 1024000,
      deleteOriginFile: false,
      //采用的压缩算法
      algorithm: "gzip",
      // 生成的压缩包后缀
      ext: ".gz"
    }),
    // chunkSplitPlugin 的作用是增加 vite 的拆包能力
    // 可以再其中指定拆包策略
    // 具体请查阅 https://github.com/sanyuan0704/vite-plugin-chunk-split/blob/HEAD/README-CN.md
    chunkSplitPlugin({
      strategy: "default",
      // 指定拆包策略
      customSplitting: {
        // scr/utils 下的所有文件会被合并成一个 chunk 文件
        "common-utils": [/src\/utils/],
        // "vue", "vue-router", "pinia" 会被打包到 "main-vendor" 内
        "main-vendor": ["vue", "vue-router", "pinia"]
      }
    }),
    // 打包分析
    Visualizer({ open: true })
  ]
});
