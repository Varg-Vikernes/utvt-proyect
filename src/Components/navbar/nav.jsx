import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const navbarStyle = {
        background: 'rgb(255,255,255)',
        background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(247,249,210,1) 0%, rgba(255,255,255,0.9332107843137255) 100%)',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
    };

    const menuLinkStyle = "text-black hover:text-blue-400";
    const buttonStyle = "bg-blue-800 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600";

    return (
        <nav style={navbarStyle} className="p-4 shadow-lg sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-6">
                    <div className="text-black font-bold text-xl">UTVT Proyecto</div>
                </div>
                <div className="flex items-center space-x-6">
                    <a
                        className={location.pathname === '/home' ? `${menuLinkStyle} border-b-2 border-blue-500` : menuLinkStyle}
                        onClick={() => navigate('/home')}
                    >
                        Inicio
                    </a>
                    <a
                        className={location.pathname === '/porque' ? `${menuLinkStyle} border-b-2 border-blue-500` : menuLinkStyle}
                        onClick={() => navigate('/porque')}
                    >
                        Nuestro producto
                    </a>
                    <a
                        className={location.pathname === '/opcion1' ? `${menuLinkStyle} border-b-2 border-blue-500` : menuLinkStyle}
                        onClick={() => navigate('/opcion1')}
                    >
                        Surgimiento
                    </a>
                    <a
                        className={location.pathname === '/opcion2' ? `${menuLinkStyle} border-b-2 border-blue-500` : menuLinkStyle}
                        onClick={() => navigate('/opcion2')}
                    >
                        Elaboracion
                    </a>
                    <a
                        className={location.pathname === '/opcion3' ? `${menuLinkStyle} border-b-2 border-blue-500` : menuLinkStyle}
                        onClick={() => navigate('/opcion3')}
                    >
                        Recetario
                    </a>
                    <a
                        className={location.pathname === '/opcion3' ? `${menuLinkStyle} border-b-2 border-blue-500` : menuLinkStyle}
                        onClick={() => navigate('/opcion3')}
                    >
                        Conocenos
                    </a>
                    <a
                        className={location.pathname === '/opcion3' ? `${menuLinkStyle} border-b-2 border-blue-500` : menuLinkStyle}
                        onClick={() => navigate('/opcion3')}
                    >
                        Blog
                    </a>
                </div>
                <div className="flex items-center space-x-2">
                    <button className={buttonStyle} onClick={() => navigate('/login')}>Iniciar Sesión</button>
                    <button className={buttonStyle} onClick={() => navigate('/register')}>Registrar</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
