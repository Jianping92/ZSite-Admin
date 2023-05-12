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
      {{ item.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface SearchListProps {
  searchListInfo: SearchFilter;
}

const props = withDefaults(defineProps<SearchListProps>(), {
  searchListInfo: () => {
    return {
      title: "",
      searchInput: "",
      showMoreFilter: false,
      searchFilterItem: []
    };
  }
});
const { searchListInfo } = toRefs(props);
console.log(searchListInfo.value, "s");

const emits = defineEmits(["getDataByFilter"]);

const getDataByFilter = () => {
  emits("getDataByFilter");
};

const showMore = () => {
  if ("showMoreFilter" in searchListInfo.value) {
    searchListInfo.value.showMoreFilter = !searchListInfo.value.showMoreFilter;
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
    align-items: center;
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
  }
}
</style>
