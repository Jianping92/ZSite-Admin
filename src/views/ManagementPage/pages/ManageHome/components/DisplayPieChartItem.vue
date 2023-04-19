<template>
  <div class="chart-item">
    <div class="chart-item-body" ref="pieCharts"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from "echarts/core";
import {
  TitleComponent,
  TitleComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  LegendComponent,
  LegendComponentOption
} from "echarts/components";
import { PieChart, PieSeriesOption } from "echarts/charts";
import { LabelLayout } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

type EChartsOption = echarts.ComposeOption<
  | TitleComponentOption
  | TooltipComponentOption
  | LegendComponentOption
  | PieSeriesOption
>;

echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout
]);

const pieCharts: Ref<HTMLElement | null> = ref(null);
let charts: echarts.EChartsType;
let option: EChartsOption;

const initEcharts = () => {
  const chartDom = pieCharts.value;
  if (chartDom) {
    charts = echarts.init(chartDom);
    option = getOption();
    option && charts.setOption(option);
  }
};

const getOption = () => {
  const options: EChartsOption = {
    title: {
      show: true,
      text: pieChartItem.value.title
    },
    tooltip: {
      trigger: "item"
    },
    legend: {
      top: 0,
      orient: "vertical",
      right: 0
    },
    series: [
      {
        name: pieChartItem.value.title,
        type: "pie",
        right: "15%",
        radius: ["30%", "60%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2
        },
        label: {
          show: false,
          position: "center"
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 28,
            fontWeight: "bold"
          }
        },
        labelLine: {
          show: false
        },
        data: pieChartItem.value.data
      }
    ]
  };
  return options;
};

interface DisplayPieChartItemProps {
  pieChartItem: PieDataItem;
}

const props = defineProps<DisplayPieChartItemProps>();
const { pieChartItem } = toRefs(props);

watch(
  pieChartItem,
  () => {
    nextTick(() => {
      initEcharts();
    });
  },
  { deep: true, immediate: true }
);

onMounted(() => {
  window.addEventListener("resize", () => {
    if (charts) {
      charts.resize();
    }
  });
});

onUnmounted(() => {
  window.removeEventListener("resize", () => {
    if (charts) {
      charts.resize();
    }
  });
});
</script>

<style lang="scss" scoped>
.chart-item {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;

  .chart-item-body {
    position: relative;
    width: 100%;
    height: 100%;
  }
}
</style>
