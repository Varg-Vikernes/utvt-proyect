import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa"; // Importa los íconos de react-icons
import logoImage from "./utvt.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Lado Izquierdo */}
        <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0 text-center">
          <img
            src={logoImage}
            alt="Logo de la empresa"
            className="w-48 h-32 rounded-lg mx-auto mb-2 transition-transform transform hover:scale-110"
            style={{ borderRadius: "5px" }}
          />
          <p className="text-sm">
            Apasionados por los quesos, nuestro viaje apenas comienza.
          </p>
          <div className="mx-auto mt-4 w-48 flex items-center space-x-2">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
            >
              <FaFacebook size={24} /> {/* Icono de Facebook */}
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-4 py-2 rounded-full hover:bg-pink-600 hover:text-white transition-colors"
            >
              <FaInstagram size={24} /> {/* Icono de Instagram */}
            </a>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-4 py-2 rounded-full hover:bg-blue-950 hover:text-white transition-colors"
            >
              <FaTiktok size={24} /> {/* Icono de Tik Tok */}
            </a>
          </div>
        </div>

        {/* Centro - Opciones de Navegación */}
        <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0 text-center">
          <h2 className="text-xl mb-4 text-orange-500">Navegación</h2>
          <ul>
            <li>
              <a
                href="/"
                className="text-orange-500 hover:text-blue-600 transition-colors"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="/productos"
                className="text-orange-500 hover:text-blue-600 transition-colors"
              >
                Productos
              </a>
            </li>
            <li>
              <a
                href="/contacto"
                className="text-orange-500 hover:text-blue-600 transition-colors"
              >
                Contacto
              </a>
            </li>
            {/* Agregar más enlaces aquí */}
          </ul>
        </div>

        {/* Derecha - Formulario y Datos de Contacto */}
        <div className="w-full md:w-1/2 lg:w-1/3">
          <form className="mb-4">
            <h2 className="text-xl mb-2 text-orange-500">
              Comunícate con nosotros
            </h2>
            <input
              type="text"
              placeholder="Nombre"
              className="w-full px-4 py-2 mb-2 rounded-lg focus:ring focus:ring-blue-600"
            />
            <input
              type="email"
              placeholder="Correo Electrónico"
              className="w-full px-4 py-2 mb-2 rounded-lg focus:ring focus:ring-blue-600"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Enviar
            </button>
          </form>
          <div>
            <h2 className="text-xl mb-2 text-orange-500">
              Información de la Empresa
            </h2>
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
