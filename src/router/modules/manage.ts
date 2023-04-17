import { RouteRecordRawExtend } from "../../../types/router";

export const manageRouter: RouteRecordRawExtend = {
  path: "/manage",
  name: "managePage",
  meta: {
    rules: [],
    title: "管理中心"
  },
  component: () => import("@/views/ManagementPage/ManagementPage.vue"),
  children: [
    {
      path: "/manage/home",
      name: "manageHome",
      meta: {
        rules: [],
        title: "数据面板",
        icon: "HomeFilled"
      },
      component: () =>
        import("@/views/ManagementPage/pages/ManageHome/ManageHome.vue")
    },
    {
      path: "/manage/list",
      name: "manageList",
      meta: {
        rules: [],
        title: "管理列表",
        icon: "Grid"
      },
      component: () =>
        import("@/views/ManagementPage/pages/ManageList/ManageList.vue")
    }
  ]
};
