<template>
  <el-container class="default-layout">
    <el-header>
      <header-layout />
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script setup>
import HeaderLayout from "@/layout/components/HeaderLayout.vue";
</script>

<style lang="scss" scoped>
.default-layout {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;

  :deep(.el-header) {
    padding: 0;
  }

  :deep(.el-main) {
    padding: 0;
  }
}
</style>
