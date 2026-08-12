import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import Home from "./Pages/Home";
import Restaurants from "./Pages/Restaurants";
import Favorites from "./Pages/Favorites";
import Cart from "./Pages/Cart";

import { useTheme } from "./Context/ThemeContext";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {

  const { theme } = useTheme();
  return (
    <BrowserRouter>

      <div className={theme === "dark" ? "dark-theme" : "light-theme"}>

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/restaurants"
            element={<Restaurants />}
          />

          <Route
            path="/favorites"
            element={<Favorites />}
          />

          <Route
            path="/cart"
            element={<Cart />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;
