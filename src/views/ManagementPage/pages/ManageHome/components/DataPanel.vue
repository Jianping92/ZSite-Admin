<template>
  <div class="data-panel">
    <div class="data-panel-item" v-for="item in dataPanelInfo" :key="item.id">
      <div class="item-content">
        <div class="item-content-title">{{ item.today.name }}</div>
        <div class="item-content-num">{{ item.today.num }}</div>
      </div>
      <div class="item-content">
        <div class="item-content-title">{{ item.total.name }}</div>
        <div class="item-content-num">{{ item.total.num }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface DataPanelProps {
  dataPanelInfo: DataPanelItem[];
}

// 这里需要注意是：defineProps不支持使用外部导入的类型，这里采用内容在外部声明，再到组建内组装的方式解决
const props = withDefaults(defineProps<DataPanelProps>(), {
  dataPanelInfo: () => {
    return [];
  }
});
const { dataPanelInfo } = toRefs(props);
</script>

<style lang="scss" scoped>
.data-panel {
  position: relative;
  display: grid;
  width: 100%;
  height: auto;
  grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));

  .data-panel-item {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 16px;
    margin: 0 8px 16px;
    background-color: #3b7cd6;
    box-sizing: border-box;

    .item-content {
      position: relative;
      padding: 0 8px;
      width: auto;
      box-sizing: border-box;

      .item-content-title {
        position: relative;
        font-size: 16px;
      }
    }

    .item-content + .item-content {
      border-left: 2px solid;
    }
  }
}
</style>
