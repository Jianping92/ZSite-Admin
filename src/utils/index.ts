/**
 * 获取静态资源
 * */
export const getAssets = (url: string): string => {
  return new URL(`../assets/${url}`, import.meta.url).href;
};
