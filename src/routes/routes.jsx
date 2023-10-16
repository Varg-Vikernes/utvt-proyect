import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import Login from "../page/Auth/Login";
import Register from "../page/Auth/Register";
import RecoveryForgot from "../page/Auth/RecoveryForgot";
import Home from "../page/Home/Overview";
import Error404 from "../page/Error/Error404";
import ErrorBoundary from "../page/Error/ErrorBoundary";
import AdminDashboard from "../page/Dashboard/AdminDashboard";

import { isAuthenticated } from "../services/authentication/userUtils"; // Importa la función de autenticación
import { hasRole } from "../services/authorization/roleUtils";
// import PrivateRoute from "../services/authorization/PrivateRoute"; // Importa el componente PrivateRoute
const userData = localStorage.getItem("userData");
//console.log(userData)
function PrivateRoute({ element, authCheck, fallbackPath }) {
  return authCheck() ? element : <Navigate to={fallbackPath} />;
}

const routerConfig = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/recovery_forgot',
    element: <RecoveryForgot />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/admin',
    element: (
      <PrivateRoute
        element={<AdminDashboard />}
        authCheck={() => isAuthenticated() && hasRole(userData, 'administrador')}
        fallbackPath="/login"
      />
    ),
  },
  {
    path: '*',
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
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </RouterProvider>
  </ErrorBoundary>
);

export default MyRoutes;
