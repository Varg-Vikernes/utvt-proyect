import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { formStyles } from '../../styles/Constants'
import { isAuthenticated } from '../../services/authentication/userUtils'
import { logout } from '../../services/authentication/authUtils'
import { hasRole } from '../../services/authorization/roleUtils'
const userDataString = localStorage.getItem('userData') // Obtiene la cadena JSON de localStorage
const userData = JSON.parse(userDataString)

const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const currentPath = location.hash;

    const userIsLoggedIn = isAuthenticated()
    const isLoginPage = location.pathname === '/login'
    const isRegisterPage = location.pathname === '/register'

    // Agregar un efecto para el desplazamiento suave a la ubicación actual
    useEffect(() => {
      // Función para sincronizar la ubicación con el fragmento actual
      const syncLocationWithFragment = () => {
        const currentPath = location.hash;
        if (currentPath && currentPath !== '#' && currentPath[0] === '#') {
          const targetElement = document.querySelector(currentPath);
          if (targetElement) {
            console.log('Sincronizando con fragmento:', currentPath);
            targetElement.scrollIntoView({ behavior: 'smooth' });
            console.log('Desplazándose a:', currentPath);
          }
        }
      };
  
      // Sincronizar la ubicación al cargar la página
      syncLocationWithFragment();
    }, [location]);

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
                    <NavLink to="#bienvenida">Bienvenido</NavLink>
                    <NavLink to="#como-surgio-esta-idea">¿Cómo Surgió?</NavLink>
                    <NavLink to="#conocenos">Conócenos</NavLink>
                    <NavLink to="#recetario">Recetario</NavLink>
                    <NavLink to="#blog">Blog</NavLink>
                </div>

                {/* Botones de inicio de sesión y registro */}
                <div className="flex items-center space-x-2">
                    {userIsLoggedIn ? (
                        // Mostrar el botón de Cerrar Sesión si el usuario está autenticado
                        <div className="flex items-center space-x-2">
                            {hasRole(userData, 'administrador') && (
                                <TransparentButton onClick={() => navigate('/admin')}>
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
                                <TransparentButton onClick={() => navigate('/login')}>
                                    Iniciar Sesión
                                </TransparentButton>
                            )}
                            {!isRegisterPage && (
                                <TransparentButton onClick={() => navigate('/register')}>
                                    Registrar
                                </TransparentButton>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}

const NavLink = ({ to,  children }) => {
    const navigate = useNavigate()
    const currentPath =window.location.hash;
    const isActive = currentPath === to
    const linkClasses = `text-white font-bold text-16 border-transparent hover:text-custom-green ${
        isActive ? 'border-white' : 'hover:border-white'
    } rounded-s ${isActive ? 'border-b-2' : 'border-b-0'}`

    const handleClick = () => {
        navigate(to)
    }

    return (
        <a href={to} onClick={handleClick} className={linkClasses}>
            {children}
        </a>
    )
}

// Componente para los botones transparentes con efecto hover
const TransparentButton = ({ onClick, children }) => (
    <button
        className="bg-transparent text-white active:text-slate-800 hover:border-4 hover:border-white hover:rounded-md p-2 px-4 border-4 border-transparent "
        onClick={onClick}>
        {children}
    </button>
)

export default Navbar
