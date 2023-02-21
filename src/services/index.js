import api from './api';

if (import.meta.env.MODE === 'development') {
  const initMock = (await import('./mock.js')).default;
  initMock();
}

export default {
  getCurrentProduct(data) {
    return api('get', '/product', data);
  },

  getCartList(data) {
    return api('get', '/cart_list', data);
  },

  AddProduct(data) {
    return api('post', '/add_to_cart', data);
  },

  deleteProduct(data) {
    return api('post', '/delete_prod', data);
  },
};
