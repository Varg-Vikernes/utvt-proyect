import React from "react";
import { FaRegWindowClose } from "react-icons/fa";

const RecipeDetails = ({ recipe, onCloseDetails }) => {
  const imgSrc = recipe.imagen || "assets/home/image/Imagen_no_encontrada.jpg";

  const formatIngredientsAndSteps = (text) => {
    const items = text.split(";");
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index} className="mb-2">
            {item.includes("**") ? (
              <span className="text-gray-300">{item.replace(/\*\*/g, "")}</span>
            ) : (
              item.split(".").map((sentence, i) => (
                <p key={i} className="mb-2">
                  {sentence.trim()}.
                </p>
              ))
            )}
          </li>
        ))}
      </ul>
    );
  };

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", options);
  };

  const updatedAt = formatDate(recipe.updatedAt);

  return (
    <div className="fixed inset-y-0 right-0 w-75 md:w-75 h-full bg-gray-800 text-gray-100 p-4 shadow-lg overflow-y-scroll">
      <div className="flex justify-between items-center mb-4">
        <div className="bg-blue-500 text-white p-1 px-2 rounded mr-2">
          <p className="text-xs">Recetas</p>
        </div>
        <FaRegWindowClose
          className="text-gray-100 cursor-pointer"
          onClick={onCloseDetails}
        />
      </div>
      <img
        src={imgSrc}
        alt={recipe.titulo}
        className="w-full h-64 object-cover mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{recipe.titulo}</h2>
      <div className="bg-gray-600 p-2 rounded mb-4">
        <h3 className="text-lg font-semibold">Información de la Receta</h3>
        <p className="mb-2">
          <span className="font-semibold">Autor:</span> {recipe.autor}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Fecha de Actualización:</span>{" "}
          {updatedAt}
        </p>
      </div>
      <div className="bg-gray-600 p-2 rounded">
        <h3 className="text-lg font-semibold">Detalles de la Receta</h3>
        <div>
          <p>
            <span className="font-semibold">Ingredientes:</span>
          </p>
          {formatIngredientsAndSteps(recipe.ingredientes)}
        </div>
        <div>
          <p>
            <span className="font-semibold">Elaboración:</span>
          </p>
          {formatIngredientsAndSteps(recipe.elaboracion)}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
