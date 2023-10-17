import React from "react";

const Home = ({ backgroundImage, height, width }) => {
  const containerStyle = {
    minHeight: height || "70vh",
    width: width || "100%",
    backgroundImage: "url(/assets/home/image/fondo.png)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo transparente
  };

  const textStyle = {
    color: "white", // Color del texto en blanco
  };

  return (
    <div
      style={containerStyle}
      className="flex justify-center items-center flex-col text-center"
      id="bienvenida"
    >
      {/* Mensaje de Bienvenida */}
      <h1 className="text-4xl font-bold" style={textStyle}>
        ¡Bienvenido a nuestra aplicación!
      </h1>
      <h3 className="text-xl mt-4" style={textStyle}>
        Descubre lo que podemos ofrecerte.
      </h3>

      {/* Botones */}
      <div className="mt-4 space-x-4">
        <a
          href="/home#Bienvenida"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Reproducir Video
        </a>
        <a
          href="/home#Conocenos"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Conócenos
        </a>
      </div>
    </div>
  );
};

export default Home;
