import React, { useEffect, useState } from "react";
import Blog from "./Blog"; // Importa el componente Blog
import { fetchPublications } from "../../../services/http/publicationRequest"; // Importa la función de solicitud de publicaciones

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
