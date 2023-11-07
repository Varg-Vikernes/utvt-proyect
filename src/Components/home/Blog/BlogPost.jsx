import React from "react";

const BlogPost = ({ post }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">{post.titulo}</h2>
      <img src={post.foto} alt={post.titulo} className="mb-2 w-full h-auto" />
      <p className="text-sm md:text-base lg:text-lg mb-4">{post.descripcion}</p>
      <p className="text-sm md:text-base lg:text-lg">{post.contenido}</p>
    </div>
  );
};

export default BlogPost;
