/**
 * 压缩代码
 * */
import viteCompression from "vite-plugin-compression";

export const compressionPlugin = () => {
  return viteCompression({
    // 大于1mb的文件压缩
    threshold: 1024000,
    // 删除源文件
    deleteOriginFile: false,
    //采用的压缩算法
    algorithm: "gzip",
    // 生成的压缩包后缀
    ext: ".gz"
  });
};
