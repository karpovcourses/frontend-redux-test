import { render } from "react-dom";
import { Provider } from "react-redux";
import "antd/dist/antd.css";
import { store } from "./store";
import { initializeAPI } from "./api";
import { App } from "./App";

initializeAPI();

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
