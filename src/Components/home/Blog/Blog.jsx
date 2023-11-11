import React, { useState } from "react";
import { FaSortAlphaDown, FaSortAlphaUp, FaTag } from "react-icons/fa";
import BlogList from "./BlogList";

const Blog = ({ posts, showMorePosts, showLessPosts, sortPosts }) => {
  const [isAsc, setIsAsc] = useState(true);
  const [sortType, setSortType] = useState("name");

  const toggleOrder = (type) => {
    setIsAsc(!isAsc);
    setSortType(type);
    sortPosts((a, b) => {
      if (type === "name") {
        const titleA = a.titulo || ""; // Manejar títulos nulos
        const titleB = b.titulo || ""; // Manejar títulos nulos
        return isAsc
          ? titleA.localeCompare(titleB)
          : titleB.localeCompare(titleA);
      } else if (type === "date") {
        return isAsc
          ? new Date(b.updatedAt) - new Date(a.updatedAt)
          : new Date(a.updatedAt) - new Date(b.updatedAt);
      }
    });
  };
  const isNameActive = sortType === "name";
  const isDateActive = sortType === "date";

  return (
    <div className="container mx-auto p-4">
      <div id="blog">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Publicaciones Recientes
        </h1>
        <div className="flex mb-4">
          <button
            className={`transition duration-300 ease-in-out mr-2 ${
              isNameActive ? "text-primary" : "text-gray-500"
            }`}
            onClick={() => toggleOrder("name")}
            aria-label="Ordenar por nombre"
          >
            <span className="flex items-center">
              <FaTag
                className={`mr-1 ${
                  isNameActive ? "text-primary" : "text-gray-500"
                }`}
              />
              Nombre{" "}
              {isNameActive ? (
                isAsc ? (
                  <FaSortAlphaDown className="text-orange-800" />
                ) : (
                  <FaSortAlphaUp className="text-green-800" />
                )
              ) : null}
            </span>
          </button>

          <button
            className={`transition duration-300 ease-in-out ${
              isDateActive ? "text-primary" : "text-gray-500"
            }`}
            onClick={() => toggleOrder("date")}
            aria-label="Ordenar por fecha"
          >
            <span className="flex items-center">
              <FaTag
                className={`mr-1 ${
                  isDateActive ? "text-primary" : "text-gray-500"
                }`}
              />
              Fecha{" "}
              {isDateActive ? (
                isAsc ? (
                  <FaSortAlphaDown className="text-orange-800" />
                ) : (
                  <FaSortAlphaUp className="text-green-800" />
                )
              ) : null}
            </span>
          </button>
        </div>
        {posts && posts.length > 0 ? (
          <>
            <BlogList posts={posts} />

            { posts.length <= 5 && (
              <button className="mt-4" onClick={showMorePosts}>
                Mostrar más
              </button>
            )}

            {posts.length > 5 && (
              <button className="mt-4" onClick={showLessPosts}>
                Mostrar menos
              </button>
            )}
          </>
        ) : (
          <p>No hay publicaciones disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default Blog;
