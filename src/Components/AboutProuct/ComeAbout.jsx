import React from 'react';

const ComeAbout = () => {
    return (
        <div id="como-surgio-idea" className="h-screen flex">
            {/* Parte izquierda (3:4) - Texto */}
            <div className="w-3/4 bg-white flex flex-col justify-center items-center p-4">
                <h2 className="text-4xl font-bold text-center mb-4">¿Cómo surgió esta idea?</h2>
                <p className="text-xl text-justify">
                    Nuestro queso vegano untable es una deliciosa alternativa a los productos lácteos tradicionales.
                </p>
            </div>

            {/* Parte derecha (1:4) - Imagen */}
            <div className="w-1/4 relative flex items-center justify-center">
                <img
                    src="../assets/home/image/pexels-valeria-boltneva-1833338.jpg"
                    alt="Imagen de queso vegano"
                    className="w-70 h-auto object-cover"
                />

                {/* Shadow-pop izquierdo */}
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-orange-500"></div>

                {/* Shadow-pop derecho */}
                <div className="absolute right-0 top-0 bottom-0 w-2 bg-green-500"></div>
            </div>
        </div>
    );
};

export default ComeAbout;
