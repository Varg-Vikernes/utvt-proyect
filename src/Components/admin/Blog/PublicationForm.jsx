import React, { useState, useEffect } from "react";
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
  const [formData, setFormData] = useState({ ...initialFormData });
  const [errors, setErrors] = useState({});
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    setFormData({ ...initialFormData });
    setErrors({});
  }, [isModalOpen, initialFormData]);

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Agrega aquí tus reglas de validación
    if (!formData || !formData.titulo.trim()) {
      newErrors.titulo = "El título es obligatorio";
    }

    if (!formData || !formData.descripcion.trim()) {
      newErrors.descripcion = "La descripción es obligatoria";
    }

    if (!formData || !formData.contenido || !formData.contenido.trim()) {
      newErrors.contenido = "El contenido es obligatorio";
    }

    if (!imageFile && !formData.fotoUrl) {
      newErrors.fotoUrl = "Debe cargar una imagen";
    }

    setErrors(newErrors);

    // Devuelve true si no hay errores
    return Object.keys(newErrors).length === 0;
  };

  const handleImageOperations = async (imageFile) => {
    const convertedImage = await convertImage(imageFile);
    return cropImageTo16x9(convertedImage);
  };

  const handleImageUpload = async (croppedImage, idActul) => {
    try {
      console.log(formData.idPublicacion, formData);
      const publicationId = isEditing ? formData.idPublicacion : idActul;
      return await uploadImage(
        "publicacion",
        `publicacion${publicationId}`,
        publicationId,
        croppedImage
      );
    } catch (error) {
      console.error("Error al manejar la imagen:", error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const { idPublicacion, fotoUrl } = formData;
      let imageUrl = fotoUrl;
      let croppedImage = null;

      if (imageFile) {
        croppedImage = await handleImageOperations(imageFile);
      }

      if (isEditing) {
        if (!imageFile) {
          const response = await updatePublication(idPublicacion, formData);
        } else {
          console.log("tu ya sabras");

          const response = await updatePublication(idPublicacion, formData);

          if (response.length) {
            await handleImageUpload(croppedImage);
          } else {
            console.error("Error al actualizar la publicación");
            return;
          }
        }
      } else {
        const response = await createPublication(formData);

        if (response) {
          const id = response.idPublicacion;
          imageUrl = await handleImageUpload(croppedImage, id);
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setImageFile(null);
    setIsModalOpen(false);
  };

  if (!isModalOpen) {
    return null;
  }

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

PublicationForm.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
  initialFormData: PropTypes.object.isRequired,
  fetchBlogData: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
};

export default PublicationForm;
