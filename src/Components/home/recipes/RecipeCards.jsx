import React, { useState } from "react";

const Card = ({ imgSrc, description, ingredientsList, instructionsList }) => {
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

  const toggleAdditionalInfo = () => {
    setShowAdditionalInfo(!showAdditionalInfo);
  };

  const renderList = (list) => {
    return (
      <ul className="list-disc pl-6">
        {list.map((item, index) => (
          <li key={index} className="text-gray-700">
            {item}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div
      className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm mx-auto my-4"
      id="recetario"
    >
      <img
        className="w-full h-48 object-cover"
        src={imgSrc}
        alt="Imagen de la tarjeta"
      />
      <div className="p-4">
        <p className="text-gray-700 text-base">{description}</p>
        {showAdditionalInfo && (
          <div>
            <h3 className="text-xl font-semibold mt-2">Ingredientes:</h3>
            {renderList(ingredientsList)}
            <h3 className="text-xl font-semibold mt-4">Instrucciones:</h3>
            {renderList(instructionsList)}
          </div>
        )}
        <button
          onClick={toggleAdditionalInfo}
          className="bg-blue-500 text-white mt-4 px-4 py-2 rounded-md hover:bg-blue-600"
        >
          {showAdditionalInfo ? "Ocultar" : "Ver Más"}
        </button>
      </div>
    </div>
  );
};

const RecipeCards = () => {
  const recipes = [
    {
      imgSrc: "URL_IMAGEN_1",
      description: "Receta 1",
      ingredientsList: ["Ingrediente 1", "Ingrediente 2", "Ingrediente 3"],
      instructionsList: ["Paso 1", "Paso 2", "Paso 3"],
    },
    {
      imgSrc: "URL_IMAGEN_2",
      description: "Receta 2",
      ingredientsList: ["Ingrediente 1", "Ingrediente 2", "Ingrediente 3"],
      instructionsList: ["Paso 1", "Paso 2", "Paso 3"],
    },
    {
      imgSrc: "URL_IMAGEN_3",
      description: "Receta 3",
      ingredientsList: ["Ingrediente 1", "Ingrediente 2", "Ingrediente 3"],
      instructionsList: ["Paso 1", "Paso 2", "Paso 3"],
    },
    {
      imgSrc: "URL_IMAGEN_4",
      description: "Receta 4",
      ingredientsList: ["Ingrediente 1", "Ingrediente 2", "Ingrediente 3"],
      instructionsList: ["Paso 1", "Paso 2", "Paso 3"],
    },
    {
      imgSrc: "URL_IMAGEN_5",
      description: "Receta 5",
      ingredientsList: ["Ingrediente 1", "Ingrediente 2", "Ingrediente 3"],
      instructionsList: ["Paso 1", "Paso 2", "Paso 3"],
    },
    {
      imgSrc: "URL_IMAGEN_6",
      description: "Receta 6",
      ingredientsList: ["Ingrediente 1", "Ingrediente 2", "Ingrediente 3"],
      instructionsList: ["Paso 1", "Paso 2", "Paso 3"],
    },
    {
      imgSrc: "URL_IMAGEN_7",
      description: "Receta 7",
      ingredientsList: ["Ingrediente 1", "Ingrediente 2", "Ingrediente 3"],
      instructionsList: ["Paso 1", "Paso 2", "Paso 3"],
    },
    {
      imgSrc: "URL_IMAGEN_8",
      description: "Receta 8",
      ingredientsList: ["Ingrediente 1", "Ingrediente 2", "Ingrediente 3"],
      instructionsList: ["Paso 1", "Paso 2", "Paso 3"],
    },
  ];
  const topRecipes = recipes.slice(0, 4);
  const bottomRecipes = recipes.slice(4, 8);

  return (
    <div className="flex flex-wrap justify-center mx-auto mb-8 max-w-screen-xl">
      <div className="flex flex-wrap w-full">
        {topRecipes.map((recipe, index) => (
          <Card
            key={index}
            imgSrc={recipe.imgSrc}
            description={recipe.description}
            ingredientsList={recipe.ingredientsList}
            instructionsList={recipe.instructionsList}
          />
        ))}
      </div>
      <div className="flex flex-wrap w-full">
        {bottomRecipes.map((recipe, index) => (
          <Card
            key={index}
            imgSrc={recipe.imgSrc}
            description={recipe.description}
            ingredientsList={recipe.ingredientsList}
            instructionsList={recipe.instructionsList}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeCards;
