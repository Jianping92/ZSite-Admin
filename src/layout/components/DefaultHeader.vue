<template>
  <el-row class="header-layout">
    <header-title />
    <header-nav />
    <header-user />
  </el-row>
</template>

<script setup lang="ts">
import HeaderTitle from "@/layout/components/HeaderTitle.vue";
import HeaderNav from "@/layout/components/HeaderNav.vue";
import HeaderUser from "@/layout/components/HeaderUser.vue";
</script>

<style lang="scss" scoped>
@use "@/assets/styles/main" as main;

.header-layout {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: main.$header-background;
}
</style>
