import React from "react";
import { useNavigate, useLocation, HashRouter, Link } from "react-router-dom";
import { formStyles } from "../../styles/Constants";
import { isAuthenticated } from "../../services/authentication/userUtils";
import { logout } from "../../services/authentication/authUtils";
import { hasRole } from "../../services/authorization/roleUtils";
const userDataString = localStorage.getItem("userData"); // Obtiene la cadena JSON de localStorage
const userData = JSON.parse(userDataString);

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const userIsLoggedIn = isAuthenticated();
  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";
  return (
    <nav className={formStyles.navbar.nav}>
      <div className={formStyles.navbar.container}>
        {/* Logo */}
        <div>
          <img
            src="../assets/home/navbar/logo_Q-Spicy.png"
            alt="Logo de Q-spicy"
            className={formStyles.navbar.logo}
          />
        </div>

        {/* Menú de navegación */}
        <div className={formStyles.navbar.menu}>
          <NavLink
            path="/#bienvenida"
            currentPath={location.pathname + location.hash}
            onClick={navigate}
          >
            Bienvenido
          </NavLink>
          <NavLink
            path="/#como-surgio-esta-idea"
            currentPath={location.pathname + location.hash}
            onClick={navigate}
          >
            ¿Cómo Surgió?
          </NavLink>
          <NavLink
            path="/#conocenos"
            currentPath={location.pathname + location.hash}
            onClick={navigate}
          >
            Conócenos
          </NavLink>
          <NavLink
            path="/#recetario"
            currentPath={location.pathname + location.hash}
            onClick={navigate}
          >
            Recetario
          </NavLink>
          <NavLink
            path="/#blog"
            currentPath={location.pathname + location.hash}
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
              {hasRole(userData, "administrador") && (
                <TransparentButton onClick={() => navigate("/admin")}>
                  Administrar
                </TransparentButton>
              )}
              <TransparentButton onClick={() => logout()}>
                Cerrar Sesión
              </TransparentButton>
            </div>
          ) : (
            // Mostrar botones de Iniciar Sesión y Registrarse si el usuario no está autenticado
            <div className="flex items-center space-x-2">
              {!isLoginPage && (
                <TransparentButton onClick={() => navigate("/login")}>
                  Iniciar Sesión
                </TransparentButton>
              )}
              {!isRegisterPage && (
                <TransparentButton onClick={() => navigate("/register")}>
                  Registrar
                </TransparentButton>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

// console.log(location.pathname)
// console.log(location.hash)
// console.log(location.pathname+location.hash)
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
    className="bg-transparent text-white active:text-slate-800 hover:border-4 hover:border-white hover:rounded-md p-2 px-4 border-4 border-transparent "
    onClick={onClick}
  >
    {children}
  </button>
);

export default Navbar;
