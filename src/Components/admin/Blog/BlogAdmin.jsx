// BlogAdmin.js

import React, { useState, useEffect } from "react";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import {
  fetchPublications,
  deletePublication,
} from "../../../services/http/publicationRequest";
import PublicationForm from "./PublicationForm";

export default function BlogAdmin() {
  const [blogData, setBlogData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialFormData, setInitialFormData] = useState({
    id: "",
    title: "",
    description: "",
    content: "",
    photoUrl: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchPublications();
        setBlogData(response);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);

  const handleUpdate = (id) => {
    const publicationToEdit = blogData.find(
      (item) => item.idPublicacion === id
    );
    const publicationWithDefaults = {
      propiedadNecesaria: "",
      ...publicationToEdit,
    };
    setInitialFormData(publicationWithDefaults);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleCreate = () => {
    setInitialFormData({
      id: "",
      title: "",
      description: "",
      content: "",
      photoUrl: "",
    });
    setIsEditing(false);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    console.log(`Eliminar publicación con ID: ${id}`);
    try {
      const response = await deletePublication(id);
      console.log("Respuesta del servidor:", response); // Agrega esta línea
      const updatedBlogData = blogData.filter(
        (item) => item.idPublicacion !== id
      );
      setBlogData(updatedBlogData);
    } catch (error) {
      console.error("Error al eliminar publicación:", error);
    }
  };

  return (
    <div className="container mx-auto mt-8 bg-gray-900 rounded-lg text-gray-500 dark:text-gray-400">
      <h1 className="text-4xl font-bold mb-8 bg-gray-700 rounded-lg flex justify-between items-center">
        Publicaciones
        <button
          onClick={handleCreate}
          className="w-1/2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-200 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto"
        >
          Agregar
          <FaPlus />
        </button>
      </h1>

      <PublicationForm
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        initialFormData={initialFormData}
        fetchBlogData={() => {
          fetchData();
          setIsModalOpen(false);
        }}
        isEditing={isEditing}
      />

      <div className="grid grid-cols-6 gap-4 bg-gray-900">
        {/* Encabezado de la tabla */}
        <div className="col-span-1 font-bold text-center">ID</div>
        <div className="col-span-1 font-bold text-center">Título</div>
        <div className="col-span-1 font-bold text-center">Descripción</div>
        <div className="col-span-1 font-bold text-center">Contenido</div>
        <div className="col-span-1 font-bold ">Foto URL</div>
        <div className="col-span-1 font-bold text-center">Acciones</div>

        {/* Contenido de la tabla */}
        {blogData.map((item) => (
          <React.Fragment key={item.idPublicacion}>
            <div className="col-span-1 text-center">{item.idPublicacion}</div>
            <div className="col-span-1 text-center">{item.titulo}</div>
            <div className="col-span-1 text-center">{item.descripcion}</div>
            <div className="col-span-1 text-center">{item.contenido}</div>
            <div className="col-span-1 ">
              {" "}
              <img
                src={item.fotoUrl}
                alt={item.titulo}
                className="w-14 h-14 object-cover mb-4"
              />
            </div>
            <div className="col-span-1 text-center">
              <button
                onClick={() => handleUpdate(item.idPublicacion)}
                className="mr-2 bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => handleDelete(item.idPublicacion)}
                className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
              >
                <FaTrash />
              </button>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
