import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./reducer"

const cartStore = createStore(cartReducer, applyMiddleware(thunk));

export default cartStore;
