import api from './api';

if (import.meta.env.MODE === 'development') {
  const initMock = (await import('./mock.js')).default;
  initMock();
}

export default {
  getCurrentProduct(data: Record<string, any> | undefined) {
    return api('get', '/product', data as Record<string, any>);
  },

  getCartList(data: Record<string, any> | undefined) {
    return api('get', '/cart_list', data as Record<string, any>);
  },

  AddProduct(data: Record<string, any> | undefined) {
    return api('post', '/add_to_cart', data as Record<string, any>);
  },

  deleteProduct(data: Record<string, any> | undefined) {
    return api('post', '/delete_prod', data as Record<string, any>);
  },
};
