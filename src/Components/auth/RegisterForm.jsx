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

  const passwordValidationSchema = (customRules = {}) => {
    const defaultRules = {
      required: true,
      min: 6,
      uppercase: true,
      lowercase: true,
      number: true,
      specialCharacter: true,
    };
  
    const rules = { ...defaultRules, ...customRules };
  
    let schema = Yup.string();
  
    if (rules.required) {
      schema = schema.required('La contraseña es requerida');
    }
  
    if (rules.min) {
      schema = schema.min(rules.min, `La contraseña debe tener al menos ${rules.min} caracteres`);
    }
  
    if (rules.uppercase) {
      schema = schema.matches(/[A-Z]/, 'La contraseña debe contener al menos una letra mayúscula');
    }
  
    if (rules.lowercase) {
      schema = schema.matches(/[a-z]/, 'La contraseña debe contener al menos una letra minúscula');
    }
  
    if (rules.number) {
      schema = schema.matches(/\d/, 'La contraseña debe contener al menos un número');
    }
  
    if (rules.specialCharacter) {
      schema = schema.matches(/[@$!%*?&]/, 'La contraseña debe contener al menos un carácter especial');
    }
  
    return schema;
  };
  

  const handleRegisterClick = () => {
    // Valida el formulario utilizando Yup
    const schema = Yup.object().shape({
      email: Yup.string()
        .email('Ingrese un correo electrónico válido')
        .required('El correo electrónico es requerido'),
      password: passwordValidationSchema({
        min: 6, // Personaliza la longitud mínima de la contraseña
        uppercase: true, // Desactiva la validación de letras mayúsculas
        specialCharacter: true, // Desactiva la validación de caracteres especiales
      }),
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
