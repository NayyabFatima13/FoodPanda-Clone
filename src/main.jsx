import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

import { CartProvider } from "./Context/CartContext";
import { ThemeProvider } from "./Context/ThemeContext";
import AuthProvider from "./Context/AuthContext";


createRoot(document.getElementById("root")).render(

  <StrictMode>
    <AuthProvider>
      
      <ThemeProvider>

        <CartProvider>

          <App />

        </CartProvider>

      </ThemeProvider>

    </AuthProvider>
  </StrictMode>

);


