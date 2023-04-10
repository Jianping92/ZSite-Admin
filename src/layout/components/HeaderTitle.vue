<template>
  <div class="header-title">ZCatSite Admin</div>
</template>

<script setup></script>

<style lang="scss" scoped>
@use "@/assets/styles/main" as main;

.header-title {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  margin-right: 10px;
  height: 100%;
  font-size: 18px;
  color: main.$main-title;
  flex: none;
  box-sizing: border-box;
}
</style>
