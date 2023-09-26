import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para crear un enlace interno

const DescriptionProduct = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4 m-4 max-w-screen-xl mx-auto flex">
            {/* Columna izquierda con la imagen */}
            <div className="w-1/2">
                <div className="bg-gray-200 rounded-lg p-2">
                    <img
                        className="w-full h-auto rounded-lg"
                        src="https://www.k9ofmine.com/wp-content/uploads/2020/09/oatmeal-bath-for-dogs-768x512.jpg"  // Cambia la URL de la imagen y el tamaño
                        alt="Imagen del producto"
                    />
                </div>
            </div>

            {/* Columna derecha con el contenido */}
            <div className="w-1/2 ml-4">
                <div className="animate-slide-left">
                    <h2 className="text-2xl font-bold mb-2">Sobre nuestro producto</h2>
                    <p className="text-gray-700 mb-4">
                        <br />
                        "Nuestro queso vegano untable es una deliciosa alternativa a los productos lácteos tradicionales. Elaborado con leche vegetal, agentes de espesamiento y cultivos probióticos, este queso ofrece una textura y sabor excepcionales. Está diseñado especialmente para personas vegetarianas adultas de 25-70 años, intolerantes a la lactosa y con problemas intestinales, así como para cualquier persona que busque una opción saludable y deliciosa. Nuestra marca, representada por colores frescos y naturales, refleja la calidad y frescura de nuestro producto. Además, el imagotipo con los colores de la bandera mexicana enfatiza su origen nacional y su conexión con la tradición culinaria mexicana."
                        <br /><br />
                    </p>
                    {/* Enlace al componente AboutProduct */}
                    <Link to="/about-product">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                            Conoce Más sobre nuestro Producto
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DescriptionProduct;
