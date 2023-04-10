/**
 * 自动将配置的"库"内的 composition-api 自动导入 Vue 实例内
 * */
import AutoImport from "unplugin-auto-import/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import IconsResolver from "unplugin-icons/resolver";

export const autoImport = () => {
  // AutoImport 的作用是自动将配置的"库"内的 composition-api 自动导入 Vue 实例内
  // AutoImport 也可以生成全局 typescript 说明
  // 具体请查阅 https://github.com/antfu/unplugin-auto-import
  return AutoImport({
    // imports 内设置的是需要自动导入 composition-api 的"库"
    imports: ["vue", "vue-router", "pinia"],
    // 解析器，此处使用库提供的方案将 Element-plus 组件库注入
    resolvers: [ElementPlusResolver(), IconsResolver({ prefix: "Icon" })],
    // 配置 vue 模版内自动导入
    vueTemplate: true,
    // 自定义`auto-imports.d.ts`全局声明路径
    dts: "types/auto-imports.d.ts",
    // 解决因自动导入导致 Eslint 报错的问题
    // enabled 为 true 时，会根据 filepath 生成一个 eslint 的配置文件
    // 这个文件需要引入到 eslint 的配置文件中
    eslintrc: {
      enabled: true,
      filepath: "./.eslintrc-auto-import.json",
      globalsPropValue: true
    }
  });
};
