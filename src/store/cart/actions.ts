import type { CartItem } from '@/common/types'
import {
  INCREMENT,
  DECREASE,
  ADD_TO_CART,
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

export const addToCart = (payload: CartItem) => {
  toast.success('加入購物車成功!', {
    position: 'top-center',
  });
  return {
    type: ADD_TO_CART,
    payload,
  }
}

export const removeCartItem = (payload: number) => {
  toast.warn('購物車已清空!', {
    position: 'top-center',
  });
  return {
    type: REMOVE_CART_ITEM,
    payload
  }
}
