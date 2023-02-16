import type { CartState } from '@/common/types'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { toast } from 'react-toastify';
import api from '@/services'


// actions
export const fetchProduct = createAsyncThunk("cart/fetchProduct", async (_, thunkAPI) => {
  const { dispatch, getState } = thunkAPI
  const res = await api.getCurrentProduct()
  console.log(res)
  return res
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
      const cart_list = []
      state.cartCount += state.count
      state.count = 0
      cart_list.push(payload)
      state.cartList = Array.from(new Set([...cart_list]))
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

  extraReducers: {
    [(fetchProduct.fulfilled as any)]: (state, { payload }) => {
      state.currentProduct = payload
    },
  }
});

export const {
  increment,
  decrement,
  addProdToCart,
  removeCartItem
} = cartSlice.actions

export default cartSlice.reducer;