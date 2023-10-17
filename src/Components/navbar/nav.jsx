import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { isAuthenticated } from "../../services/authentication/userUtils";
import { logout } from "../../services/authentication/authUtils";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const userIsLoggedIn = isAuthenticated();

  return (
    <nav
      className="bg-custom-green text-white p-4 shadow-lg sticky top-0 z-50"
      style={{ backgroundColor: "#5D9C59" }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <img
            src="../assets/home/navbar/logo_Q-Spicy.png"
            alt="Logo de Q-spicy"
            className="h-auto object-cover max-w-14 max-h-14 "
          />
        </div>

        {/* Menú de navegación */}
        <div className="flex items-start flex-auto flex-row space-x-10 p-3">
          <NavLink
            path="/#bienvenida"
            currentPath={location.pathname}
            onClick={navigate}
          >
            Bienvenido
          </NavLink>
          <NavLink
            path="/#como-surgio-esta-idea"
            currentPath={location.pathname}
            onClick={navigate}
          >
            ¿Cómo Surgió?
          </NavLink>
          <NavLink
            path="/#conocenos"
            currentPath={location.pathname}
            onClick={navigate}
          >
            Conócenos
          </NavLink>
          <NavLink
            path="/#recetario"
            currentPath={location.pathname}
            onClick={navigate}
          >
            Recetario
          </NavLink>
          <NavLink
            path="/#blog"
            currentPath={location.pathname}
            onClick={navigate}
          >
            Blog
          </NavLink>
        </div>

        {/* Botones de inicio de sesión y registro */}
        <div className="flex items-center space-x-2">
          {userIsLoggedIn ? (
            // Mostrar el botón de Cerrar Sesión si el usuario está autenticado

            <div className="flex items-center space-x-2">
              <TransparentButton onClick={() => logout()}>
                Cerrar Sesión
              </TransparentButton>
            </div>
          ) : (
            // Mostrar botones de Iniciar Sesión y Registrarse si el usuario no está autenticado
            <div className="flex items-center space-x-2">
              <TransparentButton onClick={() => navigate("/login")}>
                Iniciar Sesión
              </TransparentButton>
              <TransparentButton onClick={() => navigate("/register")}>
                Registrar
              </TransparentButton>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

// Componente para los elementos del menú de navegación
const NavLink = ({ path, currentPath, onClick, children }) => {
  const isActive = currentPath === path;
  const linkClasses = isActive
    ? "text-white hover:bg-white hover:text-custom-green border-b-2 border-white rounded-md font-bold text-16"
    : "text-white hover:border-white hover:border-b-2 rounded-s border-transparent border-b-2 font-bold";

  return (
    <a className={linkClasses} onClick={() => onClick(path)}>
      {children}
    </a>
  );
};

// Componente para los botones transparentes con efecto hover
const TransparentButton = ({ onClick, children }) => (
  <button
    className="bg-transparent text-white hover:border-4 hover:border-white hover:rounded-md p-2 px-4 border-4 border-transparent "
    onClick={onClick}
  >
    {children}
  </button>
);

export default Navbar;
