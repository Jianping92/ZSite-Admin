<template>
  <div id="container" :class="[theme]">
    <el-config-provider :locale="locale">
      <router-view />
    </el-config-provider>
  </div>
</template>

<script setup lang="ts">
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import appStore from "@/store";
import { themeDataComputed } from "@/utils/theme-helper";

const locale = zhCn;

const params = {
  name: "ZCat",
  avatar: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
  email: "zhang_san@qq.com",
  sex: "男",
  permission: "admin",
  others: {
    summary: "前端开发工程师"
  }
};
onMounted(() => {
  appStore.userInfo.setUserBasic(params);
});
const theme = computed(() => {
  return themeDataComputed().theme.themeVal.value;
});
</script>

<style lang="scss" scoped>
#container {
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;

  &.dark {
    @include darkTheme();
  }

  &.light {
    @include lightTheme();
  }
}
</style>
