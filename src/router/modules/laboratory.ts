import { RouteRecordRawExtend } from "../../../types/router";

export const laboratoryRouter: RouteRecordRawExtend = {
  path: "/laboratory",
  name: "laboratoryPage",
  meta: {
    rules: [],
    title: "实验室"
  },
  component: () => import("@/views/LaboratoryPage/LaboratoryPage.vue")
};
