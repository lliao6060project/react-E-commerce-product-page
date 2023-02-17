import type { CartItem, CartState } from '@/common/types'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { toast } from 'react-toastify';
import api from '@/services'


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
    removeCartItem: (state): void => {
      state.cartCount = 0
      state.count = 0,
      state.cartList.length = 0
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
  const { dispatch, getState } = thunkAPI
  const { data: res } = await api.getCurrentProduct()
  dispatch(updateCurrentProduct(res.data))
  return res.data
});

export const fetchCartList = createAsyncThunk('cart/fetchCartList', async (_, thunkAPI) => {
  const { dispatch } = thunkAPI
  const { data: res } = await api.getCartList()

  const { products } = res.data
  const sum = products.reduce((partialSum: number, a: { amount: number; }) => partialSum + a.amount, 0);
  dispatch(updateCartList({
    sum: sum,
    products: products
  }))

  console.log(sum)
  return res.data
});

export const featchAddProdToCart = createAsyncThunk('cart/featchAddProdToCart', async (prod: CartItem, thunkAPI) => {
  const { dispatch } = thunkAPI
  await delay
  toast.promise(
    delay,
      {
        pending: 'Promise is pending',
        success: 'Add cart success 👌',
        error: 'Promise rejected 🤯',
      }, {
        position: 'top-center',
      }
  )
  dispatch(addProdToCart(prod))
})

export const featchRemoveProdFromCart = createAsyncThunk('cart/featchRemoveProdFromCart', async (_, thunkAPI) => {
  const { dispatch } = thunkAPI
  await delay
  toast.promise(
    delay,
      {
        pending: 'Promise is pending',
        success: 'Remove cart success 👌',
        error: 'Promise rejected 🤯',
      }, {
        position: 'top-center',
      }
  )
  dispatch(removeCartItem())
})



export default cartSlice.reducer;