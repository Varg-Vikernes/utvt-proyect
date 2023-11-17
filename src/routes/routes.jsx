import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Login from "../page/Auth/Login";
import Register from "../page/Auth/Register";
import RecoveryForgot from "../page/Auth/RecoveryForgot";
import Home from "../page/Home/Overview";
import Error404 from "../page/Error/Error404";
import ErrorBoundary from "../page/Error/ErrorBoundary";
import { isAuthenticated } from "../services/authentication/userUtils"; // Importa la función de autenticación
import { checkUserRole } from "../services/authorization/roleUtils";
import AdminHome from "../page/Dashboard/AdminHome";
// import PrivateRoute from "../services/authorization/PrivateRoute"; // Importa el componente PrivateRoute

const userDataString = localStorage.getItem("userData"); // Obtiene la cadena JSON de localStorage
const userData = JSON.parse(userDataString); // Convierte la cadena JSON en un objeto

function PrivateRoute({ element, authCheck, fallbackPath }) {
  return authCheck() ? element : <Navigate to={fallbackPath} />;
}

const routerConfig = [
  {
    path: "/",
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
    path: "/admin",
    element: (
      <PrivateRoute
        element={<AdminHome />}
        authCheck={() =>
          isAuthenticated() && userData
            ? checkUserRole(userData, "administrador")
            : false
        }
        fallbackPath="/login"
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
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/admin">Admin Dashboard</Link>
          </li>
        </ul>
      </nav>
      {/* Define tus rutas usando el componente <Routes> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </RouterProvider>
  </ErrorBoundary>
);

export default MyRoutes;
