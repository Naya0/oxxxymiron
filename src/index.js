import React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";


import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";


const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);