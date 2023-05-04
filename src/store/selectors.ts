import { RootState } from ".";

export const getGoods = (state: RootState) => state.goods.list;
export const getCart = (state: RootState) => state.cart.list;
