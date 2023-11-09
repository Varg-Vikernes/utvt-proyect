import React, { useState } from "react";
import PublicationDetail from "./PublicationDetail";

const BlogPost = ({ post }) => {
  const [showDetail, setShowDetail] = useState(false);

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };
  post.fotoURL ="https://storage.googleapis.com/q-spicy_bucket/publicacion/receta12";
  // Verifica si post.imagenBlob es un blob válido
  const isValid = post.fotoURL;

  return (
    <div>
      <div
        className="p-4 border rounded-lg shadow-md cursor-pointer"
        onClick={toggleDetail}
      >
        <div className="flex">
          <div className="w-1/4">
            <img
              src={isValid ? post.fotoURL : "assets/home/image/Imagen_no_encontrada.jpg"}
              alt={post.titulo}
              className="w-full h-auto"
            />
          </div>
          <div className="w-3/4 pl-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
              {post.titulo}
            </h2>
            <p className="text-sm md:text-base lg:text-lg mb-2">{post.descripcion}</p>
          </div>
        </div>
      </div>
      {showDetail && <PublicationDetail post={post} onClose={toggleDetail} />}
    </div>
  );
};

export default BlogPost;