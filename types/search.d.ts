// 检索条件子项的声明
interface SearchFilterItem {
  name: string;
  key: string;
  multiple: boolean;
  list: SearchFilterItemListItem[];
  showDateSelected?: boolean;
}

// 检索条件子项中的遍历数据声明
interface SearchFilterItemListItem {
  key: string;
  title: string;
}

// 检索条件的声明
interface SearchFilter {
  title: string;
  showMoreFilter?: boolean;
  searchInput: string | string[];
  searchFilterItem: SearchFilterItem[];
}
