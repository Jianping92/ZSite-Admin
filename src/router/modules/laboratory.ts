import { RouteRecordRawExtend } from "../../../types/router";

export const laboratoryRouter: RouteRecordRawExtend = {
  path: "/laboratory",
  name: "laboratoryPage",
  meta: {
    rules: []
  },
  component: () => import("@/views/LaboratoryPage/LaboratoryPage.vue")
};
