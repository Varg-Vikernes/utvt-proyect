import React from "react";
import BlogPost from "./BlogPost";

const BlogList = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.idPublicacion} className="mb-4">
          <BlogPost post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogList;
