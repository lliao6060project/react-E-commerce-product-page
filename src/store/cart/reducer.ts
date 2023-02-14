interface State {
  count: number
  cartCount: number
  min: number
  max: number
}

const initialState: State = {
  count: 0,
  cartCount: 0,
  min: 0,
  max: 10,
};

const addReducer = (state = initialState, action: { type: string, payload?: any }) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count >= state.max ? state.count : state.count + 1 };
    case "DECREASE":
      return { ...state, count: state.count <= state.min ? state.count : state.count - 1 };
    case "ADD_TO_CART":
      console.log(action.payload)
      return { ...state, cartCount: state.cartCount += state.count };
    case "REMOVE_ITEM":
      return { ...state, cartCount: state.cartCount -= action.payload }
    default:
      return state;
  }
}

export default addReducer;
