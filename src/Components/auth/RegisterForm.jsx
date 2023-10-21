import React, { useState } from "react";
import { Link } from "react-router-dom";
import { formStyles } from "../../styles/Constants";
import * as Yup from "yup"; // Importa la biblioteca Yup para validación

function RegisterForm({ handleRegister, formData, setFormData, error }) {
  const { name, email, password, } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegisterClick = () => {
    // Valida el formulario utilizando Yup
    const schema = Yup.object().shape({
      name: Yup.string().required("El nombre es obligatorio"),
      email: Yup.string()
        .email("Correo electrónico no válido")
        .required("El correo electrónico es obligatorio"),
      password: Yup.string()
        .min(6, "La contraseña debe tener al menos 6 caracteres")
        .required("La contraseña es obligatoria"),
    });

    schema
      .validate(formData, { abortEarly: false })
      .then(() => {
        // Llamar a la función de registro
        handleRegister();
      })
      .catch((validationError) => {
        const errorMessages = validationError.inner.map((e) => e.message);
        setFormData({
          ...formData,
          error: errorMessages,
        });
      });
  };

  return (
    <div className={formStyles.container}>
      <div className={formStyles.formContainer}>
        <h1 className={formStyles.title}>Registro</h1>
        <div className="mb-4">
          <label className={formStyles.inputLabel} htmlFor="name">
            Nombre
          </label>
          <input
            className={formStyles.inputField}
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className={formStyles.inputLabel} htmlFor="email">
            Correo Electrónico
          </label>
          <input
            className={formStyles.inputField}
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className={formStyles.inputLabel} htmlFor="password">
            Contraseña
          </label>
          <input
            className={formStyles.inputField}
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </div>

        <div className="mt-6">
          <button
            className={formStyles.button}
            type="button"
            onClick={handleRegisterClick}
          >
            Registrarse
          </button>
        </div>
        {error && (
          <div className={formStyles.errorMessage}>
            {Array.isArray(error) ? (
              <ul>
                {error.map((message, index) => (
                  <li key={index}>{message}</li>
                ))}
              </ul>
            ) : (
              <p>{error}</p>
            )}
          </div>
        )}

        <div className="mt-4 text-center">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login" className={formStyles.link}>
            Inicia sesión
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
