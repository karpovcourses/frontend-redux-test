import { createStore, applyMiddleware, AnyAction } from "redux";
import thunk, { ThunkDispatch, ThunkAction } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer } from "./reducer";

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = ThunkDispatch<RootState, unknown, AnyAction>;
export type AppAction<R> = ThunkAction<R, RootState, unknown, AnyAction>;
