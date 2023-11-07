import React from "react";
import BlogPost from "./BlogPost";

const BlogList = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => (
        <BlogPost key={post.idPublicacion} post={post} />
      ))}
    </div>
  );
};

export default BlogList;
