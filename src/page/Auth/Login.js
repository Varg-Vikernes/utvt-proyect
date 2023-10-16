import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../Components/navbar/nav";
import Footer from "../../Components/footer/foter";
import LoginForm from "../../Components/auth/LoginForm";
import BackgroundImage from "../../Components/auth/BackgroundImage";

import { loginRequest } from "../../services/http/loginRequest";
//import { usuariosRequest } from "../../services/http/usuariosRequest";
import { isAuthenticated, getLocalUserData } from "../../services/authentication/userUtils";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        // Validación: Correo electrónico y contraseña son requeridos.
        alert("Por favor, ingrese un correo electrónico y una contraseña.");
        return;
      }

      // Realiza la solicitud de inicio de sesión al servidor
      loginRequest(email, password);

      if (isAuthenticated()) {
        // El inicio de sesión fue exitoso, redirige al usuario a la página de inicio.

        getLocalUserData();
        navigate("/");
      } else {
        // El inicio de sesión falló; muestra un mensaje de error.
        alert("Inicio de sesión fallido. Verifique sus credenciales.");
      }
    } catch (error) {
      // Error de red u otro error inesperado.
      alert(
        "Ocurrió un error durante el inicio de sesión. Por favor, intente nuevamente."
      );
    }
  };

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
