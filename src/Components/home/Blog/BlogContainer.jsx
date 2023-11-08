import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import { fetchPublications } from "../../../services/http/publicationRequest";

const BlogContainer = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div>
      {loading ? <p>Cargando publicaciones...</p> : <Blog posts={posts} />}
    </div>
  );
};

export default BlogContainer;
