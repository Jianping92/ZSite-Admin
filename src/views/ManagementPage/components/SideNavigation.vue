<template>
  <div class="side-navigation">
    <div class="side-navigation-content">
      <el-scrollbar height="100%">
        <div
          class="nav-item"
          :class="{ 'item-active': currentRoute.includes(item.path) }"
          v-for="item in navList"
          :key="item.name"
          @click="changeRouter(item.path)"
        >
          <div class="nav-item-content">
            <p>{{ item.meta!.title || "未设置页面名称" }}</p>
          </div>
        </div>
      </el-scrollbar>
    </div>
    <div class="side-navigation-control"></div>
  </div>
</template>

<script setup lang="ts">
import appStore from "@/store";

const router = useRouter();
// 获取当前路由path
const currentRoute = computed(() => {
  return router?.currentRoute?.value?.path ?? "";
});

const getAsyncRoute = appStore.routeInfo.getAsyncRoute;
const navList = computed(() => {
  const list = getAsyncRoute?.filter((item) => item.name === "Layout")?.[0];
  if (list?.children) {
    // 如果存在路由则继续处理
    return (
      list.children?.filter((item) => item.name === "managePage")?.[0]
        ?.children ?? []
    );
  } else {
    // 如果不存在路由则返回空数组
    return [];
  }
});

// 切换路由
const changeRouter = (path: string) => {
  if (currentRoute.value === path) {
    return;
  }
  router.push(path);
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/main" as main;

.side-navigation {
  position: relative;
  overflow: hidden;
  width: 180px;
  height: 100%;
  background-color: main.$menu-background;

  .side-navigation-content {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: calc(100% - 40px);

    .nav-item {
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 40px;
      cursor: pointer;
      user-select: none;

      .nav-item-content {
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0 10px;
        height: 100%;
        box-sizing: border-box;

        & > p {
          user-select: none;
          color: main.$menu-text;
        }

        .nav-item-icon {
          margin-right: 8px;
          color: #000;
        }
      }
    }

    .nav-item.item-active {
      background-color: main.$menu-background-active;

      p {
        color: main.$menu-text-active;
      }
    }
  }

  .side-navigation-control {
    position: relative;
    width: 100%;
    height: 40px;
  }
}
</style>
