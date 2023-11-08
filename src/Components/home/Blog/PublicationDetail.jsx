import React from "react";

const PublicationDetail = ({ post, onClose }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
  
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">{post.titulo}</h2>
      <p className="text-sm md:text-base lg:text-lg mb-2">{post.descripcion}</p>
      {/* Comprueba si hay contenido y foto antes de mostrarlos */}
      {post.foto && (
        <img
        alt={post.titulo}
        className="w-full h-auto"
        />
        )}
        {post.contenido && <p className="text-sm md:text-base lg:text-lg">{post.contenido}</p>}
    </div>
  );
};

export default PublicationDetail;
