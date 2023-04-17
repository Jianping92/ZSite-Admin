<template>
  <div class="publish-hot">
    <div class="publish-hot-main" ref="main"></div>
  </div>
</template>

<script setup lang="ts">
// 参考事例 https://echarts.apache.org/examples/zh/editor.html?c=calendar-heatmap&lang=ts&random=g8il8d5xbv
import * as echarts from "echarts/core";
import {
  CalendarComponent,
  CalendarComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  VisualMapComponent,
  VisualMapComponentOption
} from "echarts/components";
import { HeatmapChart, HeatmapSeriesOption } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

type EChartsOption = echarts.ComposeOption<
  | CalendarComponentOption
  | TooltipComponentOption
  | VisualMapComponentOption
  | HeatmapSeriesOption
>;
interface PublishHotProps {
  publishHotInfo: PublishHotData;
}

echarts.use([
  CalendarComponent,
  TooltipComponent,
  VisualMapComponent,
  HeatmapChart,
  CanvasRenderer
]);

const props = withDefaults(defineProps<PublishHotProps>(), {
  publishHotInfo: () => {
    return {
      year: 1984,
      publishList: []
    };
  }
});
const { publishHotInfo } = toRefs(props);
console.log(publishHotInfo.value);

const main: Ref<HTMLElement | null> = ref(null);
let charts: echarts.EChartsType;
let option: EChartsOption;

watch(
  publishHotInfo,
  () => {
    initEcharts();
  },
  { deep: true }
);

const initEcharts = () => {
  const chartDom = main.value;
  if (chartDom) {
    charts = echarts.init(chartDom);
    option = getOption();
    option && charts.setOption(option);
  }
};
// todo 实现echarts跟随色彩模式切换颜色，思路：监听主题变化，销毁echarts实例，再创建新实例   echarts.init(chartDom)/echarts.init(chartDom, "dark")

const getOption = () => {
  const options: EChartsOption = {
    tooltip: {},
    visualMap: {
      min: 0,
      max: 10000,
      type: "piecewise",
      orient: "horizontal",
      left: "center",
      pieces: [
        { max: 1 },
        { min: 1, max: 5 },
        { min: 5, max: 10 },
        { min: 10, max: 50 },
        { min: 50, max: 100 },
        { min: 100 }
      ],
      top: 0
    },
    calendar: {
      top: 60,
      left: 30,
      right: 30,
      cellSize: ["auto", 13],
      range: publishHotInfo.value.year,
      itemStyle: {
        borderWidth: 0.5
      },
      yearLabel: { show: false }
    },
    series: {
      type: "heatmap",
      coordinateSystem: "calendar",
      data: getVirtualData()
    }
  };
  return options;
};

function getVirtualData() {
  const year: number = publishHotInfo.value.year;
  const date = +echarts.time.parse(year + "-01-01");
  const end = +echarts.time.parse(+year + 1 + "-01-01");
  const dayTime = 3600 * 24 * 1000;
  const data: [string, number][] = [];
  for (let time = date; time < end; time += dayTime) {
    const date = echarts.time.format(time, "{yyyy}-{MM}-{dd}", false);
    const num =
      publishHotInfo.value.publishList.filter((item) => item.date === date)?.[0]
        ?.num ?? 0;
    data.push([date, num]);
  }
  return data;
}

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
.publish-hot {
  position: relative;
  overflow: hidden;
  padding: 0 8px;
  margin-top: 16px;
  width: 100%;
  height: 180px;
  box-sizing: border-box;

  .publish-hot-main {
    position: relative;
    width: 100%;
    height: 100%;
  }
}
</style>
