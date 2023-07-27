import React from "react";
import { ReactDOM } from "react";
import { BrowserRoouter, Route, Link } from "react-router-dom";
import App from "./components/app";


ReactDOM.render(
    <BrowserRoouter>
        <App />
    </BrowserRoouter>,
    document.querySelector(".app-wrapper")
)
