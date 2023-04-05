/**
 * 分包工具
 * */
import { chunkSplitPlugin } from "vite-plugin-chunk-split";

export const chunkPlugin = () => {
  // chunkSplitPlugin 的作用是增加 vite 的拆包能力
  // 可以再其中指定拆包策略
  // 具体请查阅 https://github.com/sanyuan0704/vite-plugin-chunk-split/blob/HEAD/README-CN.md
  return chunkSplitPlugin({
    strategy: "default",
    // 指定拆包策略
    customSplitting: {
      // scr/utils 下的所有文件会被合并成一个 chunk 文件
      "common-utils": [/src\/utils/],
      // "vue", "vue-router", "pinia" 会被打包到 "main-vendor" 内
      "main-vendor": ["vue", "vue-router", "pinia"]
    }
  });
};
