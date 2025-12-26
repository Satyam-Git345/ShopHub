import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
const root = createRoot(document.querySelector("#root"));

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </PersistGate>
  </Provider>
);
