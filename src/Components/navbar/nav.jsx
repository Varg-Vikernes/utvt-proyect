import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate(); // Obtiene la función de navegación

  const navbarStyle = {
    background: "rgb(2,0,36)",
    background:
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(32,186,75,1) 0%, rgba(0,241,255,1) 100%)",
  };

  return (
    <nav style={navbarStyle} className="p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo y Opciones de menú en el lado izquierdo */}
        <div className="flex items-center space-x-6">
          <div className="text-white font-bold text-xl">UTVT Proyecto</div>
          <a
            className="text-white  hover:text-green-900"
            onClick={() => navigate("/home")}
          >
            Inicio
          </a>
          <a
            href="#por-que"
            className="text-white hover:text-green-900"
            onClick={() => navigate("/home")}
          >
            Por Que?
          </a>
        </div>

        {/* Botones de inicio de sesión y registro en el lado derecho */}
        <div>
          <button
            className="bg-blue-800 hover:bg-blue-400 text-white px-4 py-2 rounded-md mr-2"
            onClick={() => navigate("/login")}
          >
            Iniciar Sesión
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-md"
            onClick={() => navigate("/register")}
          >
            Registrar
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
