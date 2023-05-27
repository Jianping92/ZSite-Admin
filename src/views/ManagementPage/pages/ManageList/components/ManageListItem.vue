<template>
  <div class="manage-list-item">
    <div class="list-item-cover">
      <img src="" alt="" onerror="`this.style.display='none'`" />
    </div>
    <div class="list-item-content">
      <div class="item-content-upper">
        <div class="upper-title">
          <p>{{ "这里是标题位置，这里是标题位置，这里是标题位置" }}</p>
        </div>
        <div class="upper-control">
          <el-button type="primary" link>{{ "编辑" }}</el-button>
          <el-button type="danger" link>{{ "删除" }}</el-button>
          <el-button type="success" link>{{ "发布" }}</el-button>
        </div>
      </div>
      <div class="item-content-general">
        <div class="item-general-type">{{ "技术文章" }}</div>
        <div class="item-general-read">阅读量：{{ 1234 }}</div>
      </div>
      <div class="item-content-general">
        <div class="item-general-date">
          创建时间：{{ "2023-05-27 22:17:00" }}
        </div>
        <div class="item-general-date">
          发布时间：{{ "2023-05-27 22:17:00" }}
        </div>
        <div class="item-general-date">
          下线时间：{{ "2023-05-27 22:17:00" }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.manage-list-item {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 86px;
  border-bottom: 1px solid #d9d9d9;

  .list-item-cover {
    position: relative;
    overflow: hidden;
    width: 142px;
    height: 80px;
    background-color: #d9d9d9;
    border-radius: 4px;
    flex: none;

    & > img {
      position: relative;
      width: 100%;
      max-width: 100%;
    }
  }

  .list-item-content {
    position: relative;
    overflow: hidden;
    margin-left: 8px;
    min-width: 0;
    height: 100%;
    flex: 1;
    //display: flex;
    //flex-direction: column;

    .item-content-upper {
      position: relative;
      overflow: hidden;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      height: 35px;

      .upper-title {
        position: relative;
        overflow: hidden;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        min-width: 0;
        height: 100%;
        flex: 1;

        & > p {
          position: relative;
          overflow: hidden;
          font-size: 16px;
          text-overflow: ellipsis;
          white-space: nowrap;
          cursor: pointer;
        }
      }

      .upper-control {
        position: relative;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 8px;
        width: auto;
        height: 100%;
        flex: none;
      }
    }

    .item-content-general {
      position: relative;
      overflow: hidden;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      height: 25px;

      .item-general-type {
        position: relative;
        font-size: 14px;
        cursor: pointer;
      }

      .item-general-read {
        position: relative;
        font-size: 14px;
      }

      .item-general-date {
        position: relative;
        font-size: 12px;
        color: #8c8c8c;
      }

      & > * {
        margin-right: 16px;
      }
    }
  }
}
</style>
