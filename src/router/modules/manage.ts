import { RouteRecordRawExtend } from "../../../types/router";

export const manageRouter: RouteRecordRawExtend = {
  path: "/manage",
  name: "managePage",
  meta: {
    rules: []
  },
  component: () => import("@/views/ManagementPage/ManagementPage.vue"),
  children: [
    {
      path: "/manage/home",
      name: "manageHome",
      meta: {
        rules: []
      },
      component: () => import("@/views/ManagementPage/pages/ManageHome.vue")
    },
    {
      path: "/manage/list",
      name: "manageList",
      meta: {
        rules: []
      },
      component: () => import("@/views/ManagementPage/pages/ManageHome.vue")
    }
  ]
};
