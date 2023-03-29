/**
 *  增加描述文件，解决 vite.config.ts 中的报错
 * */
declare module "vite-plugin-compression" {
  export interface VitePluginCompression {
    /**
     * Log compressed files and their compression ratios.
     * @default: true
     */
    verbose?: boolean;
    /**
     * Minimum file size before compression is used.
     * @default 1025
     */
    threshold?: number;
    /**
     * Filter files that do not need to be compressed
     * @default /\.(js|mjs|json|css|html)$/i
     */
    filter?: RegExp | ((file: string) => boolean);
    /**
     * Whether to enable compression
     * @default: false
     */
    disable?: boolean;
    /**
     * Compression algorithm
     * @default gzip
     */
    algorithm?: Algorithm;
    /**
     * File format after compression
     * @default .gz
     */
    ext?: string;
    /**
     * Compression Options
     */
    compressionOptions?: CompressionOptions;
    /**
     * Delete the corresponding source file after compressing the file
     * @default: false
     */
    deleteOriginFile?: boolean;
    /**
     * success callback after completed
     */
    success?: () => void;
  }
}
