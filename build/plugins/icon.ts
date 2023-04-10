/**
 * 自动注册 icon
 * */
import Icons from "unplugin-icons/vite";

export const autoIcon = () => {
  return Icons({
    autoInstall: true
  });
};
