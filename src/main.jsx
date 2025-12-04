import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.querySelector("#root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
