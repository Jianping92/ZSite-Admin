<template>
  <div class="manage-card-item">
    <div class="card-item-cover">
      <img src="" alt="" onerror="`this.style.display='none'`" />
    </div>
    <div class="card-item-title">
      <p>
        {{ "这里是标题位置，这里是标题位置，这里是标题位置，这里是标题位置" }}
      </p>
    </div>
    <div class="card-item-info">
      <div class="item-info-type">{{ "技术文章" }}</div>
      <div class="item-info-read">阅读量：{{ 1234 }}</div>
    </div>
    <div class="card-item-date">创建时间：{{ "2023-05-27 22:17:00" }}</div>
    <div class="card-item-date">发布时间：{{ "2023-05-27 22:17:00" }}</div>
    <div class="card-item-date">下线时间：{{ "2023-05-27 22:17:00" }}</div>
    <div class="card-item-control">
      <el-button type="primary" link>{{ "编辑" }}</el-button>
      <el-button type="danger" link>{{ "删除" }}</el-button>
      <el-button type="success" link>{{ "发布" }}</el-button>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.manage-card-item {
  position: relative;
  overflow: hidden;
  margin: 4px;
  width: 210px;
  height: 280px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;

  .card-item-cover {
    position: relative;
    overflow: hidden;
    width: 210px;
    height: 118px;
    background-color: #d9d9d9;

    & > img {
      position: relative;
      width: 100%;
      max-width: 100%;
    }
  }

  .card-item-title {
    position: relative;
    overflow: hidden;
    padding: 0 4px;
    width: 100%;
    height: 48px;
    box-sizing: border-box;

    & > p {
      position: relative;
      overflow: hidden;
      display: -webkit-box;
      text-overflow: ellipsis;
      word-break: break-all;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2; /* 超出几行省略 */
      cursor: pointer;
      line-height: 24px;
    }
  }

  .card-item-info {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 4px;
    margin-top: 4px;
    width: 100%;
    height: 20px;
    box-sizing: border-box;

    & > * {
      margin-right: 8px;
    }

    .item-info-type {
      position: relative;
      font-size: 14px;
      cursor: pointer;
    }

    .item-info-read {
      position: relative;
      font-size: 14px;
    }
  }

  .card-item-date {
    position: relative;
    overflow: hidden;
    padding: 0 4px;
    width: 100%;
    height: 20px;
    font-size: 12px;
    color: #8c8c8c;
    box-sizing: border-box;
    line-height: 20px;
  }

  .card-item-control {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 30px;
  }
}
</style>
