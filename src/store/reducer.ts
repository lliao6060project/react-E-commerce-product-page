const initialState = {
  value: 0,
  min: 0,
  max: 10,
};

function addReducer(state = initialState, action: { type: string; }) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, value: state.value >= state.max ? state.value : state.value + 1 };
    case "DECREASE":
      return { ...state, value: state.value <= state.min ? state.value : state.value - 1 };
    default:
      return state;
  }
}

export default addReducer;
