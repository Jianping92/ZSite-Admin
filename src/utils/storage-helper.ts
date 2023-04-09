export type StorageData = string | object | boolean;

export const getLocalItem = (key: string): StorageData => {
  const res = localStorage.getItem(key);
  if (res) {
    return JSON.parse(res);
  } else {
    return "";
  }
};

export const setLocalItem = (key: string, data: StorageData): void => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const removeLocalItem = (key: string): void => {
  localStorage.removeItem(key);
};

export const removeLocalStorage = (): void => {
  localStorage.clear();
};

export const getSessionItem = (key: string): StorageData => {
  const res = sessionStorage.getItem(key);
  if (res) {
    return JSON.parse(res);
  } else {
    return "";
  }
};

export const setSessionItem = (key: string, data: StorageData): void => {
  sessionStorage.setItem(key, JSON.stringify(data));
};

export const removeSessionItem = (key: string): void => {
  sessionStorage.removeItem(key);
};

export const removeSessionStorage = (): void => {
  sessionStorage.clear();
};
