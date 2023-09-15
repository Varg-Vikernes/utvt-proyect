import React from 'react';

const Home = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center py-0">
            <h1 className="text-5xl text-black font-bold mb-4">¡Bienvenido a nuestra aplicación!</h1>
            <p className="text-lg text-blue-500 mb-8">Descubre lo que podemos ofrecerte.</p>

            <div className="flex space-x-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Botón Azul</button>
                <button className="bg-black text-white px-4 py-2 rounded-md">Botón Negro</button>
            </div>
        </div>
    );
};

export default Home;
