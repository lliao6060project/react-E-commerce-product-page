import { INCREMENT, DECREASE, ADD_TO_CART, REMOVE_ITEM } from "./actionType";
import { toast } from "react-toastify";

export const incrementAction = () => {
  return (dispatch: (arg0: { type: string }) => void) => {
    dispatch({
      type: INCREMENT
    });
    // toast.success("MY SUCCESS", {
    //   position: "top-center",
    // });
  }
}

export const decreaseAction = () => {
  return (dispatch: (arg0: { type: string }) => void) => {
    dispatch({
      type: DECREASE
    });
    // toast.warn("DECREASE", {
    //   position: "top-center",
    // });
  }
}

export const addToCart = (payload: Record<string, string | number>) => {
  return {
    type: ADD_TO_CART,
    payload
  }
}

export const removeItem = (payload: number) => {
  return {
    type: REMOVE_ITEM,
    payload
  }
}
