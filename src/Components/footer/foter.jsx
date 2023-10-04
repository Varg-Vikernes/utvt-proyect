import React from 'react';
import logoImage from './utvt.png'; // Asegúrate de que el nombre de la imagen sea correcto

const Footer = () => {
    return (
        <footer className="bg-black text-white py-6">
            <div className="container mx-auto flex flex-wrap justify-between items-center">
                {/* Lado Izquierdo */}
                <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0 text-center">
                    <img
                        src={logoImage}
                        alt="Logo de la empresa"
                        className="w-152 h-32 rounded-lg mx-auto mb-2"
                        style={{ borderRadius: '5px' }}
                    />
                    <p className="text-sm">Apasionados por los quesos, nuestro viaje apenas comienza.</p>
                    <div className="mt-4">
                        <button className="bg-white text-black px-4 py-2 rounded-full mb-2 mr-2">
                            Facebook
                        </button>
                        <button className="bg-white text-black px-4 py-2 rounded-full mb-2 mr-2">
                            Instagram
                        </button>
                        <button className="bg-white text-black px-4 py-2 rounded-full mb-2 mr-2">
                            Tik Tok
                        </button>
                    </div>
                </div>

                {/* Centro - Opciones de Navegación */}
                <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0 text-center">
                    <h2 className="text-xl mb-4 text-orange-500">Navegación</h2>
                    <ul>
                        <li><a href="/" className="text-orange-500">Inicio</a></li>
                        <li><a href="/productos" className="text-orange-500">Productos</a></li>
                        <li><a href="/contacto" className="text-orange-500">Contacto</a></li>
                        <li><a href="/nosotros" className="text-orange-500">Nosotros</a></li>
                        <li><a href="/servicios" className="text-orange-500">Servicios</a></li>
                        <li><a href="/blog" className="text-orange-500">Blog</a></li>
                        <li><a href="/testimonios" className="text-orange-500">Testimonios</a></li>
                        <li><a href="/faq" className="text-orange-500">FAQ</a></li>
                    </ul>
                </div>

                {/* Derecha - Formulario y Datos de Contacto */}
                <div className="w-full md:w-1/2 lg:w-1/3">
                    <form className="mb-4">
                        <h2 className="text-xl mb-2 text-orange-500">Comunícate con nosotros</h2>
                        <input
                            type="text"
                            placeholder="Nombre"
                            className="w-full px-4 py-2 mb-2 rounded-lg"
                        />
                        <input
                            type="email"
                            placeholder="Correo Electrónico"
                            className="w-full px-4 py-2 mb-2 rounded-lg"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                        >
                            Enviar
                        </button>
                    </form>
                    <div>
                        <h2 className="text-xl mb-2 text-orange-500">Información de la Empresa</h2>
                        <p>Celular: 72564865</p>
                        <p>Correo Empresa: ejemplo@gmail.com</p>
                        <p>Dirección: Dirección de la empresa</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
