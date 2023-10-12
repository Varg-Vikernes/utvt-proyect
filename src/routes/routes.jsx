import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "../page/Auth/Login";
import Register from "../page/Auth/Register";
import RecoveryForgot from "../page/Auth/RecoveryForgot";
import Home from "../page/Home/Overview";
import Error404 from "../page/Error/Error404";
import ErrorBoundary from "../page/Error/ErrorBoundary";
import PrivateRoute from "../page/Auth/PrivateRoute";
const isUserLoggedIn = async () => {
  // Utiliza tu lógica real para verificar si el usuario tiene una sesión iniciada.
  // Devuelve true si tiene una sesión iniciada, de lo contrario, devuelve false.
  return true; // Cambia esto según tu lógica real.
};

const routerConfig = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "/recovery_forgot",
    element: <RecoveryForgot />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: (
      <PrivateRoute
        path="/home"
        element={<Home />}
        isUserAuthenticated={isUserLoggedIn}
        redirectPath="/login"
      />
    ),
  },
  {
    path: "*",
    element: <Error404 />,
  },
];

const router = createBrowserRouter(routerConfig);

const MyRoutes = () => (
  <ErrorBoundary>
    <RouterProvider router={router}>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/home">Dashboard</Link>
          </li>
        </ul>
      </nav>
      <Route path="*" element={<Error404 />} />
    </RouterProvider>
  </ErrorBoundary>
);

export default MyRoutes;
