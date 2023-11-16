import React from "react";

const RecipeCard = ({ recipe, onOpenDetails }) => {
  if (!recipe) {
    return null; // No se muestra nada si recipe es undefined
  }

  return (
    <div className="bg-gray-200 p-4 shadow-lg rounded-lg">
      <img
        src={recipe.fotoUrl || "assets/home/image/Imagen_no_encontrada.jpg"}
        alt={recipe.titulo}
        className="w-full h-36 object-cover mb-2"
      />
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        {recipe.titulo}
      </h2>
      <p className="text-gray-600 mb-4">{recipe.descripcion}</p>
      <button
        className="bg-green-700 text-white px-4 py-2 rounded-full hover:bg-green-800 transition-colors"
        onClick={() => onOpenDetails(recipe)}
      >
        Abrir
      </button>
    </div>
  );
};

export default RecipeCard;
