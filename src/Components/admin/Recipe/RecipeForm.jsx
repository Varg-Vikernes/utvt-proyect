import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  createRecipe,
  updateRecipe,
} from "../../../services/http/recipeRequest";
import { uploadImage } from "../../../services/http/GcpRequest";
import { convertImage, cropImageTo16x9 } from "./ImageUtils";
import RecipeFormEdit from "./RecipeFormEdit";
import RecipeFormCreate from "./RecipeFormCreate";

const RecipeForm = ({
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

    if (!formData || !formData.elaboracion || !formData.elaboracion.trim()) {
      newErrors.elaboracion = "La elaboracion es obligatorio";
    }

    if (!formData || !formData.ingredientes || !formData.ingredientes.trim()) {
      newErrors.ingredientes = "Los ingredientes es obligatorio";
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
      const recipeId = isEditing ? formData.idReceta : idActul;
      return await uploadImage(
        "receta",
        `receta${recipeId}`,
        recipeId,
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
      const { idReceta, fotoUrl } = formData;
      let imageUrl = fotoUrl;
      let croppedImage = null;

      if (imageFile) {
        croppedImage = await handleImageOperations(imageFile);
      }
      if (isEditing) {
        if (!imageFile) {
          const response = await updateRecipe(idReceta, formData);
        } else {
          const response = await updateRecipe(idReceta, formData);
          console.log(response);
          if (response.length) {
            await handleImageUpload(croppedImage);
          } else {
            console.error("Error al actualizar la receta");
            return;
          }
        }
      } else {
        const response = await createRecipe(formData);

        if (response) {
          const id = response.idReceta;
          imageUrl = await handleImageUpload(croppedImage, id);
        } else {
          console.error("Error al crear la receta");
          return;
        }
      }

      fetchBlogData();
      resetForm();
    } catch (error) {
      console.error("Error al guardar receta:", error);
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
    <RecipeFormEdit
      formData={formData}
      errors={errors}
      handleChange={handleChange}
      handleImageChange={handleImageChange}
      validateForm={validateForm}
      handleSubmit={handleSubmit}
      resetForm={resetForm}
    />
  ) : (
    <RecipeFormCreate
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

RecipeForm.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
  initialFormData: PropTypes.object.isRequired,
  fetchBlogData: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
};

export default RecipeForm;
