import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../Components/navbar/nav";
import Footer from "../../Components/footer/foter";
import LoginForm from "../../Components/auth/LoginForm";
import BackgroundImage from "../../Components/auth/BackgroundImage";

import { loginRequest } from "../../services/http/loginRequest";
import {
  isAuthenticated,
  getLocalUserData,
  clearLocalUserData,
} from "../../services/authentication/userUtils";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // Agrega un estado para manejar errores

  async function handleLogin() {
    try {
      setError(null); // Limpia los errores al intentar iniciar sesión nuevamente

      if (!email || !password) {
        setError("Por favor, ingrese un correo electrónico y una contraseña."); // Establece un mensaje de error
        return;
      }

      // Realiza la solicitud de inicio de sesión al servidor
      const loginResult = await loginRequest(email, password);

      if (loginResult) {
        // El inicio de sesión fue exitoso, redirige al usuario a la página de inicio.
        getLocalUserData();
        navigate("/");
      } else {
        // El inicio de sesión falló; muestra un mensaje de error.
        setError("Inicio de sesión fallido. Verifique sus credenciales.");
        clearLocalUserData();
      }
    } catch (error) {
      // Error de red u otro error inesperado.
      setError(
        "Ocurrió un error durante el inicio de sesión. Por favor, intente nuevamente."
      );
      clearLocalUserData();
    }
  }

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen">
        <LoginForm
          handleLogin={handleLogin}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
        <BackgroundImage />
      </div>
      <Footer />
    </div>
  );
};

export default Login;
