import { filterByPermissions, fixRouteRedirect } from "@/utils/router-helper";
import { RouteRecordRawExtendCollection } from "../../../types/router";

export const routeInfo = defineStore("routeInfo", () => {
  const basicRoute = ref<object>([]);

  const filterRoute = ref<RouteRecordRawExtendCollection>([]);

  const setBasicRoute = (basic: RouteRecordRawExtendCollection): void => {
    basicRoute.value = basic;
  };
  const setAsyncRoute = (
    async: RouteRecordRawExtendCollection,
    basic: RouteRecordRawExtendCollection,
    permissions: object
  ): void => {
    const needFilter: RouteRecordRawExtendCollection = [...basic, ...async];
    let filters: RouteRecordRawExtendCollection = filterByPermissions(
      needFilter,
      permissions
    );
    filters = fixRouteRedirect(filters);
    filterRoute.value = filters;
  };

  const getAsyncRoute = computed(() => {
    return filterRoute.value;
  });

  return {
    basicRoute,
    filterRoute,
    setBasicRoute,
    setAsyncRoute,
    getAsyncRoute
  };
});
