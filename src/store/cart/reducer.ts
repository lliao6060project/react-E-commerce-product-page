import type { CartItem } from '@/common/types'

interface State {
  count: number
  cartCount: number
  min: number
  max: number
  cartItems: CartItem[]
}

const initialState: State = {
  count: 0,
  cartCount: 0,
  min: 1,
  max: 10,
  cartItems: []
};

const addReducer = (
  state = initialState,
  action: { type: string, payload?: any }
) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count >= state.max
          ? state.count
          : state.count + 1
      };
    case 'DECREASE':
      return {
        ...state,
        count: state.count <= state.min
          ? state.count
          : state.count - 1
      };
    case 'ADD_TO_CART':
      const cartList = []
      cartList.push(action.payload)
      return {
        ...state,
        cartCount: state.cartCount += state.count,
        count: state.count = 0,
        cartItems: [...cartList]
      };
    case 'REMOVE_CART_ITEM':
      return {
        ...state,
        cartCount: state.cartCount -= action.payload,
        count: state.count = 0,
        cartItems: []
      }
    default:
      return state;
  }
}

export default addReducer;
