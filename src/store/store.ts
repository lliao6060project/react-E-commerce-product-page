import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cart from './cart';

const rootReducer = combineReducers({
  cartSlice: cart
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;

export default store;
