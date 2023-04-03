import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig
} from "axios";

const request: AxiosInstance = axios.create({
  timeout: 0
});

request.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.withCredentials = true;
    config.headers["Content-Type"] = "application/json;charset=UTF-8;";
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200) {
      return response.data;
    }
    return Promise.reject(response);
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default request;
