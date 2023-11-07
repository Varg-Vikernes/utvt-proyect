import React, { Component } from "react";
import { FaMapMarker } from "react-icons/fa";

class MapLocation extends React.Component {
  // Define las URLs de las imágenes dentro de la clase
  iframeUrl1 =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.7386917505355!2d-99.46146172479135!3d19.20661228202506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdf3e07b6d3197%3A0x6dab8371b379acb7!2sUnidad%20Acad%C3%A9mica%20de%20Capulhuac%20%2F%20Universidad%20Tecnol%C3%B3gica%20del%20Valle%20de%20Toluca%20(UTVT)!5e0!3m2!1ses!2smx!4v1698830131088!5m2!1ses!2smx";
  imageUrl1 =
    "https://s3.amazonaws.com/ciudad.mapasdemexico.com.mx/mapa-capulhuac-mexico.jpg";

  // Función para redirigir a Google Maps
  handleRedirectToGoogleMaps = () => {
    window.location.href = "https://maps.app.goo.gl/k7oVqbKg9pxGHXq27";
  };
  constructor(props) {
    super(props);

    const images = [
      {
        id: 1,
        src: this.iframeUrl1,
        srci: this.imageUrl1,
        description: "Mapa Iterativo",
      },
      {
        id: 2,
        src: "assets/home/map/referencia_2.jpg",
        description: "Ruta hacia el campo interior",
        type: "image",
      },
      {
        id: 3,
        src: "assets/home/map/referencia_3.jpg",
        description: "Calle para salida",
        type: "image",
      },
      {
        id: 4,
        src: "assets/home/map/referencia_4.jpg",
        description: "Vista de Interior",
        type: "image",
      },
      {
        id: 5,
        src: "assets/home/map/referencia_5.jpg",
        description: "Vista exterior de noche",
        type: "image",
      },
      // Agrega aquí más imágenes si es necesario
    ];

    this.state = {
      selectedImage: images[2], // Establece la primera imagen como predeterminada
      images: images,
    };
  }

  handleImageClick = (image) => {
    this.setState({ selectedImage: image });
  };

  render() {
    const { selectedImage, images } = this.state;

    return (
      <div id="map">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold mb-4">
            Unidad Académica de Capulhuac / Universidad
          </h1>
          <div className="flex flex-col items-center">
            <button
              onClick={this.handleRedirectToGoogleMaps}
              className="flex items-center bg-green-500 hover:bg-green-700 text-white font-bold rounded px-4 py-2 mb-4"
            >
              <FaMapMarker className="mr-2" />
              Abrir Mapa
            </button>
          </div>
        </div>

        <div className="container mx-auto py-8 px-4 lg:flex lg:space-x-4">
          <div className="lg:w-4/6">
            {selectedImage && (
              <>
                {selectedImage.type === "image" ? (
                  <img
                    src={selectedImage.src}
                    alt="Imagen"
                    className="w-full max-h-96 mx-auto rounded-xl"
                  />
                ) : (
                  <iframe
                    src={selectedImage.src}
                    title="Contenido embebido"
                    className="w-full max-h-96 mx-auto"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                )}
              </>
            )}
            <p className="text-lg text-center lg:text-left">
              {selectedImage
                ? selectedImage.description
                : "Aquí puedes agregar tu breve descripción."}
            </p>
          </div>

          <div className="lg:w-2/6 lg:hidden"></div>

          <div className="lg:hidden">
            <ul className="flex overflow-x-auto">
              {images.map((image) => (
                <li key={image.id} className="mr-4">
                  <img
                    src={image.id === 1 ? image.srci : image.src}
                    alt="Imagen"
                    className={`w-32 h-32 rounded-xl cursor-pointer ${
                      selectedImage === image ? "border-4 border-green-500" : ""
                    }`}
                    onClick={() => this.handleImageClick(image)}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:block hidden">
            <div className="grid grid-cols-2 gap-4">
              {images.map((image) => (
                <img
                  key={image.id}
                  src={image.id === 1 ? image.srci : image.src}
                  alt="Imagenes"
                  className={`w-32 h-32 rounded-xl cursor-pointer ${
                    selectedImage === image ? "border-4 border-green-500" : ""
                  }`}
                  onClick={() => this.handleImageClick(image)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MapLocation;
