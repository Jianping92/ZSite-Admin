import {
  RouteRecordRawExtend,
  RouteRecordRawExtendCollection
} from "../../types/router";
import router from "@/router";
import { RouteRecordName } from "vue-router";

/**
 * 通过权限对路由进行过滤
 * */
export function filterByPermissions(
  routes: RouteRecordRawExtendCollection,
  permissions: object = {}
): RouteRecordRawExtendCollection {
  console.log(routes);
  return routes
    .filter(
      (route) =>
        !route?.meta?.rules?.length ||
        !!route.meta.rules.find((p) => {
          const permissionsList = Object.keys(permissions);
          return permissionsList?.filter?.((item) => item.includes(p))?.length;
        })
    )
    .map((route) => {
      if (route?.children?.length) {
        const children = filterByPermissions(
          route.children as RouteRecordRawExtendCollection,
          permissions
        );
        if (children.length > 0) {
          route = { ...route, children };
        }
      }
      return route;
    });
}

/**
 * 对所有路由设置重定向路径
 * */
export function fixRouteRedirect(
  routes: RouteRecordRawExtendCollection,
  parentPath = ""
): RouteRecordRawExtendCollection {
  return routes.map((route): RouteRecordRawExtend => {
    // 如果没有子路由则直接返回
    if (!route?.children?.length) {
      return route;
    }
    const { path } = route;
    // 当前路由全路径
    const fullPath = path.startsWith("/") ? path : `${parentPath}/${path}`;
    // 有子路由的自动重定向到正常状态的第一个子路由，兼顾相对path
    const { path: subPath } =
      route.children.filter(
        (item) => !item?.meta?.isCreate && !item?.hidden
      )?.[0] ?? "";
    // 重定向到长子路由全路径
    const redirect = subPath?.startsWith("/")
      ? subPath
      : `${fullPath}/${subPath}`;
    // 递归处理所有子路由
    const children = fixRouteRedirect(
      route.children as RouteRecordRawExtendCollection,
      fullPath
    );
    return { ...route, redirect, children };
  });
}

/**
 * 动态增加路由
 * */
export function addAsyncRoute(
  routes: RouteRecordRawExtendCollection,
  parent: RouteRecordName
): void {
  for (let i = 0; i < routes.length; i++) {
    router.addRoute(parent, routes[i]);
    if (routes[i]?.children?.length) {
      addAsyncRoute(
        routes[i].children as RouteRecordRawExtendCollection,
        routes[i].name as RouteRecordName
      );
    }
  }
}
