<template>
  <div class="header-nav">
    <div
      class="header-nav-item"
      :class="{ active: activePath.includes(item.path) }"
      v-for="item in navList"
      :key="item.name"
      @click="goToPath(item)"
    >
      {{ item.meta.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import appStore from "@/store";

// 一级导航列表
const getAsyncRoute = appStore.routeInfo.getAsyncRoute;
const navList = computed(() => {
  const list = getAsyncRoute?.filter((item) => item.name === "Layout")?.[0];
  if (list?.children) {
    // 如果存在路由则继续处理
    return list.children.map((item) => {
      return {
        meta: item.meta,
        name: item.name,
        path: item.path ? item.path : item.redirect ? item.redirect : ""
      };
    });
  } else {
    // 如果不存在路由则返回空数组
    return [];
  }
});
// 当前激活的路由path
const router = useRouter();
const activePath = computed(() => {
  return router.currentRoute.value.path;
});
// 导航跳转
const goToPath = (item: PageRouterInfo): void => {
  router.push(item.path);
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/main" as main;

.header-nav {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-width: 0;
  height: 100%;
  flex: 1;

  .header-nav-item {
    position: relative;
    cursor: pointer;
    font-size: 14px;
    user-select: none;
    color: main.$header-text;

    &:hover {
      color: main.$menu-text-active;
    }
  }

  .header-nav-item.active {
    color: main.$menu-text-active;
  }

  .header-nav-item + .header-nav-item {
    margin-left: 10px;
  }
}
</style>
