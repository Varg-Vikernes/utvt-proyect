import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import { fetchPublications } from "../../../services/http/publicationRequest";

const BlogContainer = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visiblePosts, setVisiblePosts] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPublications();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar las publicaciones:", error);
      }
    };

    fetchData();
  }, []);

  const showMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 5);
  };

  const showLessPosts = () => {
    setVisiblePosts((prevVisiblePosts) => Math.max(prevVisiblePosts - 5, 0));
  };

  const sortPosts = (compareFunction) => {
    const sortedPosts = [...posts].sort(compareFunction);
    setPosts(sortedPosts);
  };

  return (
    <div>
      {loading ? (
        <p>Cargando publicaciones...</p>
      ) : (
        <Blog
          posts={posts.slice(0, visiblePosts)}
          showMorePosts={showMorePosts}
          showLessPosts={showLessPosts}
          sortPosts={sortPosts}
        />
      )}
    </div>
  );
};

export default BlogContainer;
