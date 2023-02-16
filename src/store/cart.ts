import type { CartState } from '@/common/types'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProduct } from "@/api";
import { toast } from 'react-toastify';

export const fetchProduct = createAsyncThunk("cart/fetchProduct", async (_, thunkAPI) => {
  const { dispatch, getState } = thunkAPI
  const res = await getProduct();
  return res.data;
});

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
    addProdToCart: (state, { payload }): void => {
      state.cartCount += state.count
      state.count = 0
      state.cartList.push(payload)
    },
    removeCartItem: (state): void => {
      state.cartCount = 0
      state.count = 0,
      state.cartList.length = 0
      toast.success('cart already clear!', {
        position: 'top-center',
      });
    }
  },

  extraReducers: {}
});

export const {
  increment,
  decrement,
  addProdToCart,
  removeCartItem
} = cartSlice.actions

export default cartSlice.reducer;