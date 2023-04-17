// 面板数据项
interface PanelInfo {
  name: string;
  num: number;
}
// 面板数据子项声明
interface DataPanelItem {
  id: string;
  today: PanelInfo;
  total: PanelInfo;
}

// 发布热力数据项
interface PublishItem {
  date: string;
  num: number;
}
// 发布热力数据结构声明
interface PublishHotData {
  year: number;
  publishList: PublishItem[];
}
