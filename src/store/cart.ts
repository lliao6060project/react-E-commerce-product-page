import type { CartItem, CartState } from '@/common/types';
import api from '@/services';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import { AppState } from './store';

const initialState: CartState = {
  count: 0,
  cartCount: 0,
  min: 1,
  max: 10,
  currentProduct: {},
  cartList: []
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state): void => {
      state.count >= state.max
        ? state.count
        : state.count += 1
    },
    decrement: (state): void => {
      state.count <= state.min
        ? state.count
        : state.count -= 1
    },
    updateCurrentProduct: (state, { payload }): void => {
      state.currentProduct = payload
    },
    updateCartList: (state, { payload }): void => {
      state.cartList = Array.from(new Set([...payload.products]))
      state.cartCount += payload.sum
    },
    addProdToCart: (state, { payload }): void => {
      const cart_list = []
      state.cartCount += state.count
      state.count = 0
      cart_list.push(payload)
      state.cartList = Array.from(new Set([...state.cartList, ...cart_list]))
    },
    removeCartItem: (state, { payload }): void => {
      const { cartCount } = state
      const { idxProd, amount } = payload
      state.cartList.splice(idxProd, 1);
      state.cartCount = cartCount > 0
        ? cartCount - amount
        : 0
      state.count = 0
    }
  },
  // extraReducers: {
  //   [(fetchProduct.fulfilled as any)]: (state, { payload }) => {
  //     state.currentProduct = payload
  //   },
  // }
});

export const {
  increment,
  decrement,
  updateCurrentProduct,
  updateCartList,
  addProdToCart,
  removeCartItem
} = cartSlice.actions

// actions
const delay = new Promise(resolve => setTimeout(resolve, 1500));

export const fetchProduct = createAsyncThunk('cart/fetchProduct', async (_, thunkAPI) => {
  const { dispatch } = thunkAPI
  const { data: res } = await toast.promise(
    api.getCurrentProduct({}),
      {
        pending: 'Waiting for getting prod...',
        success: 'get prod success 👌',
        error: 'Promise rejected 🤯',
      }, {
        position: 'top-center',
      }
  )
  dispatch(updateCurrentProduct(res.data))
  return res.data
});

export const fetchCartList = createAsyncThunk('cart/fetchCartList', async (_, thunkAPI) => {
  const { dispatch } = thunkAPI
  const { data: res } = await api.getCartList({})

  const { amount, products } = res.data
  dispatch(updateCartList({
    sum: amount,
    products: products
  }))

  return res.data
});

export const featchAddProdToCart = createAsyncThunk('cart/featchAddProdToCart', async (prod: CartItem, thunkAPI) => {
  const { dispatch } = thunkAPI

  await toast.promise(
    api.AddProduct({}),
      {
        pending: 'Waiting for adding prod...',
        success: 'Add prod success 👌',
        error: 'Promise rejected 🤯',
      }, {
        position: 'top-center',
      }
  )
  dispatch(addProdToCart(prod))
})

export const featchRemoveProdFromCart = createAsyncThunk('cart/featchRemoveProdFromCart', async (removeProd: CartItem, thunkAPI) => {
  const { dispatch, getState } = thunkAPI
  const cartList = (getState() as AppState).cartSlice.cartList
  const idxProd = cartList.findIndex(
    (prod) => prod.id === removeProd.id
  );

  await toast.promise(
    api.deleteProduct({}),
      {
        pending: 'Waiting for delete prod...',
        success: 'Remove prod success 👌',
        error: 'Promise rejected 🤯',
      }, {
        position: 'top-center',
      }
  )

  dispatch(removeCartItem({
    idxProd,
    amount: removeProd.amount
  }))
})



export default cartSlice.reducer;