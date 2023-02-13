import { INCREMENT, DECREASE } from "./actionType";
import { toast } from "react-toastify";

export function incrementAction() {
  return function (dispatch: (arg0: { type: string }) => void) {
    dispatch({
      type: INCREMENT
    });
    toast.success("MY SUCCESS", {
      position: "top-center",
    });
  };
}
export function decreaseAction() {
  return function (dispatch: (arg0: { type: string }) => void) {
    dispatch({
      type: DECREASE
    });
    toast.warn("DECREASE", {
      position: "top-center",
    });
  };
}
