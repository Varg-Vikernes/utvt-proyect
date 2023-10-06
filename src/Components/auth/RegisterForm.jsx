import React, { useState } from "react";
import { Link } from "react-router-dom";

function RegisterForm({ handleRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegisterClick = () => {
    // Simula el registro (comentar esta lógica al conectar con el servidor)
    // Debes implementar la lógica de registro en tu servidor
    // axios.post("/api/registro", { nombre: name, correoElectronico: email, contrasena: password })
    //   .then((response) => {
    //     if (response.status === 201) {
    //       history.push("/login");
    //     } else {
    //       setErrorMessage("Error en el registro");
    //     }
    //   })
    //   .catch((error) => {
    //     setErrorMessage("Error en el registro");
    //   });

    // Limpia los campos después del registro exitoso
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="w-full md:w-1/2 p-6 flex items-center justify-center">
    <div className="max-w-md bg-neutral-200 rounded-lg  overflow-hidden p-4 w-70 md:w-3/4 shadow-lg shadow-indigo-950">  
        <h1 className="text-2xl font-semibold mb-4 text-center">
        Registro
        </h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Nombre
          </label>
          <input
            className="border border-gray-500 rounded px-4 py-2 w-full"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
        {errorMessage && (
          <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
        )}
        <div className="mt-6">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
            type="button"
            onClick={handleRegisterClick}
          >
            Registrarse
          </button>
        </div>
        <div className="mt-4 text-center">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Inicia sesión
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
