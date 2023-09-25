import React from 'react';

const Card = ({ imgSrc, description }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4 max-w-sm">
            <img className="w-full h-48 object-cover" src={imgSrc} alt="Imagen de la tarjeta" />
            <div className="p-4">
                <p className="text-gray-700 text-base">{description}</p>
                <button className="bg-blue-500 text-white mt-4 px-4 py-2 rounded-md hover:bg-blue-600">Ver Más</button>
            </div>
        </div>
    );
};

const Cards = () => {
    return (
        <div className="flex flex-wrap justify-center">
            <Card
                imgSrc="https://via.placeholder.com/300"
                description="Descripción de la primera tarjeta."
            />
            <Card
                imgSrc="https://via.placeholder.com/300"
                description="Descripción de la segunda tarjeta."
            />
            <Card
                imgSrc="https://via.placeholder.com/300"
                description="Descripción de la tercera tarjeta."
            />
        </div>
    );
};

export default Cards;
