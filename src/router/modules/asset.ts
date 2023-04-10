import { RouteRecordRawExtend } from "../../../types/router";

export const assetRouter: RouteRecordRawExtend = {
  path: "/asset",
  name: "assetPage",
  meta: {
    rules: [],
    title: "资产布局"
  },
  hidden: true,
  children: [
    {
      path: "/asset/articleEdit/:id",
      name: "articleEdit",
      meta: {
        rules: [],
        title: "文章编辑"
      },
      hidden: true,
      component: () =>
        import("@/views/AssetPage/pages/AssetArticle/ArticleEdit.vue")
    },
    {
      path: "/asset/articleDetail/:id",
      name: "articleDetail",
      meta: {
        rules: [],
        title: "文章详情"
      },
      hidden: true,
      component: () =>
        import("@/views/AssetPage/pages/AssetArticle/ArticleDetail.vue")
    }
  ]
};
