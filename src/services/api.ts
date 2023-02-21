import axios from 'axios';

const instance = axios.create({});

export default function api(method: string, url: string, data: Record<string, any>) {
  const type = method.toLowerCase();
  const token = localStorage.getItem('TOKEN');
  // 此處的instance為我們create的實體
  instance.interceptors.response.use(
    function (res) {
      return res
    },
    function (error) {
      if (error.response){
        switch (error.response.status) {
          case 404:
            console.log("你要找的頁面不存在")
            // go to 404 page
            break
          case 500:
            console.log("程式發生問題")
            // go to 500 page
            break
          default:
            console.log(error.message)
        }
      }
      if (!window.navigator.onLine) {
        alert("網路出了點問題，請重新連線後重整網頁");
        return;
      }
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
