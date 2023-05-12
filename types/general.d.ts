// 分页的数据结构声明
interface PaginationItem {
  page: number;
  size: number;
  sizeList: number[];
  total: number;
  startNum: number;
}
