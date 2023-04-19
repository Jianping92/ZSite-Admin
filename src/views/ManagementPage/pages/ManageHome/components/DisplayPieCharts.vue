<template>
  <div class="pie-charts">
    <template v-if="pieChartsInfo.length">
      <div
        class="pie-charts-item"
        v-for="item in pieChartsInfo"
        :key="item.title"
      >
        <display-pie-chart-item :pieChartItem="item as PieDataItem" />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import DisplayPieChartItem from "@/views/ManagementPage/pages/ManageHome/components/DisplayPieChartItem.vue";

interface DisplayPieChartsProps {
  pieChartsInfo: PieDataItem[];
}

const props = withDefaults(defineProps<DisplayPieChartsProps>(), {
  pieChartsInfo: () => {
    return [];
  }
});
const { pieChartsInfo } = toRefs(props);
</script>

<style lang="scss" scoped>
.pie-charts {
  position: relative;
  display: grid;
  width: 100%;
  height: auto;
  grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));

  .pie-charts-item {
    position: relative;
    overflow: hidden;
    margin: 0 8px 16px;
    height: 270px;
    background-color: #3b7cd6;
  }
}
</style>
