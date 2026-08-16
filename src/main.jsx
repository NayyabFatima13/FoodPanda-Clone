import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import AuthProvider from "./Context/AuthContext";
import CartProvider from "./Context/CartContext";
import ThemeProvider from "./Context/ThemeContext";

import "./App.css";


ReactDOM.createRoot(
    document.getElementById("root")
).render(

    <React.StrictMode>

        <AuthProvider>

            <CartProvider>

                <ThemeProvider>

                    <App />

                </ThemeProvider>

            </CartProvider>

        </AuthProvider>

    </React.StrictMode>

);