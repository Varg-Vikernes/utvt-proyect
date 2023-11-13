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
    titulo: "",
    descripcion: "",
    contenido: "",
    photoUrl: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [actionData, setActionData] = useState({
    action: "",
    id: null,
  });
  const [confirmation, setConfirmation] = useState({
    show: false,
    message: "",
  });

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
  }, [confirmation.show]); // Actualiza cuando cambia el estado de confirmación

  const handleActionClick = (action, id, confirmText, confirmationMessage) => {
    setActionData({ action, id });
    setConfirmation({
      show: true,
      message: confirmationMessage,

      confirmText,
    });

    if (action === "edit") {
      setConfirmation(false);
      handleEdit(id);
    } else if (action === "delete") {
      // No es necesario abrir el modal aquí
    } else if (action === "create") {
      setConfirmation(false);
      handleCreate();
    }
  };

  const handleEdit = (id) => {
    const publicationToEdit = blogData.find(
      (item) => item.idPublicacion === id
    );
    const publicationWithDefaults = {
      ...publicationToEdit,
    };
    setInitialFormData(publicationWithDefaults);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleCreate = () => {
    setIsEditing(false);
    setIsModalOpen(true);
    setInitialFormData({
      id: "",
      titulo: "",
      descripcion: "",
      contenido: "",
      photoUrl: "",
    });
  };

  const handleDelete = async () => {
    setConfirmation({ ...confirmation, show: false });
    const id = actionData.id;

    console.log(`Eliminar publicación con ID: ${id}`);
    try {
      const response = await deletePublication(id);
      console.log("Respuesta del servidor:", response);

      const updatedBlogData = blogData.filter(
        (item) => item.idPublicacion !== id
      );
      setBlogData(updatedBlogData);
    } catch (error) {
      console.error("Error al eliminar publicación:", error);
    }
  };

  const handleCancel = () => {
    setActionData({ action: "", id: null });
    setConfirmation({ ...confirmation, show: false });
  };

  const handleConfirm = () => {
    const { action } = actionData;

    if (action === "delete") {
      handleDelete();
    }

    // Puedes agregar lógica para otros tipos de acciones si es necesario

    setActionData({ action: "", id: null });
    setConfirmation({ ...confirmation, show: false });
  };
  const truncateText = (text, maxLength = 80) => {
    if (text == null) {
      return ""; // O podrías devolver un valor predeterminado o null según tu necesidad
    }
  
    const trimmedText = text.trim();
  
    if (trimmedText.length <= maxLength) {
      return trimmedText;
    } else {
      return `${trimmedText.slice(0, maxLength)}...`;
    }
  };
  

  return (
    <div className="container mx-auto mt-8 bg-gray-900 rounded-lg text-gray-500 dark:text-gray-400">
      <h1 className="text-4xl font-bold mb-8 bg-gray-700 rounded-lg flex justify-between items-center">
        Publicaciones
        <button
          onClick={() => handleActionClick("create")}
          className="w-1/2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-200 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto"
        >
          Create
        </button>
      </h1>

      <PublicationForm
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        initialFormData={initialFormData}
        fetchBlogData={() => {
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
            <div className="col-span-1 text-center">
              {truncateText(item.titulo)}
            </div>
            <div className="col-span-1 text-center">
              {truncateText(item.descripcion)}
            </div>
            <div className="col-span-1 text-center">
              {truncateText(item.contenido)}
            </div>

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
                onClick={() =>
                  handleActionClick(
                    "delete",
                    item.idPublicacion,
                    "Eliminar",
                    "Esta publicación se eliminará permanentemente. ¿Estás seguro?",
                    "red-500",
                    "green-500"
                  )
                }
                className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 mr-2"
              >
                <FaTrash />
              </button>

              <button
                onClick={() => handleActionClick("edit", item.idPublicacion)}
                className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 mr-2"
              >
                <FaEdit />
              </button>

              {/* Notificación de confirmación */}
              {confirmation.show && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                  <div
                    className={`bg-gray-700 text-white p-4 rounded shadow-md`}
                  >
                    <p>
                      {confirmation.message ||
                        "¿Estás seguro de que quieres eliminar esto?"}
                    </p>
                    <div className="mt-4 flex justify-end">
                      <button
                        onClick={handleConfirm}
                        className={`bg-green-600 text-white py-1 px-2 rounded hover:bg-green-700 mr-2`}
                      >
                        Confirmar
                      </button>
                      <button
                        onClick={handleCancel}
                        className={`bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600`}
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
