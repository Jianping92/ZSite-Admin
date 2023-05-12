/**
 * 常量配置
 * */

export const TypeList: SearchFilterItem = {
  name: "类型",
  key: "typeList",
  multiple: true,
  list: [
    { key: "all", title: "全部" },
    { key: "technology", title: "技术文章" },
    { key: "travel", title: "游戏人间" },
    { key: "life", title: "生活随笔" },
    { key: "essay", title: "胡言乱语" },
    { key: "images", title: "图片合集" }
  ]
};

export const DateList: SearchFilterItem = {
  name: "时间",
  key: "dateList",
  multiple: false,
  list: [
    { key: "all", title: "全部" },
    { key: "7day", title: "最近7天" },
    { key: "15day", title: "最近15天" },
    { key: "30day", title: "最近30天" }
  ],
  showDateSelected: true
};

export const SourceList: SearchFilterItem = {
  name: "资源",
  key: "sourceList",
  multiple: false,
  list: [
    { key: "all", title: "全部" },
    { key: "resources", title: "包含资源" },
    { key: "unResources", title: "不含资源" }
  ]
};

export const StatusList: SearchFilterItem = {
  name: "状态",
  key: "statusList",
  multiple: true,
  list: [
    { key: "all", title: "全部" },
    { key: "draft", title: "草稿" },
    { key: "online", title: "发布" },
    { key: "offline", title: "下线" }
  ]
};

export const ViewList: SearchFilterItem = {
  name: "查看",
  key: "viewList",
  multiple: false,
  list: [
    { key: "all", title: "全部" },
    { key: "less10", title: "小于10" },
    { key: "less50", title: "小于50" },
    { key: "less500", title: "小于500" },
    { key: "more500", title: "大于500" }
  ]
};

export const DisplayList: SearchFilterItem = {
  name: "展示",
  key: "displayList",
  multiple: false,
  list: [
    { key: "list", title: "列表" },
    { key: "card", title: "卡片" }
  ]
};
