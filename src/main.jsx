import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContactsContextProvider from "./context/ContactsContextProvider";
import { GlobalStyles } from "./style/Global.styled";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContactsContextProvider>
    <GlobalStyles />
    <ToastContainer />
    <App />
  </ContactsContextProvider>
);
