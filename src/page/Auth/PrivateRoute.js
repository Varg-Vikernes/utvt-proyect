import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import isUserAuthenticated from "./isUserAuthenticated";

const PrivateRoute = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const isAuthenticated = await isUserAuthenticated(); // Llama a la función isUserAuthenticated existente
        setIsAuthenticated(isAuthenticated);
        setIsLoading(false);
      } catch (error) {
        console.error("Error al verificar la autenticación", error);
        setIsLoading(false);
      }
    };

    checkAuthentication();
  }, []);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (!isAuthenticated) {
    navigate("/login"); // Redirige al usuario a la página de inicio de sesión si no está autenticado.
    return null;
  }

  return <Outlet />;
};

export default PrivateRoute;
