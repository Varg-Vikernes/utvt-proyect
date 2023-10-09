import React from "react";

const informacion = {
  titulo: "¿Cómo surgió esta idea?",
  contenido: [
    "",
    "Nuestro queso es una deliciosa alternativa a los productos lácteos tradicionales.    La idea de nuestro queso vegano untable con vitamina D surgió de una combinación de factores que reflejan la creciente demanda por opciones veganas y saludables en el mercado alimentario.    A medida que más personas optan por un estilo de vida basado en plantas y buscan alternativas más conscientes y sostenibles a los productos lácteos tradicionales, nos dimos cuenta de la necesidad de desarrollar un producto que satisficiera estas demandas.",
  ],
};

const ComeAbout = () => {
  return (
    <div
      id="como-surgio-esta-idea"
      className="h-screen flex justify-center items-center"
    >
      <div className="w-9/10 bg-white flex m-20">
        {/* Parte izquierda (3:4) - Texto */}
        <div className="w-3/4 p-8">
          <h2 className="text-4xl font-bold text-center mb-4">
            {informacion.titulo}
          </h2>
          <p className="text-xl text-justify">
            {informacion.contenido.map((parrafo, index) => (
              <React.Fragment key={index}>
                {parrafo}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>

        {/* Parte derecha (1:4) - Imagen */}
        <div className="w-1/4 relative flex items-center justify-center">
          <img
            src="../assets/home/image/QV - quienes somos.png"
            alt="Imagen de queso vegano"
            className="w-70 h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ComeAbout;
