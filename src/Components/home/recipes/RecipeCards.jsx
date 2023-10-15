import React, { Component } from 'react';

class RecipeCards extends Component {
  constructor() {
    super();
    this.state = {
      recetas: [],
    };
  }

  componentDidMount() {
    // Realizar una solicitud fetch a la URL
    fetch('https://backend-proyecto-api-production.up.railway.app/recetas')
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Agrega esta línea para verificar los datos
        this.setState({ recetas: data });
      })
      .catch((error) => {
        console.error('Error al cargar las recetas:', error);
      });
  }

  render() {
    const liStyle = { color: 'black' }; // Estilo para el color del texto

    const { recetas } = this.state;
    return (
      <div>
        <h1>Recetas</h1>
        <ul>
          {recetas.map((receta) => (
            <li key={receta.idReceta} style={liStyle}>
              <h2>{receta.titulo}</h2>
              <p>Descripción: {receta.descripcion}</p>
              <p>Elaboración: {receta.elaboracion}</p>
              <p>Ingredientes: {receta.ingredientes}</p>
              <p>Creado en: {receta.createdAt}</p>
              <p>Actualizado en: {receta.updatedAt}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default RecipeCards;
