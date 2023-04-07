import { RouteRecordRaw } from "vue-router";

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

/**
 * RouteRecordRaw扩展(&:交叉类型,将多个类型合并为一个类型)
 */
export type RouteRecordRawExtend = RouteRecordRaw & RouteItemInfo;

/**
 * RouteRecordRawExtend集合
 */
export type RouteRecordRawExtendCollection = Array<RouteRecordRawExtend>;
