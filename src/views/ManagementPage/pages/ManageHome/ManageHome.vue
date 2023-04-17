<template>
  <div class="manage-home">
    <el-scrollbar>
      <!--   这里使用了类型断言     -->
      <data-panel :dataPanelInfo="dataPanelInfo as DataPanelItem[]" />
      <publish-hot :publishHotInfo="publishHotInfo as PublishHotData" />
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import DataPanel from "@/views/ManagementPage/pages/ManageHome/components/DataPanel.vue";
import PublishHot from "@/views/ManagementPage/pages/ManageHome/components/PublishHot.vue";
import dayjs from "dayjs";

const dataPanelInfo = ref<DataPanelItem[]>([]);
const publishHotInfo = ref<PublishHotData>({
  year: 1987,
  publishList: []
});

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
