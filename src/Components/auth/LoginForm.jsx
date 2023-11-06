// LoginForm.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { formStyles, responsiveFormStyles } from "../../styles/Constants";

function LoginForm({ handleLogin, isLoading }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleSubmit();
  }
  const handleSubmit = async () => {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email("Ingrese un correo electrónico válido")
        .required("El correo electrónico es requerido"),
      password: Yup.string().required("La contraseña es requerida"),
    });

    try {
      await schema.validate(formData, { abortEarly: false });

      setErrors({ email: "", password: "" });
      handleLogin(formData.email, formData.password);
    } catch (error) {
      const newErrors = {};

      error.inner.forEach((e) => {
        newErrors[e.path] = e.message;
      });

      setErrors(newErrors);
    }
  };
 
  
  return (
    <div className={formStyles.container}>
      <form onSubmit={(e) => handleSubmitForm(e)}>
        <div className={responsiveFormStyles.formContainer}>
          <h1 className={formStyles.title}>Inicio de Sesión</h1>
          <div className="mb-4">
            <label className={formStyles.inputLabel} htmlFor="email">
              Correo Electrónico
            </label>
            <input
              className={formStyles.inputField}
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="text-red-500">{errors.email}</div>}
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
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <div className="text-red-500">{errors.password}</div>
            )}
          </div>
          <div className="mb-4 flex items-center justify-between mt-4">
            <div className="mx-2"></div>
            <span className="text-sm text-gray-600">
              <Link to="/recovery_forgot" className={formStyles.link}>
                Recuperar contraseña
              </Link>
            </span>
            <span className="text-sm text-gray-600 mx-2 md:mx-4 lg:mx-6">
              |
            </span>
            <span className="text-sm text-gray-600">
              <Link to="/register" className={formStyles.link}>
                Registrarse
              </Link>
            </span>
          </div>

          <div className="mt-6">
            <button
              className={`${
                isLoading ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500"
              } text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50`}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Cargando..." : "Iniciar Sesión"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
