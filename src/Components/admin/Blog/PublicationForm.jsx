// PublicationForm.js
import React from "react";
import PropTypes from "prop-types";
import {
  createPublication,
  updatePublication,
} from "../../../services/http/publicationRequest";
import { uploadImage } from "../../../services/http/GcpRequest";
import { convertImage, cropImageTo16x9 } from "./ImageUtils";
import PublicationFormEdit from "./PublicationFormEdit";
import PublicationFormCreate from "./PublicationFormCreate";
const PublicationForm = ({
  isModalOpen,
  setIsModalOpen,
  initialFormData,
  fetchBlogData,
  isEditing,
}) => {
  const [formData, setFormData] = React.useState({ ...initialFormData });
  const [errors, setErrors] = React.useState({});
  const [imageFile, setImageFile] = React.useState(null);

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
    if (!formData.titulo.trim()) {
      newErrors.titulo = "El título es obligatorio";
    }

    if (!formData.descripcion.trim()) {
      newErrors.descripcion = "La descripción es obligatoria";
    }

    if (!formData.contenido.trim()) {
      newErrors.contenido = "El contenido es obligatorio";
    }

    if (!imageFile && !formData.fotoUrl) {
      newErrors.fotoUrl = "Debe cargar una imagen";
    }

    setErrors(newErrors);

    // Devuelve true si no hay errores
    return Object.keys(newErrors).length === 0;
  };

  const uploadPublicationImage = async (croppedImage, publicationId) => {
    try {
      return await uploadImage(
        "publicaccion",
        `publicacion${publicationId}`,
        publicationId,
        croppedImage
      );
    } catch (error) {
      console.error("Error al subir la imagen:", error);
      throw error;
    }
  };

  const handleImageUpload = async (croppedImage) => {
    try {
      const publicationId = isEditing ? formData.idPublicacion : null;
      return await uploadPublicationImage(croppedImage, publicationId);
    } catch (error) {
      console.error("Error al manejar la imagen:", error);
      // Manejar el error de manera específica según tus necesidades.
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      let imageUrl = formData.fotoUrl;

      // Subir la imagen si hay un nuevo archivo seleccionado
      if (imageFile) {
        // Convertir y recortar la imagen según los requisitos
        const convertedImage = await convertImage(imageFile);
        const croppedImage = await cropImageTo16x9(convertedImage);

        imageUrl = await handleImageUpload(croppedImage);
        // Solo continuar si la carga de la imagen fue exitosa
        if (imageUrl === null) {
          console.error("Error al cargar la imagen");
          return;
        }
      }

      console.log(formData);

      if (isEditing) {
        await updatePublication(formData.idPublicacion, formData);
      } else {
        const response = await createPublication(formData);

        // Verifica si la respuesta tiene un id y la fotoUrl no es null antes de llamar a handleImageUpload
        if (response.idPublicacion && imageUrl !== null) {
          imageUrl = await handleImageUpload(croppedImage);
        } else {
          console.error("Error al crear la publicación");
          return;
        }
      }

      fetchBlogData();
      resetForm();
    } catch (error) {
      console.error("Error al guardar publicación:", error);
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setImageFile(null);
    setIsModalOpen(false);
  };

  if (!isModalOpen) {
    return null;
  }

  // Renderizar el formulario de edición o creación según la condición isEditing
  return isEditing ? (
    <PublicationFormEdit
      formData={formData}
      errors={errors}
      handleChange={handleChange}
      handleImageChange={handleImageChange}
      validateForm={validateForm}
      handleSubmit={handleSubmit}
      resetForm={resetForm}
    />
  ) : (
    <PublicationFormCreate
      formData={formData}
      errors={errors}
      handleChange={handleChange}
      handleImageChange={handleImageChange}
      validateForm={validateForm}
      handleSubmit={handleSubmit}
      resetForm={resetForm}
    />
  );
};

export default PublicationForm;
