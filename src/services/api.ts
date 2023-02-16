import type {
  AxiosInstance,
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import axios from 'axios';

const instance: AxiosInstance = axios.create({});

export default function api(method: string, url: string, data: Record<string, any>) {
  const type = method.toLowerCase();
  const token = localStorage.getItem('TOKEN');
  /* 請求攔截器 */
  instance.interceptors.request.use(
    (config: AxiosRequestConfig | any) => {
      //  偽代碼
      // if (token) {
      //   config.headers.Authorization = `Bearer ${token}`;
      // }
      return config;
    },
    (error: AxiosError) => {
      console.error(error.message)
      // Message.error(error.message);
      return Promise.reject(error);
    }
  );

  /* 響應攔截器 */
  instance.interceptors.response.use(
  (response: AxiosResponse) => {
    const { code, message, data } = response.data;

    // 根據自定義錯誤碼判斷請求是否成功
    if (code === 0) {
      return data;
    } else {
      // 錯誤處理
      console.info(message)
      // Message.error(message);
      return Promise.reject(new Error(message));
    }
  },
  (error: AxiosError) => {
    // 處理 HTTP 網路錯誤
    let message = "";
    // HTTP 状态码
    const status = error.response?.status;
    switch (status) {
      case 401:
        message = "token 失效，請重新登錄";
        // 這裡可以觸發退出的 action
        break;
      case 403:
        message = "拒絕訪問";
        break;
      case 404:
        message = "請求地址錯誤";
        break;
      case 500:
        message = "伺服器故障";
        break;
      default:
        message = "網路連結失敗";
    }

    console.error(message)
    // Message.error(message);
    return Promise.reject(error);
  }
);

  return instance({
    baseURL: "/api",
    method: type,
    url,
    headers: {
      'x-token': token || '',
    },
    [type === 'get' ? 'params' : 'body']: data,
  });
}
