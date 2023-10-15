import React, { useState } from "react";
import Navbar from "../../Components/navbar/nav";
import Footer from "../../Components/footer/foter";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../Components/auth/LoginForm";
import BackgroundImage from "../../Components/auth/BackgroundImage";

import { loginRequest } from "../../api/loginRequest"; // Supongamos que tienes una función de solicitud de inicio de sesión en un archivo de utilidad.
import { isUserLoggedIn, isUserAdmin } from "./authUtils";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginResponse, setLoginResponse] = useState(null);

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        // Validación: Correo electrónico y contraseña son requeridos.
        alert("Por favor, ingrese un correo electrónico y una contraseña.");
        return;
      }

      // Realiza la solicitud de inicio de sesión al servidor
      const response = await loginRequest(email, password);

      if (isUserLoggedIn(response)) {
        // El inicio de sesión fue exitoso, redirige al usuario a la página de inicio.
        // Puedes usar history.push o Link de react-router-dom para la redirección.
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
