import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import store from "./store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);
