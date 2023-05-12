<template>
  <div class="search-list">
    <div class="search-list-item">
      <div class="search-title">{{ searchListInfo.title }}</div>
      <div class="search-header-control">
        <el-input
          v-model="searchListInfo.searchInput"
          placeholder="请输入需要检索的标题"
          clearable
        />
        <el-button type="primary" @click="getDataByFilter">搜索</el-button>
        <el-button
          :type="searchListInfo!.showMoreFilter ? 'danger' : 'primary'"
          @click="showMore"
        >
          {{ searchListInfo!.showMoreFilter ? "收起" : "展开" }}
        </el-button>
      </div>
    </div>
    <div
      class="search-list-item"
      v-for="item in searchListInfo.searchFilterItem"
      :key="item.key"
    >
      <div class="search-item-title">{{ item.name }}</div>
      <div class="search-item-list">
        <div
          class="search-list-items"
          v-for="filter in item.list"
          :key="filter.key"
          @click="selectedFilter(filter, item)"
        >
          {{ filter.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from "dayjs";

interface SearchListProps {
  searchListInfo: SearchFilter;
}

const props = withDefaults(defineProps<SearchListProps>(), {
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
const { searchListInfo } = toRefs(props);

const emits = defineEmits(["getDataByFilter"]);

const getDataByFilter = () => {
  emits("getDataByFilter");
};

const showMore = () => {
  if ("showMoreFilter" in searchListInfo.value) {
    searchListInfo.value.showMoreFilter = !searchListInfo.value.showMoreFilter;
  }
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
</script>

<style lang="scss" scoped>
.search-list {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;

  .search-list-item {
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
      width: 80px;
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
      }
    }
  }
}
</style>
