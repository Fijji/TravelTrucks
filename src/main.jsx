import React, { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import DotLoader from "react-spinners/DotLoader";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="loaderContainer">
              <DotLoader className="loader" />
            </div>
          }
        >
          <App />
        </Suspense>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
