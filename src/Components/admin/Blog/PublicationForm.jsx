// PublicationForm.js

import React from "react";
import PropTypes from "prop-types";
import { createPublication, updatePublication } from "../../../services/http/publicationRequest";
import { uploadImage } from "../../../services/http/GcpRequest";
import { convertImage, cropImageTo16x9 } from "./ImageUtils";

const PublicationForm = ({ isModalOpen, setIsModalOpen, initialFormData, fetchBlogData, isEditing }) => {
  const [formData, setFormData] = React.useState({ ...initialFormData });
  const [errors, setErrors] = React.useState({});
  const [imageFile, setImageFile] = React.useState(null); // Para almacenar el archivo de imagen

  React.useEffect(() => {
    setFormData({ ...initialFormData });
    setErrors({});
  }, [isModalOpen, initialFormData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const validateForm = () => {
    const newErrors = {};

    // Agrega aquí tus reglas de validación
    if (!formData.title.trim()) {
      newErrors.title = "El título es obligatorio";
    }

    if (!formData.description.trim()) {
      newErrors.description = "La descripción es obligatoria";
    }

    if (!formData.content.trim()) {
      newErrors.content = "El contenido es obligatorio";
    }

    if (!imageFile && !formData.photoUrl) {
      newErrors.photoUrl = "Debe cargar una imagen";
    }

    setErrors(newErrors);

    // Devuelve true si no hay errores
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      let imageUrl = formData.photoUrl;

      // Subir la imagen si hay un nuevo archivo seleccionado
      if (imageFile) {
        // Convertir y recortar la imagen según los requisitos
        const convertedImage = await convertImage(imageFile);
        const croppedImage = await cropImageTo16x9(convertedImage);

        // Subir la imagen recortada
        imageUrl = await uploadImage("carpeta", `publicacion${formData.id}`, formData.id, croppedImage);
      }

      const publicationData = {
        ...formData,
        photoUrl: imageUrl,
      };

      if (isEditing) {
        await updatePublication(publicationData.id, publicationData);
      } else {
        await createPublication(publicationData);
      }

      fetchBlogData();
      closeModal();
    } catch (error) {
      console.error("Error al guardar publicación:", error);
    }
  };

  const closeModal = () => {
    setFormData(initialFormData);
    setImageFile(null);
    setIsModalOpen(false);
  };

  if (!isModalOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-8 rounded-md w-96">
        <h2 className="text-2xl font-bold mb-4">{isEditing ? "Editar Publicación" : "Crear Publicación"}</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Título
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`mt-1 p-2 block w-full border ${
                errors.title ? "border-red-500" : "border-gray-300"
              } rounded-md`}
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Descripción
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className={`mt-1 p-2 block w-full border ${
                errors.description ? "border-red-500" : "border-gray-300"
              } rounded-md`}
            ></textarea>
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
              Contenido
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              className={`mt-1 p-2 block w-full border ${
                errors.content ? "border-red-500" : "border-gray-300"
              } rounded-md`}
            ></textarea>
            {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="photoUrl" className="block text-sm font-medium text-gray-700">
              Foto URL
            </label>
            <input
              type="file"
              id="photoUrl"
              name="photoUrl"
              onChange={handleImageChange}
              className={`mt-1 p-2 block w-full border ${
                errors.photoUrl ? "border-red-500" : "border-gray-300"
              } rounded-md`}
            />
            {errors.photoUrl && <p className="text-red-500 text-sm mt-1">{errors.photoUrl}</p>}
          </div>

          <div className="mt-4 flex justify-end">
            <button
              type="button"
              onClick={closeModal}
              className="mr-2 bg-gray-500 text-white py-1 px-2 rounded hover:bg-gray-600"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600"
            >
              {isEditing ? "Actualizar" : "Crear"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

PublicationForm.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
  initialFormData: PropTypes.object.isRequired,
  fetchBlogData: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
};

export default PublicationForm;
