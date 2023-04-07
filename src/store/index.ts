import { userInfo } from "./modules/user";
import { routeInfo } from "@/store/modules/route";

// ReturnType 获取返回值类型
export interface AppStore {
  userInfo: ReturnType<typeof userInfo>;
  routeInfo: ReturnType<typeof routeInfo>;
}

const appStore: AppStore = {} as AppStore;

export const registerStore = () => {
  appStore.userInfo = userInfo();
  appStore.routeInfo = routeInfo();
};

export default appStore;
