import React, { useState } from "react";
import Navbar from "../../Components/navbar/nav";
import Footer from "../../Components/footer/foter";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../Components/auth/LoginForm";
import BackgroundImage from "../../Components/auth/BackgroundImage";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "usuario@ejemplo.com" && password === "contraseña") {
      navigate("/home");
    } else {
      alert("Credenciales incorrectas");
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
}

export default Login;
