// NOTE:
// 假的api跟假資料都放在這邊

import { mockXHR, mockRequest } from 'remockjs';
import apiData from './mockData'

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export default function initMock() {
  mockXHR({
    timeout: 1500,
  });

  mockRequest('get', '/api/product', async () => {
    await delay(1500);
    return apiData.mockDatas['product'];
  });

  mockRequest('get', '/api/cart_list', async () => {
    await delay(1500);
    return apiData.mockDatas['cart_list'];
  });

  // mockRequest('post', '/api/select', {
  //   'type': '@integer()'
  // });
}
