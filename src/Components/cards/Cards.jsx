import React, { useState } from 'react';

const Card = ({ imgSrc, description, additionalInfo }) => {
    const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

    const toggleAdditionalInfo = () => {
        setShowAdditionalInfo(!showAdditionalInfo);
    };

    const ingredientsList = [
        "Pan integral o de tu elección",
        "Aguacate maduro",
        "Queso vegano untable",
        "Tomate cherry, cortado en rodajas",
        "Sal y pimienta al gusto",
        "Cilantro fresco (opcional)"
    ];

    const instructionsList = [
        "Tuesta las rebanadas de pan.",
        "Unta una generosa capa de queso vegano untable en cada rebanada de pan.",
        "Cubre con rodajas de aguacate y tomate cherry.",
        "Espolvorea un poco de sal y pimienta al gusto.",
        "Opcionalmente, decora con cilantro fresco picado."
    ];

    const renderList = (list) => {
        return (
            <ul className="list-disc pl-6">
                {list.map((item, index) => (
                    <li key={index} className="text-gray-700">{item}</li>
                ))}
            </ul>
        );
    };

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4 max-w-sm">
            <img className="w-full h-48 object-cover" src={imgSrc} alt="Imagen de la tarjeta" />
            <div className="p-4">
                <p className="text-gray-700 text-base">{description}</p>
                {showAdditionalInfo && (
                    <div>
                        <h3 className="text-xl font-semibold mt-2">Ingredientes:</h3>
                        {renderList(ingredientsList)}
                        <h3 className="text-xl font-semibold mt-4">Instrucciones:</h3>
                        {renderList(instructionsList)}
                    </div>
                )}
                <button
                    onClick={toggleAdditionalInfo}
                    className="bg-blue-500 text-white mt-4 px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    {showAdditionalInfo ? 'Ocultar' : 'Ver Más'}
                </button>
            </div>
        </div>
    );
};

const Cards = () => {
    return (
        <div className="flex flex-wrap justify-center">
            <Card
                imgSrc="https://via.placeholder.com/300"
                description="Tostadas de Aguacate y Queso Vegano Untable"
            />
            {/* Otras tarjetas aquí */}
            <Card
                imgSrc="https://via.placeholder.com/300"
                description="Tostadas de Aguacate y Queso Vegano Untable"
            />
            <Card
                imgSrc="https://via.placeholder.com/300"
                description="Tostadas de Aguacate y Queso Vegano Untable"
            />
        </div>
    );
};

export default Cards;
