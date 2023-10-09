import React from "react";
import { Link } from "react-router-dom";

function LoginForm({ handleLogin, email, setEmail, password, setPassword }) {
  return (
    <div className="w-full md:w-1/2 p-6 flex items-center justify-center">
    <div className="max-w-md bg-neutral-200 rounded-lg  overflow-hidden p-4 w-70 md:w-3/4 shadow-lg shadow-indigo-950">  
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
            <Link to="/register" className="text-blue-500 hover:underline">
              Registrarse
            </Link>
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
  );
}

export default LoginForm;
