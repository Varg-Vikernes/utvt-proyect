import React, { useState } from 'react';

function Registro() {
  const [nombre, setNombre] = useState(''); // Cambiado de username a nombre
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistro = () => {
    // Aquí puedes agregar la lógica de registro, como enviar datos a tu servidor o API
    // Debes reemplazar esto con tu propia lógica

    // Después del registro exitoso, podrías redirigir al usuario a la página de inicio de sesión o al panel de control
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <form className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-semibold mb-4">Registro</h1>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
              Nombre de usuario
            </label>
            <input
              className="border border-gray-300 rounded px-4 py-2 w-full"
              type="text"
              id="nombre" // Cambiado de username a nombre
              value={nombre} // Cambiado de username a nombre
              onChange={(e) => setNombre(e.target.value)} // Cambiado de setUsername a setNombre
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Contraseña
            </label>
            <input
              className="border border-gray-300 rounded px-4 py-2 w-full"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-6">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={handleRegistro} // Cambiado de handleRegister a handleRegistro
            >
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registro;
