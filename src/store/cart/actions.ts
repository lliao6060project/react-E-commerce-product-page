import type { CartItem } from '@/common/types'
import {
  INCREMENT,
  DECREASE,
  ADD_PROD_TO_CART,
  REMOVE_CART_ITEM
} from './actionType';
import { toast } from 'react-toastify';

export const incrementAction = () => {
  return (dispatch: (arg0: { type: string }) => void) => {
    dispatch({
      type: INCREMENT
    });
  }
}

export const decreaseAction = () => {
  return (dispatch: (arg0: { type: string }) => void) => {
    dispatch({
      type: DECREASE
    });
  }
}

export const addProdToCart = (payload: CartItem) => {
  // toast.success('add cart success!', {
  //   position: 'top-center',
  // });
  return {
    type: ADD_PROD_TO_CART,
    payload,
  }
}

export const removeCartItem = (payload: number) => {
  toast.success('cart already clear!', {
    position: 'top-center',
  });
  return {
    type: REMOVE_CART_ITEM,
    payload
  }
}
