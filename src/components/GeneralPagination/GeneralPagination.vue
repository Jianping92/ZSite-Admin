<template>
  <div
    class="general-pagination"
    :style="{ height: lineHeight ? `${lineHeight}px` : '50px' }"
  >
    <el-pagination
      v-model:currentPage="paginationInfo.page"
      v-model:page-size="paginationInfo.size"
      :page-sizes="paginationInfo.sizeList"
      background
      layout="total, prev, pager, next, jumper, sizes"
      :total="paginationInfo.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup lang="ts">
interface PaginationProps {
  lineHeight?: number;
  paginationInfo: PaginationItem;
}

const props = withDefaults(defineProps<PaginationProps>(), {
  lineHeight: 50,
  paginationInfo: () => {
    return {
      page: 1,
      size: 10,
      sizeList: [],
      total: 0,
      startNum: 0
    };
  }
});
const { lineHeight, paginationInfo } = toRefs(props);

const handleSizeChange = (value: number) => {
  paginationInfo.value.startNum = 0;
  paginationInfo.value.page = 1;
  paginationInfo.value.size = value;
  emits("getTableData");
};
const handleCurrentChange = (value: number) => {
  paginationInfo.value.page = value;
  paginationInfo.value.startNum = (value - 1) * paginationInfo.value.size;
  emits("getTableData");
};

const emits = defineEmits(["getTableData"]);
function handleInit() {
  paginationInfo.value.startNum = 0;
  paginationInfo.value.page = 1;
  emits("getTableData");
}
defineExpose({ handleInit });
</script>

<style lang="scss" scoped>
.general-pagination {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 8px;
  width: 100%;
  box-sizing: border-box;
  user-select: none;
}
</style>
