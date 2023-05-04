import { AnyAction } from "redux";
import { GoodsAPI } from "../types";
import { SET_GOODS } from "./types";

interface InitialState {
  list: GoodsAPI[];
}

const initialState: InitialState = {
  list: []
};

export const goodsReducer = (
  state = initialState,
  { type, payload }: AnyAction
) => {
  switch (type) {
    case SET_GOODS: {
      return {
        ...state,
        list: payload
      };
    }

    default: {
      return state;
    }
  }
};
