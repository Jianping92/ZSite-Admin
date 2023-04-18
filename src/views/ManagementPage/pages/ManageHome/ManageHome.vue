<template>
  <div class="manage-home">
    <el-scrollbar>
      <!--   使用了类型断言     -->
      <data-panel :dataPanelInfo="dataPanelInfo as DataPanelItem[]" />
      <publish-hot :publishHotInfo="publishHotInfo as PublishHotData" />
      <display-pie-charts :pieChartsInfo="pieChartsInfo as PieDataItem[]" />
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import DataPanel from "@/views/ManagementPage/pages/ManageHome/components/DataPanel.vue";
import PublishHot from "@/views/ManagementPage/pages/ManageHome/components/PublishHot.vue";
import dayjs from "dayjs";
import DisplayPieCharts from "@/views/ManagementPage/pages/ManageHome/components/DisplayPieCharts.vue";

const dataPanelInfo = ref<DataPanelItem[]>([]);
const publishHotInfo = ref<PublishHotData>({
  year: 1987,
  publishList: []
});
const pieChartsInfo = ref<PieDataItem[]>([{ title: "", data: [] }]);

onMounted(() => {
  dataPanelInfo.value = [
    {
      id: "read",
      today: { name: "今日阅读", num: 12 },
      total: { name: "总阅读量", num: 345 }
    },
    {
      id: "article",
      today: { name: "今日发文", num: 9876 },
      total: { name: "总发文量", num: 987698 }
    },
    {
      id: "tag",
      today: { name: "新增标签", num: 9876 },
      total: { name: "总标签量", num: 987698 }
    },
    {
      id: "source",
      today: { name: "新增来源", num: 12 },
      total: { name: "总来源量", num: 987698 }
    }
  ];
  publishHotInfo.value.year = dayjs().year();
  publishHotInfo.value.publishList = [
    { date: "2023-01-01", num: 5 },
    { date: "2023-02-01", num: 10 },
    { date: "2023-03-01", num: 55 },
    { date: "2023-03-11", num: 60 },
    { date: "2023-04-01", num: 1 },
    { date: "2023-04-15", num: 8 }
  ];
  pieChartsInfo.value = [
    {
      title: "国家/地区",
      data: [
        { value: 12345, name: "china" },
        { value: 345, name: "hongkong" }
      ]
    },
    {
      title: "城市",
      data: [
        { value: 12345, name: "beijing" },
        { value: 345, name: "shanghai" },
        { value: 345, name: "hongkong" },
        { value: 12, name: "chengdu" }
      ]
    },
    {
      title: "浏览器",
      data: [
        { value: 12345, name: "chrome" },
        { value: 345, name: "edge" },
        { value: 345, name: "firefox" }
      ]
    },
    {
      title: "操作系统",
      data: [
        { value: 12345, name: "windows" },
        { value: 345, name: "mac" },
        { value: 345, name: "iphone" },
        { value: 345, name: "android" },
        { value: 345, name: "ipad" }
      ]
    }
  ];
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/main" as main;

.manage-home {
  position: relative;
  overflow: hidden;
  padding: 8px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: main.$main-background;
}
</style>
