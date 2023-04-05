/**
 * unplugin-vue-components
 * 自动引入所配置的组件，省去大量 import 语句
 * */
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export const autoComponents = () => {
  // Components 的作用是自动引入所配置的组件，省去大量 import 语句
  // 具体请查阅 https://github.com/antfu/unplugin-vue-components
  return Components({
    // dirs 内所配置路径下的 vue 组件可以自动引入
    dirs: ["src/components"],
    // extensions 用于设置组件的文件类型
    extensions: ["vue"],
    // deep 设置为 true，表示会监测目录下的子目录内
    deep: true,
    // 自定义`components.d.ts`全局声明路径
    dts: "types/components.d.ts",
    // 用于转换目标的过滤器
    include: [/\.vue$/, /\.vue\?vue/],
    exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
    // 解析器，这里自动引入 Element-Plus 组件库组件
    resolvers: [ElementPlusResolver()]
  });
};
