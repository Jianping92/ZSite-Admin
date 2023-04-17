import { RouteRecordRaw, RouteLocationNormalized } from "vue-router";

export interface RouteItemInfo {
  hidden?: boolean;
  meta?: {
    title?: string;
    hidden?: boolean;
    permission?: string[];
    rules?: string[];
    isCreate?: boolean;
  };
  children?: Array<RouteRecordRawExtend>;
  redirect?: string | undefined;
}

export interface PageRouterInfo {
  meta?: {
    title?: string;
    hidden?: boolean;
    permission?: string[];
    rules?: string[];
    isCreate?: boolean;
  };
  name?: string;
  path?: string;
}

/**
 * RouteRecordRaw扩展(&:交叉类型,将多个类型合并为一个类型)
 */
export type RouteRecordRawExtend = RouteRecordRaw & RouteItemInfo;

/**
 * RouteLocationNormalized拓展
 * */
export type RouteLocationNormalizedExtend = RouteLocationNormalized &
  RouteItemInfo;
/**
 * RouteRecordRawExtend集合
 */
export type RouteRecordRawExtendCollection = Array<RouteRecordRawExtend>;
