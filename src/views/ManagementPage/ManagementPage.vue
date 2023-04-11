<template>
  <div class="manage-layout">
    <div class="manage-side">
      <side-navigation />
    </div>
    <div class="manage-main">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import SideNavigation from "@/views/ManagementPage/components/SideNavigation.vue";
</script>

<style lang="scss" scoped>
.manage-layout {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;

  .manage-side {
    position: relative;
    overflow: hidden;
    flex: none;
    min-width: 0;
    height: 100%;
  }

  .manage-main {
    position: relative;
    overflow: hidden;
    min-width: 0;
    height: 100%;
    flex: 1;
  }
}
</style>
