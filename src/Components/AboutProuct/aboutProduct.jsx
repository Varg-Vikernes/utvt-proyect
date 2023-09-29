import React, { useState } from 'react';

const AboutProduct = ({ title, description, additionalInfo }) => {
    const [showMoreInfo, setShowMoreInfo] = useState(false);

    return (
        <div className="bg-white shadow-lg rounded-lg p-4 m-4 max-w-sm">
            <img className="w-full h-48 object-cover mb-4" src="https://i0.wp.com/www.lolialliati.com/wp-content/uploads/2019/09/queso-de-semillas.png?resize=800%2C456&ssl=1/300" alt="Imagen del producto" />
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-gray-700">{description}</p>

            {/* Botón "Ver Más" que muestra/oculta la información adicional */}
            <button
                className="bg-blue-500 text-white mt-4 px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={() => setShowMoreInfo(!showMoreInfo)}
            >
                {showMoreInfo ? 'Ocultar Info' : 'Ver Más'}
            </button>

            {/* Información adicional que se muestra cuando se hace clic en "Ver Más" */}
            {showMoreInfo && (
                <div className="mt-4 text-gray-700">
                    {additionalInfo}
                </div>
            )}
        </div>
    );
};

export default AboutProduct;
