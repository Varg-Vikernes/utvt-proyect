import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Asumiendo que usas react-router-dom

function Paso1Datos() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    fechaNacimiento: '',
    correoElectronico: '',
    direccion: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Paso 1: Ingresar Datos</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="nombre">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="border-2 border-gray-300 p-2 rounded-lg w-full"
            onChange={handleChange}
            value={formData.nombre}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="apellidos">
            Apellidos
          </label>
          <input
            type="text"
            id="apellidos"
            name="apellidos"
            className="border-2 border-gray-300 p-2 rounded-lg w-full"
            onChange={handleChange}
            value={formData.apellidos}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="fechaNacimiento">
            Fecha de Nacimiento
          </label>
          <input
            type="date"
            id="fechaNacimiento"
            name="fechaNacimiento"
            className="border-2 border-gray-300 p-2 rounded-lg w-full"
            onChange={handleChange}
            value={formData.fechaNacimiento}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="correoElectronico">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="correoElectronico"
            name="correoElectronico"
            className="border-2 border-gray-300 p-2 rounded-lg w-full"
            onChange={handleChange}
            value={formData.correoElectronico}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="direccion">
            Dirección
          </label>
          <textarea
            id="direccion"
            name="direccion"
            className="border-2 border-gray-300 p-2 rounded-lg w-full"
            rows="4"
            onChange={handleChange}
            value={formData.direccion}
          ></textarea>
        </div>
      </form>
      <Link to="/login" className="text-blue-500 hover:underline">
        Inicio de Sesión
      </Link>
    </div>
  );
}

export default Paso1Datos;
