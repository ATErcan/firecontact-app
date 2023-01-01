import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContactsContextProvider from "./context/ContactsContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContactsContextProvider>
    <App />
  </ContactsContextProvider>
);
