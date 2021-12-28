import React from "react";
import ReactDOM from "react-dom";
import config from "./config.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "../src/css/flaticon.css";
import "../src/css/odometer-theme-default.css";
import "../src/css/animate.css";
import App from "../src/containers/app";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store";
import "./index.scss";
import { Helmet, HelmetProvider } from "react-helmet-async";
// import Routes from "../src/containers/app";

const app = (
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <HelmetProvider>
      <App />
    </HelmetProvider>
    {/* </Provider> */}
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById("root"));
if (process.env.NODE_ENV !== "development") console.log = () => {};
serviceWorker.unregister();
