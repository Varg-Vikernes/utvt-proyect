import React from "react";

const Home = () => {
  return (
    <div className="text-center" id="bienvenida">
      <div className="flex items-center w-full">
        <div className="flex-1 flex flex-col justify-center p-20 bg-white text-center h-300">
          <h1 className="text-4xl font-bold text-black">
            ¡Bienvenido a nuestra aplicación!
          </h1>
          <h3 className="text-xl mt-4 text-black">
            Descubre lo que podemos ofrecerte.
          </h3>
          <div className="mt-4 space-x-4">
            <a
              href="/#conocenos"
              className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg hover:bg-opacity-100"
            >
              Reproducir Video
            </a>
            <a
              href="/#como-surgio-esta-idea"
              className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg hover:bg-opacity-100"
            >
              Conócenos
            </a>
          </div>
        </div>
        <div className="w-80 h-80 p-4 flex justify-center">
          <img src="/assets/home/image/QV - Inicio.png" alt="" />
        </div>
      </div>
      <div className="flex-1 w-full flex items-center flex-col">
        <img src="/assets/home/image/barra-sf.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
