<template>
  <div class="manage-list">
    <div
      class="manage-list-search"
      :class="{ more: searchListInfo.showMoreFilter }"
    >
      <search-list
        :searchListInfo="searchListInfo as SearchFilter"
        @getDataByFilter="getDataBySearch"
      />
    </div>
    <div class="manage-list-content">
      <div class="manage-list-main">
        <el-scrollbar>
          <div
            class="manage-main-list"
            v-if="searchListInfo.activeFilterItem.displayList[0] === 'list'"
          >
            <manage-list-item v-for="index in 10" :key="index" />
          </div>
          <div
            class="manage-main-card"
            v-else-if="
              searchListInfo.activeFilterItem.displayList[0] === 'card'
            "
          >
            <manage-card-item v-for="index in 20" :key="index" />
          </div>
        </el-scrollbar>
      </div>
      <general-pagination
        ref="pagination"
        :pagination-info="paginationInfo as PaginationItem"
      />
    </div>
  </div>
  <search-drawer
    :openDrawer="showDrawer as boolean"
    :searchListInfo="searchListInfo as SearchFilter"
    @drawerSubmit="drawerSubmit"
  />
  <search-drawer-btn @showDrawer="openDrawer" />
</template>

<script setup lang="ts">
import SearchDrawer from "@/views/ManagementPage/pages/ManageList/components/SearchDrawer.vue";
import SearchList from "@/views/ManagementPage/pages/ManageList/components/SearchList.vue";
import {
  DateList,
  DisplayList,
  SourceList,
  StatusList,
  TypeList,
  ViewList
} from "@/utils/constants";
import SearchDrawerBtn from "@/views/ManagementPage/pages/ManageList/components/SearchDrawerBtn.vue";
import ManageListItem from "@/views/ManagementPage/pages/ManageList/components/ManageListItem.vue";
import ManageCardItem from "@/views/ManagementPage/pages/ManageList/components/ManageCardItem.vue";

const pagination = ref<HTMLElement | null>(null);
let paginationInfo = ref<PaginationItem>({
  page: 1,
  size: 25,
  sizeList: [15, 25, 35, 45],
  total: 0,
  startNum: 0
});

const showDrawer = ref<boolean>(false);

const searchListInfo = reactive<SearchFilter>({
  title: "管理列表",
  searchInput: "",
  showMoreFilter: false,
  searchFilterItem: [
    TypeList,
    DateList,
    SourceList,
    StatusList,
    ViewList,
    DisplayList
  ],
  activeFilterItem: {
    typeList: ["all"],
    dateList: {
      activeKey: "all",
      optionalDate: []
    },
    sourceList: ["all"],
    statusList: ["all"],
    viewList: ["all"],
    displayList: ["list"]
  }
});

const openDrawer = () => {
  showDrawer.value = true;
};
const drawerSubmit = () => {
  showDrawer.value = false;
  getDataBySearch();
};

const getDataBySearch = async () => {
  console.log("getDataBySearch");
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/main" as main;

.manage-list {
  position: relative;
  overflow: hidden;
  padding: 8px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: main.$main-background;

  .manage-list-search {
    position: absolute;
    overflow: hidden;
    top: 8px;
    right: 8px;
    left: 8px;
    z-index: 100;
    padding: 5px;
    height: 100px;
    background: #fff;
    border-radius: 4px;
    box-sizing: border-box;

    &.more {
      overflow-y: auto;
      height: auto;
      min-height: 100px;
      max-height: 100%;
      box-shadow: 0 2px 28px 0 #0000005c;
    }
  }

  .manage-list-content {
    position: relative;
    overflow: hidden;
    top: 108px;
    width: 100%;
    height: calc(100% - 108px);
    background: #fff;
    border-radius: 4px;

    .manage-list-main {
      position: relative;
      overflow-y: hidden;
      width: 100%;
      height: calc(100% - 50px);

      .manage-main-list {
        position: relative;
        padding: 8px;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
      }

      .manage-main-card {
        position: relative;
        display: flex;
        justify-content: flex-start;
        padding: 8px;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        align-content: flex-start;
        flex-wrap: wrap;
      }
    }
  }
}
</style>
