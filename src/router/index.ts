import {
  createRouter,
  createWebHashHistory,
  Router,
  RouterScrollBehavior
} from "vue-router";
import { RouteRecordRawExtendCollection } from "../../types/router";
import { manageRouter } from "@/router/modules/manage";
import { laboratoryRouter } from "@/router/modules/laboratory";
import { assetRouter } from "@/router/modules/asset";

export const defaultRoutes: RouteRecordRawExtendCollection = [
  {
    path: "/login",
    meta: {
      rules: []
    },
    component: () => import("@/views/LoginPage/LoginPage.vue")
  }
];

export const asyncRoutes: RouteRecordRawExtendCollection = [
  {
    path: "/",
    name: "Layout",
    meta: {
      rules: []
    },
    component: () => import("@/layout/DefaultLayout.vue"),
    children: [manageRouter, laboratoryRouter]
  },
  assetRouter
];

const scrollBehavior: RouterScrollBehavior = (): object => {
  return { top: 0 };
};

const router: Router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior,
  routes: defaultRoutes
});

export default router;
