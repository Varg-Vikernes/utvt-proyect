import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/navbar/nav";
import Footer from "../../Components/footer/foter";
import RegisterForm from "../../Components/auth/RegisterForm";
import BackgroundImage from "../../Components/auth/BackgroundImage";

import { registerUser } from "../../services/http/registerUser";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    error: null,
  });

  const [error, setError] = useState(null);

  async function handleRegister() {
    try {
      const { email, password, name } = formData;

      if (!email || !password) {
        setError("Correo electrónico y contraseña son requeridos.");
        return;
      }

      // Realiza la solicitud de registro al servidor en una función separada.
      const registrationResult = await registerUser(name,"","", email, password);

      if (registrationResult.success) {
        // El registro fue exitoso, por lo que debes limpiar el estado de error.
        setError(null); // Esto eliminará cualquier mensaje de error existente.
        navigate("/login");
      } else {
        // El registro falló; muestra un mensaje de error.
        setError("Error en el registro. Verifique sus datos.");
      }
    } catch (error) {
      // Error de red u otro error inesperado.
      setError("Ocurrió un error durante el registro. Intente nuevamente.");
    }
  }

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen">
        <BackgroundImage />
        <RegisterForm
          handleRegister={handleRegister}
          formData={formData}
          setFormData={setFormData}
          error={formData.error} // Pasa el estado de error al componente RegisterForm
        />
      </div>
      <Footer />
    </div>
  );
}

export default Register;
