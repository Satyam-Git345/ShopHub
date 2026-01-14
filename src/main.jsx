import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
const root = createRoot(document.querySelector("#root"));
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

root.render(
  <Provider store={store}>
    <ToastContainer />
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
        }}
      >
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
