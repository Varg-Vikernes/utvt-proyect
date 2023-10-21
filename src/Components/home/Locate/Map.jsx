import React from 'react';

class Map extends React.Component {
  render() {
    const imageUrl = "https://s3.amazonaws.com/ciudad.mapasdemexico.com.mx/mapa-capulhuac-mexico.jpg"; // URL de la imagen

    return (
      <div className="flex flex-col items-center justify-center h-screen p-1 mt-0">
        <h2 className="text-4xl mb-2">Unidad Académica de Capulhuac / Universidad</h2>
        <img src={imageUrl} alt="Imagen" className="w-3/4" />
      </div>
    );
  }
}

export default Map;
