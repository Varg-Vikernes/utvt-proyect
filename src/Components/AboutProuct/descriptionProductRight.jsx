import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para crear un enlace interno

const DescriptionProductRight = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4 m-4 max-w-screen-xl mx-auto flex overflow-hidden">
            {/* Columna izquierda con el contenido */}
            <div className="w-1/2 overflow-hidden">
                <div className="animate-slide-left">
                    <h2 className="text-2xl font-bold mb-2">Título del Producto</h2>
                    <p className="text-gray-700 mb-4">
                        Información sobre el producto que puede ser más larga si es necesario.
                    </p>
                    {/* Enlace al componente AboutProduct */}
                    <Link to="/about-product">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                            Conoce Más sobre nuestro Producto
                        </button>
                    </Link>
                </div>
            </div>

            {/* Columna derecha con la imagen */}
            <div className="w-1/2">
                <div className="bg-gray-200 rounded-lg p-2">
                    <img
                        className="w-full h-auto rounded-lg"
                        src="https://via.placeholder.com/800x400"  // Cambia la URL de la imagen y el tamaño
                        alt="Imagen del producto"
                    />
                </div>
            </div>
        </div>
    );
};

export default DescriptionProductRight;
