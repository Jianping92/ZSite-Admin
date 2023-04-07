import router from "@/router";
import { defaultRoutes, asyncRoutes } from "@/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import appStore from "@/store";
import { addAsyncRoute } from "@/utils/router-helper";

NProgress.configure({
  // easing: "ease", // 动画方式，和css动画属性一样（默认：ease）
  // speed: 500, // 递增进度条的速度，单位ms（默认： 200）
  showSpinner: false, // 是否显示加载ico
  trickle: true, //是否自动递增
  trickleSpeed: 200 // 自动递增间隔
  // minimum: 0.3, // 初始化时的最小百分比，0-1（默认：0.08）
  // parent: "#container" //指定此选项以更改父容器（默认：body）
});

// const whiteList: string[] = ["/login", "/404", "/403"];

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  const { userLoginStatus } = storeToRefs(appStore.userInfo);
  const { setUserLoginStatus } = appStore.userInfo;
  const { filterRoute } = storeToRefs(appStore.routeInfo);
  const { setBasicRoute, setAsyncRoute } = appStore.routeInfo;
  if (!userLoginStatus.value) {
    await setUserLoginStatus(true);
    await setBasicRoute(defaultRoutes);
    await setAsyncRoute(asyncRoutes, defaultRoutes, {});
    const filterRoutes = filterRoute.value;
    console.log(filterRoutes);
    addAsyncRoute(filterRoutes, "/");
    next({ ...to, replace: true });
  } else {
    next();
  }
});

router.afterEach(() => {
  NProgress.done();
});
