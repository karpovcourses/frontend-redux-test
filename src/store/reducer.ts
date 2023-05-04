import { combineReducers } from "redux";
import { goodsReducer } from "./goodsReducer";
import { cartReducer } from "./cartReducer";

export const reducer = combineReducers({
  goods: goodsReducer,
  cart: cartReducer
});
