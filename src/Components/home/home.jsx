import React from "react";

const Home = ({ imageUrl, imageUrl2 }) => {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    width: "100%",
  };

  const textStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "white",
    textAlign: "center",
    height: "300px"
  };


  const imageStyle = {
    flex: 1,
    width: "500px", // Ajusta el ancho de la imagen a 400px
    display: "flex",
    justifyContent: "center", // Centra la imagen horizontalmente
  };
  const imageStyleBarra = {
    flex: 1,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column", // Cambia la dirección a "column" para mostrar la imagen debajo
  };




  return (
    <div className="text-center" id="bienvenida">
      <div style={containerStyle}>
        <div style={textStyle}>
          <h1 className="text-4xl font-bold" style={{ color: "black" }}>
            ¡Bienvenido a nuestra aplicación!
          </h1>
          <h3 className="text-xl mt-4" style={{ color: "black" }}>
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
        <div className="w-80 h-80 p-4" style={imageStyle}>
          <img src="/assets/home/image/QV - Inicio.png" alt="" />
        </div>
      </div>
      <div style={imageStyleBarra}>
        <img src="/assets/home/image/barra-sf.png" alt="" />

      </div>
    </div>
  );
};

export default Home;
