import React from 'react';

const Blog = () => {
    return (
        <div className="bg-gray-200 py-12">
            <div className="max-w-screen-xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold">Blog</h1>
                </div>
                <div className="flex flex-wrap mb-8">
                    <div className="w-full md:w-1/2 p-4">
                        <img
                            src="https://via.placeholder.com/200" // Reemplaza con la URL de tu imagen
                            alt="Imagen del Blog 1"
                            className="w-40 h-auto rounded-lg float-left mr-4"
                        />
                        <h2 className="text-2xl font-semibold mb-2">Título del Blog 1</h2>
                        <p className="text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                            probare, quae sunt a te dicta?
                        </p>
                        <p className="text-gray-500 mt-2">Fecha de Publicación: 01 de Enero de 2023</p>
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                        <img
                            src="https://via.placeholder.com/200" // Reemplaza con la URL de tu imagen
                            alt="Imagen del Blog 2"
                            className="w-40 h-auto rounded-lg float-left mr-4"
                        />
                        <h2 className="text-2xl font-semibold mb-2">Título del Blog 2</h2>
                        <p className="text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                            probare, quae sunt a te dicta?
                        </p>
                        <p className="text-gray-500 mt-2">Fecha de Publicación: 15 de Febrero de 2023</p>
                    </div>
                </div>
                <div className="flex flex-wrap mb-8">
                    <div className="w-full md:w-1/2 p-4">
                        <img
                            src="https://via.placeholder.com/200" // Reemplaza con la URL de tu imagen
                            alt="Imagen del Blog 3"
                            className="w-40 h-auto rounded-lg float-left mr-4"
                        />
                        <h2 className="text-2xl font-semibold mb-2">Título del Blog 3</h2>
                        <p className="text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                            probare, quae sunt a te dicta?
                        </p>
                        <p className="text-gray-500 mt-2">Fecha de Publicación: 20 de Marzo de 2023</p>
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                        <img
                            src="https://via.placeholder.com/200" // Reemplaza con la URL de tu imagen
                            alt="Imagen del Blog 4"
                            className="w-40 h-auto rounded-lg float-left mr-4"
                        />
                        <h2 className="text-2xl font-semibold mb-2">Título del Blog 4</h2>
                        <p className="text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                            probare, quae sunt a te dicta?
                        </p>
                        <p className="text-gray-500 mt-2">Fecha de Publicación: 10 de Abril de 2023</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
