import React, { Component } from 'react';

class RecipeCards extends Component {
  constructor() {
    super();
    this.state = {
      recetas: [],
      showDetails: false,
    };
  }

  toggleDetails = () => {
    this.setState({ showDetails: !this.state.showDetails });
  };

  componentDidMount() {
    // Realizar una solicitud fetch a la URL
    fetch('https://backend-proyecto-api-production.up.railway.app/recetas')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ recetas: data });
      })
      .catch((error) => {
        console.error('Error al cargar las recetas:', error);
      });
  }

  render() {
    const cardStyle =
      "bg-white rounded-lg p-4 border border-gray-300 shadow-md"; // Estilo de tarjeta con Tailwind CSS

    const { recetas, showDetails } = this.state;
    return (
      <div className="mx-4"> {/* Agregar margen a los lados */}
        <h1 className="text-3xl font-bold text-center mb-4">Recetas</h1>
        <p className="text-xl text-gray-600 text-center mb-4">Descubre deliciosas recetas para tu cocina</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recetas.map((receta) => (
            <li key={receta.idReceta} className={cardStyle}>
              <img src="https://th.bing.com/th/id/OIP.U0hKvSgFM_k2wdWVCFxeZAHaFj?pid=ImgDet&rs=1" alt="Imagen de la receta" className="mb-2 w-100 h-100" />
              <h2 className="text-xl font-semibold mb-2">{receta.titulo}</h2>
              <p>Descripción: {receta.descripcion}</p>
              {showDetails && (
                <div className="mt-4">
                  <p>Ingredientes: {receta.ingredientes}</p>
                  <p>Elaboración: {receta.elaboracion}</p>
                </div>
              )}
              <p>Actualizado en: {receta.updatedAt}</p>
              <button
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={this.toggleDetails}
              >
                {showDetails ? 'Ocultar Detalles' : 'Mostrar Detalles'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default RecipeCards;
