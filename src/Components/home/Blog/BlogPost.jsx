import React, { useState } from "react";
import PublicationDetail from "./PublicationDetail";

const BlogPost = ({ post }) => {
  const [showDetail, setShowDetail] = useState(false);

  const toggleDetail = () => {
    setShowDetail((prevShowDetail) => !prevShowDetail);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", options);
  };
  const isValid = post.fotoUrl;

  return (
    <div>
      <div
        className="p-4 border rounded-lg shadow-md cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
        onClick={toggleDetail}
      >
        <div className="flex">
          <div className="w-1/4">
            <img
              src={
                isValid
                  ? post.fotoUrl
                  : "assets/home/image/Imagen_no_encontrada.jpg"
              }
              alt={post.titulo}
              className="w-full h-32 rounded-md"
            />
          </div>
          <div className="w-3/4 pl-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
              {post.titulo}
            </h2>
            <p className="text-sm md:text-base lg:text-lg mb-2 mx-2">
              {post.descripcion}
            </p>
            {post.updatedAt && (
              <p className="text-sm md:text-base lg:text-lg mb-2 text-right">
                Actualizado el {formatDate(post.updatedAt)}
              </p>
            )}
          </div>
        </div>
      </div>
      {showDetail && <PublicationDetail post={post} onClose={toggleDetail} />}
    </div>
  );
};

export default BlogPost;
