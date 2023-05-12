<template>
  <el-drawer
    v-model="openDrawer"
    title="I am the title"
    :before-close="handleClose"
    :with-header="false"
    :size="550"
  >
    <span class="normal">Hi, there!</span>
  </el-drawer>
</template>

<script setup lang="ts">
interface SearchDrawerProps {
  openDrawer: boolean;
}
const props = withDefaults(defineProps<SearchDrawerProps>(), {
  openDrawer: false
});
const { openDrawer } = toRefs(props);

const handleClose = () => {
  console.log("handleClose");
};
</script>

<style lang="scss" scoped>
.normal {
  position: relative;
}
</style>
