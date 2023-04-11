<template>
  <div class="header-user">
    <div class="user-control-theme">
      <el-switch
        v-model="isDarkTheme"
        active-text="深色模式"
        inactive-text="浅色模式"
        @change="theme.toggleTheme()"
      />
    </div>
    <div class="user-dropdown">
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          {{ userBasic.name }}
          <el-icon class="el-icon--right"><i-ep-arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="userInfo">
              <el-icon><i-ep-cpu /></el-icon>用户信息
            </el-dropdown-item>
            <el-dropdown-item command="logout">
              <el-icon><i-ep-switch-button /></el-icon> 退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import appStore from "@/store";
import { themeDataComputed } from "@/utils/theme-change";

const { userBasic } = storeToRefs(appStore.userInfo);
const handleCommand = (command: string | number | object) => {
  console.log(command);
};

const isDarkTheme = ref<boolean>(false);
const theme = themeDataComputed().theme;
onMounted(() => {
  isDarkTheme.value = themeDataComputed().isDarkTheme.value;
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/main.scss" as main;

.header-user {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 10px;
  height: 100%;
  flex: none;
  user-select: none;

  .user-control-theme {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    height: 100%;

    :deep(.el-switch__label *) {
      font-size: 12px;
    }
  }

  .user-dropdown {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: main.$header-text;
    cursor: pointer;
  }
}
</style>
