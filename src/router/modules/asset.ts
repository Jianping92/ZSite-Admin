import { RouteRecordRawExtend } from "../../../types/router";

export const assetRouter: RouteRecordRawExtend = {
  path: "/asset",
  name: "assetPage",
  meta: {
    rules: []
  },
  children: [
    {
      path: "/asset/articleEdit/:id",
      name: "articleEdit",
      meta: {
        rules: []
      },
      component: () =>
        import("@/views/AssetPage/pages/AssetArticle/ArticleEdit.vue")
    },
    {
      path: "/asset/articleDetail/:id",
      name: "articleDetail",
      meta: {
        rules: []
      },
      component: () =>
        import("@/views/AssetPage/pages/AssetArticle/ArticleDetail.vue")
    }
  ]
};
