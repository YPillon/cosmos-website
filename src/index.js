import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ReactGA from "react-ga";

import { ScrollToTop } from "./assets/js/functionsLibrary";

const rootElement = document.getElementById("root");

const TRACKING_ID = "UA-219956829-1";
  ReactGA.initialize(TRACKING_ID, {
    debug: true,
  });

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    <React.StrictMode>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </React.StrictMode>,
    rootElement
  );
} else {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
