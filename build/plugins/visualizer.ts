/**
 * 打包分析工具
 * */
import visualizer from "rollup-plugin-visualizer";

export const visualizerPlugin = () => {
  return visualizer({
    filename: "./node_modules/.cache/visualizer/stats.html",
    open: false,
    gzipSize: true,
    brotliSize: true
  });
};
