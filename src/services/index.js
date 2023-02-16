import api from './api';

if (import.meta.env.MODE === 'development') {
  const initMock = (await import('./mock.js')).default;
  initMock();
}

export default {
  getCurrentProduct(data) {
    return api('get', '/product', data);
  },
};
