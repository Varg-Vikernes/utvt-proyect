import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-white p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo y Opciones de menú en el lado izquierdo */}
                <div className="flex items-center space-x-6">
                    <div className="text-black font-bold text-xl">UTVT Proyecto</div>
                    <a href="#" className="text-black">Home</a>
                    <a href="#" className="text-black">About</a>
                    <a href="#" className="text-black">Contact</a>
                </div>

                {/* Botones de inicio de sesión y registro en el lado derecho */}
                <div>
                    <button className=" text-black px-4 py-2 rounded-md mr-2">Iniciar Sesión</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Registrar</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
