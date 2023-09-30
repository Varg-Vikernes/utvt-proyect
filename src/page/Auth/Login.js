import React, { useState } from "react";
import Navbar from "../../Components/navbar/nav";
import Footer from "../../Components/footer/foter";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); // Cambiado de username a email
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Simula una lógica de inicio de sesión básica (debes reemplazar con tu propia lógica)
    if (email === "usuario@ejemplo.com" && password === "contraseña") {
      // Hacer algo si las credenciales son correctas
      navigate("/home");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen">
        {/* Lado derecho con formulario de inicio de sesión */}
        <div className="w-full md:w-1/2 p-6 flex items-center justify-center bg-white">
          <div className="max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
            <h1 className="text-2xl font-semibold mb-4 text-center">
              Inicio de Sesión
            </h1>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Correo Electrónico
              </label>
              <input
                className="border border-gray-500 rounded px-4 py-2 w-full"
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Contraseña
              </label>
              <input
                className="border border-gray-500 rounded px-4 py-2 w-full"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4 flex items-center justify-between mt-4">
              <label className="text-sm text-gray-600">
                <input type="checkbox" className="mr-2" />
                <span>Recordar sesión</span>
              </label>
              <div className="mx-2"></div> {/* Espacio horizontal */}
              <a href="/recovery_forgot" className="text-sm text-blue-500">
                Recuperar contraseña
              </a>
              <label className="text-sm mx-2 text-gray-600">
                <a href="/register" className="text-sm text-blue-500">
                  Registrarse
                </a>
              </label>
            </div>
            <div className="mt-6">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
                type="button"
                onClick={handleLogin}
              >
                Iniciar Sesión
              </button>
            </div>
          </div>
        </div>

        {/* Mitad derecha con imagen de fondo */}
        <div
          className="w-full h-screen md:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: "url(./assets/Colecalciferoldos.jpg)" }}
        ></div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
