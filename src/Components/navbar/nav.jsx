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
    const token = localStorage.getItem('tokenSession')
    const nombre = localStorage.getItem('nombre')

    const navigate = useNavigate()
    const location = useLocation()
    const currentPath = location.hash

    const userIsLoggedIn = isAuthenticated()
    const isLoginPage = location.pathname === '/login'
    const isRegisterPage = location.pathname === '/register'

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const toggleDropdown = () => {
        if (window.innerWidth <= 767) {
            setIsDropdownOpen(!isDropdownOpen)
        }
    }

    // Agregar un efecto para el desplazamiento suave a la ubicación actual
    useEffect(() => {
        // Función para sincronizar la ubicación con el fragmento actual
        const syncLocationWithFragment = () => {
            const currentPath = location.hash
            if (currentPath && currentPath !== '#' && currentPath[0] === '#') {
                const targetElement = document.querySelector(currentPath)
                if (targetElement) {
                    // console.log("Sincronizando con fragmento:", currentPath);
                    // console.log("Desplazándose a:", currentPath);
                    targetElement.scrollIntoView({ behavior: 'smooth' })
                }
            }
        }

        // Sincronizar la ubicación al cargar la página
        syncLocationWithFragment()
    }, [location])

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

                <div className="container mx-auto flex flex-row justify-between items-center space-x-4 p-3 lg:space-x-10">
                    <button onClick={toggleDropdown} className="block md:hidden">
                        Menú
                    </button>
                    {window.innerWidth <= 767 ? (
                        <div
                            className={`
              md:flex space-y-2 md:space-y-0 ${
                  window.innerWidth <= 767 ? (isDropdownOpen ? 'block' : 'hidden') : 'block'
              }`}>
                            <NavLink to="#bienvenida">Bienvenido</NavLink>
                            <NavLink to="#como-surgio-esta-idea">¿Cómo Surgió?</NavLink>
                            <NavLink to="#conocenos">Conócenos</NavLink>
                            <NavLink to="#recetario">Recetario</NavLink>
                            <NavLink to="#map">Mapa</NavLink>
                            <NavLink to="#blog">Blog</NavLink>
                        </div>
                    ) : (
                        // Renderiza el menú sin importar el estado cuando el ancho de la pantalla es mayor a 767px.
                        <div className="md:block">
                            <nav className="md:flex flex-col md:flex-row space-y-2 md:space-y-0">
                                <NavLink to="#bienvenida">Bienvenido</NavLink>
                                <NavLink to="#como-surgio-esta-idea">¿Cómo Surgió?</NavLink>
                                <NavLink to="#conocenos">Conócenos</NavLink>
                                <NavLink to="#recetario">Recetario</NavLink>
                                <NavLink to="#map">Mapa</NavLink>
                                <NavLink to="#blog">Blog</NavLink>
                            </nav>
                        </div>
                    )}
                </div>

                {/* Botones de inicio de sesión y registro */}
                <div className="flex items-center space-x-2">
                    {userIsLoggedIn ? (
                        // Mostrar el botón de Cerrar Sesión si el usuario está autenticado
                        <div className="flex items-center space-x-2">
                            <h1>Bienvenido: {nombre}</h1>
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
                        <div className="flex items-center space-x-2 font-bold text-16">
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

const NavLink = ({ to, children }) => {
    const navigate = useNavigate()
    const currentPath = window.location.hash
    const isActive = currentPath === to
    const linkClasses = `block md:inline-block p-2 text-white font-bold text-16 border-transparent hover:text-custom-green ${
        isActive ? 'border-white' : 'hover:border-white'
    } rounded-s ${isActive ? 'border-b-2' : 'border-b-0'}`

    const handleClick = () => {
        navigate('/' + to)
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
