import { AnyAction } from "redux";
import { IGoodsItem } from "../types";
import { ADD_CART, CLEAR_CART, DELETE_CART } from "./types";

interface InitialState {
  list: IGoodsItem[];
}

const initialState: InitialState = {
  list: []
};

export const cartReducer = (
  state = initialState,
  { type, payload }: AnyAction
) => {
  switch (type) {
    case ADD_CART: {
      return {
        ...state,
        list: [...state.list, payload]
      };
    }

    case DELETE_CART: {
      return {
        ...state,
        list: state.list.filter((item) => item.id !== payload)
      };
    }

    case CLEAR_CART: {
      return {
        list: []
      };
    }

    default: {
      return state;
    }
  }
};
