import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../authentication/userUtils";

const PrivateRoute = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true); // Define isLoading como verdadero inicialmente

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        // Realiza la verificación de autenticación
        const userIsAuthenticated = isAuthenticated();

        if (!userIsAuthenticated) {
          navigate("/login"); // Redirige al usuario a la página de inicio de sesión si no está autenticado.
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Error al verificar la autenticación", error);
        setIsLoading(false);
      }
    };

    checkAuthentication();
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        <div className="relative z-20 p-4 bg-white rounded-lg shadow-lg">
          <p>Cargando...</p>
        </div>
        <img
          className="fixed inset-0 w-full h-full object-cover"
          src="../assets/auth/image/trabajo-en-progreso.gif"
          alt="Animación de fondo"
        />
      </div>
    );
  }

  return <Outlet />;
};

export default PrivateRoute;
