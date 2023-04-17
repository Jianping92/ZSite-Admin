import { getLocalItem, setLocalItem } from "@/utils/storage-helper";
import { App, ComputedRef, Ref } from "vue";

interface ThemeType {
  Light: string;
  Dark: string;
}

export interface ThemeChange {
  themeVal: Ref<string>;
  setTheme(): void;
  toggleTheme(): void;
  checkSystemTheme(): void;
}

// 定义浏览器的颜色模式
const DARK_THEME_QUERY = "(prefers-color-scheme: dark)";
const LIGHT_THEME_QUERY = "(prefers-color-scheme: light)";

// 定义 Theme
export const Theme: ThemeType = {
  Light: "light",
  Dark: "dark"
};

// 定义 storage 需要的 key
export const THEME_STORAGE_KEY = "theme";

// 定义能用到的变量
const themes: string[] = Object.values(Theme);
const ThemeSymbol = Symbol("theme");

// 定义创建颜色模式
export const createTheme = (theme: string) => {
  const themeStore = changeTheme(theme);
  return {
    ...themeStore,
    install(app: App): void {
      app.provide(ThemeSymbol, themeStore);
    }
  };
};

// 定义修改 theme 的方法
export const changeTheme = (theme: string) => {
  const themeVal = ref<string>(theme);
  // 设置 theme
  const setTheme = (newTheme: string): void => {
    if (themes.includes(newTheme) && newTheme !== themeVal.value) {
      themeVal.value = newTheme;
      setLocalItem(THEME_STORAGE_KEY, newTheme);
    }
  };
  // 改变 theme
  const toggleTheme = (): void => {
    setTheme(themeVal.value === Theme.Dark ? Theme.Light : Theme.Dark);
  };
  // 监听浏览器的颜色模式的变化来控制色彩模式
  const checkSystemTheme = (): void => {
    window
      .matchMedia(DARK_THEME_QUERY)
      .addEventListener(
        "change",
        ({ matches }) => matches && setTheme(Theme.Dark)
      );
    window
      .matchMedia(LIGHT_THEME_QUERY)
      .addEventListener(
        "change",
        ({ matches }) => matches && setTheme(Theme.Light)
      );
  };
  return {
    themeVal,
    setTheme,
    toggleTheme,
    checkSystemTheme
  };
};

// 当前使用的 theme
export const useTheme = () => {
  return inject(ThemeSymbol) as ThemeChange;
};

// 获取系统的 theme 设置
export const getSystemLocalTheme = (): string => {
  // 获取本地存储
  const historyTheme = getLocalItem(THEME_STORAGE_KEY);
  if (historyTheme) {
    return historyTheme === Theme.Dark ? Theme.Dark : Theme.Light;
  }
  // 如果没有本地存储则获取系统设置
  if (window.matchMedia(DARK_THEME_QUERY).matches) {
    return Theme.Dark;
  }
  if (window.matchMedia(LIGHT_THEME_QUERY).matches) {
    return Theme.Light;
  }
  return Theme.Light;
};

export interface ThemeComputed {
  theme: ThemeChange;
  isDarkTheme: ComputedRef;
}

// 动态获取主题色彩方案
export const themeDataComputed = (): ThemeComputed => {
  const theme: ThemeChange = useTheme();
  // 判断是否是深色模式
  const isDarkTheme: ComputedRef = computed(() => {
    const themeVal: string = theme.themeVal.value;
    return themeVal === Theme.Dark;
  });

  return {
    theme,
    isDarkTheme
  };
};
