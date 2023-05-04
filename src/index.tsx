import { render } from "react-dom";
import "antd/dist/antd.css";

import { initializeAPI } from "./api";
import { App } from "./App";

initializeAPI();

const rootElement = document.getElementById("root");
render(<App />, rootElement);
