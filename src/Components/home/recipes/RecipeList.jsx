import React, { Component } from "react";
import { getLocalData } from "../../../services/authentication/localStorageUtils";
import { fetchRecipe } from "../../../services/http/recipeRequest";
import RecipeCard from "./RecipeCards";
import RecipeDetails from "./RecipeDetails";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

fetchRecipe();
console.log("recipes, blog",fetchRecipe());
console.log("informaccion local ", getLocalData("RecipeData"));
class RecipeList extends Component {
  constructor() {
    super();
    this.state = {
      recetas: getLocalData("RecipeData"),
      showDetails: false,
      selectedRecipe: null,
      activeTag: "todos",
      displayCount: 8,
      orderBy: "createdAt",
      orderAsc: true,
    };
  }

  toggleDetails = (recipe) => {
    this.setState({ showDetails: true, selectedRecipe: recipe });
  };

  closeDetails = () => {
    this.setState({ showDetails: false, selectedRecipe: null });
  };

  filterByTag = (tag) => {
    this.setState({ activeTag: tag });
  };

  showMore = () => {
    this.setState((prevState) => ({
      displayCount: prevState.displayCount + 4,
    }));
  };

  showLess = () => {
    this.setState((prevState) => ({
      displayCount: prevState.displayCount - 4,
    }));
  };

  sortBy = (criteria) => {
    this.setState((prevState) => ({
      orderBy: criteria,
      orderAsc: prevState.orderBy !== criteria || !prevState.orderAsc,
    }));
  };

  render() {
    const {
      recetas,
      showDetails,
      selectedRecipe,
      activeTag,
      displayCount,
      orderBy,
      orderAsc,
    } = this.state;
    const tags = [
      "todos",
      "más recientes",
      "más antiguos",
      "creado por",
      "alfabeto",
    ];

    let filteredRecipes = [...recetas]; // Copia de todas las recetas

    if (activeTag !== "todos") {
      if (activeTag === "más recientes" || activeTag === "más antiguos") {
        filteredRecipes = filteredRecipes.sort((a, b) => {
          if (activeTag === "más recientes") {
            return orderAsc
              ? a.updatedAt.localeCompare(b.updatedAt)
              : b.updatedAt.localeCompare(a.updatedAt);
          } else {
            return orderAsc
              ? b.updatedAt.localeCompare(a.updatedAt)
              : a.updatedAt.localeCompare(b.updatedAt);
          }
        });
      } else if (activeTag === "creado por") {
        filteredRecipes = filteredRecipes.filter(
          (recipe) => recipe.idUsuario === 20
        ); // Modificar el ID según sea necesario
      } else if (activeTag === "alfabeto") {
        filteredRecipes = filteredRecipes.sort((a, b) => {
          return orderAsc
            ? a.titulo.localeCompare(b.titulo)
            : b.titulo.localeCompare(a.titulo);
        });
      }
    }

    return (
      <div id="recetario" className="m-4">
        <div className="flex space-x-4 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`cursor-pointer ${
                activeTag === tag
                  ? "bg-blue-500 text-white px-2 py-1 rounded-lg"
                  : "bg-gray-200 text-gray-700 px-2 py-1 rounded-lg"
              }`}
              onClick={() => this.filterByTag(tag)}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredRecipes.slice(0, displayCount).map((receta) => (
            <RecipeCard
              key={receta.idReceta}
              recipe={receta}
              onOpenDetails={this.toggleDetails}
            />
          ))}
          {showDetails && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div
                className="absolute inset-0 bg-black opacity-50"
                onClick={this.closeDetails}
              ></div>
              <RecipeDetails
                recipe={selectedRecipe}
                onCloseDetails={this.closeDetails}
              />
            </div>
          )}
        </div>
        <div className="text-center mt-4">
          {displayCount < filteredRecipes.length && (
            <button
              className="text-blue-500 font-semibold text-lg p-2 rounded-full hover:text-blue-700 transition-colors"
              onClick={this.showMore}
            >
              Mostrar Más <FaAngleDoubleDown className="ml-2" />
            </button>
          )}
          {displayCount > 8 && (
            <button
              className="text-red-500 font-semibold text-lg p-2 rounded-full hover:text-red-700 transition-colors"
              onClick={this.showLess}
            >
              Mostrar Menos <FaAngleDoubleUp className="ml-2" />
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default RecipeList;
