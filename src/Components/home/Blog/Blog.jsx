import React from "react";
import BlogList from "./BlogList";

const Blog = ({ posts }) => {

  return (
    <div className="container mx-auto p-4">
      <div id="blog">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Publicaciones Recientes</h1>
        {posts && posts.length > 0 ? (
          <BlogList posts={posts.slice(0, 5)} />
        ) : (
          <p>No hay publicaciones disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default Blog;
