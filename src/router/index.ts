import {
  createRouter,
  createWebHashHistory,
  Router,
  RouteRecordRaw,
  RouterScrollBehavior
} from "vue-router";

export const defaultRoutes: Array<RouteRecordRaw> = [
  {
    path: "",
    meta: {},
    component: () => import("@/layout/DefaultLayout.vue")
  }
];

export const asyncRoutes: Array<RouteRecordRaw> = [];

const scrollBehavior: RouterScrollBehavior = (): object => {
  return { top: 0 };
};

const router: Router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior,
  routes: defaultRoutes
});

export default router;
