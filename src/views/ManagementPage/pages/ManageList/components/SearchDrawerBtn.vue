<template>
  <div
    ref="dragBtn"
    class="search-drawer-btn"
    @mousedown="dragMouseDown"
    @mousemove="dragMouseMove"
    @mouseup="dragMouseUp"
    @dblclick="clickBtn"
  >
    <i-ep-setting />
  </div>
</template>

<script setup lang="ts">
interface DragPosition {
  clientY: number;
  offsetTop: number;
}

// todo 这里的逻辑不太正常，需要优化，需要兼容单击和拖拽
const isDrag = ref<boolean>(false);
const dragBtn = ref<HTMLElement | null>(null);
const dragBtnPosition = ref<DragPosition>({
  clientY: 0,
  offsetTop: 0
});
const dragMouseDown = (event: MouseEvent): void => {
  isDrag.value = true;
  dragBtnPosition.value.clientY = event.clientY;
  dragBtnPosition.value.offsetTop = (dragBtn.value as HTMLElement).offsetTop;
  (dragBtn.value as HTMLElement).style.cursor = "move";
};
const dragMouseMove = (event: MouseEvent): void => {
  if (isDrag.value === false) return;
  let ny = event.clientY;
  let nt =
    ny - (dragBtnPosition.value.clientY - dragBtnPosition.value.offsetTop);
  (dragBtn.value as HTMLElement).style.top = nt + "px";
};
const dragMouseUp = (): void => {
  isDrag.value = false;
  (dragBtn.value as HTMLElement).style.cursor = "pointer";
};

const emits = defineEmits(["showDrawer"]);
const clickBtn = () => {
  emits("showDrawer");
};
</script>

<style lang="scss" scoped>
.search-drawer-btn {
  position: absolute;
  overflow: hidden;
  top: 200px;
  right: 0;
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  font-size: 20px;
  color: #fff;
  background: #409eff;
  border-radius: 4px;
  cursor: pointer;
}
</style>
