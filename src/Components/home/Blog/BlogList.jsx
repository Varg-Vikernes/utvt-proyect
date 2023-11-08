import React from "react";
import BlogPost from "./BlogPost";

const BlogList = ({ posts }) => {
  return (
    <div >
      {posts.map((post) => (
        <div key={post.idPublicacion} className="w-full">
          <BlogPost post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogList;
