<template>
  <el-drawer
    v-model="openDrawer"
    title="I am the title"
    :with-header="false"
    :close-on-click-modal="false"
    :size="550"
  >
    <div class="search-drawer">
      <div class="search-drawer-main">
        <el-scrollbar>
          <div class="drawer-list-item">
            <div class="search-title">{{ searchListInfo.title }}</div>
            <div class="search-header-control">
              <el-input
                v-model="searchListInfo.searchInput"
                placeholder="请输入需要检索的标题"
                clearable
              />
            </div>
          </div>
          <div
            class="drawer-list-item"
            v-for="item in searchListInfo.searchFilterItem"
            :key="item.key"
          >
            <div class="search-item-title">{{ item.name }}</div>
            <div class="search-item-list">
              <div
                class="search-list-items"
                :class="{ 'item-active': itemIsActive(filter, item) }"
                v-for="filter in item.list"
                :key="filter.key"
                @click="selectedFilter(filter, item)"
              >
                {{ filter.title }}
              </div>
            </div>
          </div>
        </el-scrollbar>
      </div>
      <div class="search-drawer-footer">
        <el-button type="primary" @click="handleSubmit">确认</el-button>
      </div>
    </div>
  </el-drawer>
</template>

<script setup lang="ts">
import dayjs from "dayjs";

interface SearchDrawerProps {
  openDrawer: boolean;
  searchListInfo: SearchFilter;
}
const props = withDefaults(defineProps<SearchDrawerProps>(), {
  openDrawer: false,
  searchListInfo: () => {
    return {
      title: "",
      searchInput: "",
      showMoreFilter: false,
      searchFilterItem: [],
      activeFilterItem: {}
    };
  }
});
const { openDrawer, searchListInfo } = toRefs(props);

const itemIsActive = (
  selected: SearchFilterItemListItem,
  item: SearchFilterItem
) => {
  const { key: filterKey } = item;
  if (
    filterKey in (searchListInfo.value.activeFilterItem as ActiveFilterItem)
  ) {
    let activeFilterItem = (
      searchListInfo.value.activeFilterItem as ActiveFilterItem
    )[filterKey];
    if (Array.isArray(activeFilterItem)) {
      return activeFilterItem.includes(selected.key);
    } else if ("activeKey" in (activeFilterItem as SearchActiveDateItem)) {
      // 如果activeKey存在则表示是时间筛选条件
      return (
        (activeFilterItem as SearchActiveDateItem).activeKey === selected.key
      );
    }
  }
  return false;
};

const selectedFilter = (
  selected: SearchFilterItemListItem,
  item: SearchFilterItem
) => {
  const { key: filterKey, multiple } = item;
  // 判断选择的key在传进来的数据中存在
  if (
    filterKey in (searchListInfo.value.activeFilterItem as ActiveFilterItem)
  ) {
    let activeFilterItem = (
      searchListInfo.value.activeFilterItem as ActiveFilterItem
    )[filterKey];
    // 也可以用下面的写法
    // const activeFilterItem = searchListInfo.value.activeFilterItem?.[filterKey];

    if (Array.isArray(activeFilterItem)) {
      // 如果是数组则再判断是否可以多选
      if (multiple) {
        // 多选则要判断是否选中的为“all”
        if (selected.key === "all") {
          (searchListInfo.value.activeFilterItem as ActiveFilterItem)[
            filterKey
          ] = ["all"];
        } else {
          if (
            (activeFilterItem as string[])?.filter(
              (item) => item === selected.key
            )?.length < 1
          ) {
            // 不存在则push进入，否则不处理，同时要去掉“all“
            activeFilterItem.push(selected.key as string);
            activeFilterItem = activeFilterItem.filter(
              (item) => item !== "all"
            );
            (searchListInfo.value.activeFilterItem as ActiveFilterItem)[
              filterKey
            ] = activeFilterItem;
          } else {
            // 存在则要将清除掉
            activeFilterItem = activeFilterItem.filter(
              (item) => item !== selected.key
            );
            // 如果数据去重后为空则需要填充 all
            if (activeFilterItem.length < 1) {
              activeFilterItem.push("all");
            }
            (searchListInfo.value.activeFilterItem as ActiveFilterItem)[
              filterKey
            ] = activeFilterItem;
          }
        }
      } else {
        // 单选则替换数组[0]的数据即可
        (searchListInfo.value.activeFilterItem as ActiveFilterItem)[filterKey] =
          [selected.key];
      }
    } else if ("activeKey" in (activeFilterItem as SearchActiveDateItem)) {
      // 如果activeKey存在则表示是时间筛选条件
      let optionalDate: string[] = [];
      if (selected.key === "7day") {
        optionalDate = [
          dayjs().subtract(7, "d").format("YYYY-MM-DD"),
          dayjs().format("YYYY-MM-DD")
        ];
      } else if (selected.key === "15day") {
        optionalDate = [
          dayjs().subtract(15, "d").format("YYYY-MM-DD"),
          dayjs().format("YYYY-MM-DD")
        ];
      } else if (selected.key === "30day") {
        optionalDate = [
          dayjs().subtract(30, "d").format("YYYY-MM-DD"),
          dayjs().format("YYYY-MM-DD")
        ];
      }
      (searchListInfo.value.activeFilterItem as ActiveFilterItem)[filterKey] = {
        activeKey: selected.key,
        optionalDate: optionalDate
      };
    }
  }
};

const emits = defineEmits(["drawerSubmit"]);
const handleSubmit = () => {
  emits("drawerSubmit");
};
</script>

<style lang="scss" scoped>
.search-drawer {
  position: relative;
  overflow: hidden;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;

  .search-drawer-main {
    position: relative;
    overflow: hidden;
    flex: 1;
    width: 100%;

    .drawer-list-item {
      position: relative;
      overflow: hidden;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
      height: auto;
      min-height: 30px;

      .search-title {
        position: relative;
        margin-right: 8px;
        width: auto;
        font-size: 18px;
        line-height: 30px;
        font-weight: 700;
        flex: none;
      }

      .search-header-control {
        position: relative;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;

        .el-input {
          position: relative;
          width: 250px;
        }

        & > * {
          margin-left: 8px;
        }
      }

      .search-item-title {
        position: relative;
        overflow: hidden;
        width: 50px;
        height: 30px;
        font-size: 14px;
        text-align: left;
        flex: none;
        line-height: 30px;
      }

      .search-item-list {
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        min-width: 0;
        flex: 1;
        line-height: 30px;
        flex-wrap: wrap;

        .search-list-items {
          position: relative;
          padding: 0 8px;
          font-size: 16px;
          text-align: center;
          line-height: 30px;
          box-sizing: border-box;
          cursor: pointer;

          &:hover {
            color: #409eff;
          }

          &.item-active {
            color: #409eff;
          }
        }
      }
    }
  }

  .search-drawer-footer {
    position: relative;
    flex: none;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 50px;
  }
}
</style>
