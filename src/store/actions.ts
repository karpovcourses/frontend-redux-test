import { getGoods } from "../api";
import { SET_GOODS, ADD_CART, CLEAR_CART, DELETE_CART } from "./types";
import { AppAction } from ".";
import { IGoodsItem } from "../types";

export const setGoodsState = (goods: IGoodsItem[]) => ({
  type: SET_GOODS,
  payload: goods
});

export const fetchGoods = (): AppAction<Promise<void>> => (dispatch) => {
  return getGoods().then((cardsList) => {
    dispatch(setGoodsState(cardsList));
  });
};

export const addItemCart = (good: IGoodsItem) => ({
  type: ADD_CART,
  payload: good
});

export const deleteItemCart = (id: string) => ({
  type: DELETE_CART,
  payload: id
});

export const clearCart = () => ({
  type: CLEAR_CART
});
