import React, { useState } from "react";
import { Link } from "react-router-dom"; // Asumiendo que usas react-router-dom

function Paso1Datos() {
  const [formData, setFormData] = useState({
    nombre: "",
    correoElectronico: "",
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
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="nombre"
          >
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
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="correoElectronico"
          >
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
      </form>
      <Link to="/login" className="text-blue-500 hover:underline">
        Inicio de Sesión
      </Link>
    </div>
  );
}

export default Paso1Datos;
