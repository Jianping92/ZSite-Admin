import { userInfo } from "./modules/user";

// ReturnType 获取返回值类型
export interface AppStore {
  userInfo: ReturnType<typeof userInfo>;
}

const appStore: AppStore = {} as AppStore;

export const registerStore = () => {
  appStore.userInfo = userInfo();
};

export default appStore;
