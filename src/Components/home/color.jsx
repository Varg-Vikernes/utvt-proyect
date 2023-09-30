import React, { useState } from "react";

const ColorPalette = () => {
  // Lista de colores con nombres y códigos hexadecimales
  const colors = [
    { tailwindcss: "bg-green-50 ", name: "Verde Claro", hex: "#ECFDF5" },
    { tailwindcss: "bg-green-100 ", name: "Verde Pastel", hex: "#D1FAE5" },
    { tailwindcss: "bg-green-300 ", name: "Verde Medio", hex: "#6EE7B7" },
    { tailwindcss: "bg-green-500 ", name: "Verde Estándar", hex: "#10B981" },
    { tailwindcss: "bg-green-700 ", name: "Verde Oscuro", hex: "#047857" },
    { tailwindcss: "bg-green-900 ", name: "Verde Profundo", hex: "#065F46" },
    { tailwindcss: "bg-white", name: "Blanco", hex: "#FFFFFF" },
    { tailwindcss: "bg-yellow-50 ", name: "Amarillo Claro", hex: "#FEF3C7" },
    { tailwindcss: "bg-yellow-100", name: "Amarillo Pastel", hex: "#FDE68A" },
    { tailwindcss: "bg-yellow-300", name: "Amarillo Medio", hex: "#F59E0B" },
    { tailwindcss: "bg-yellow-500", name: "Amarillo Estándar", hex: "#FBBF24" },
    { tailwindcss: "bg-yellow-700", name: "Amarillo Oscuro", hex: "#D97706" },
    { tailwindcss: "bg-yellow-900", name: "Amarillo Profundo", hex: "#B45309" },
    { tailwindcss: "bg-orange-50 ", name: "Naranja Claro", hex: "#FFF7ED" },
    { tailwindcss: "bg-orange-100", name: "Naranja Pastel", hex: "#FDEBD0" },
    { tailwindcss: "bg-orange-300", name: "Naranja Medio", hex: "#FDBA74" },
    { tailwindcss: "bg-orange-500", name: "Naranja Estándar", hex: "#F97316" },
    { tailwindcss: "bg-orange-700", name: "Naranja Oscuro", hex: "#EA580C" },
    { tailwindcss: "bg-orange-900", name: "Naranja Profundo", hex: "#C2410C" },
  ];

  // Estados para almacenar los colores seleccionados
  const [firstColor, setFirstColor] = useState(colors[0].hex);
  const [secondColor, setSecondColor] = useState(colors[1].hex);

  // Funciones para actualizar los colores seleccionados
  const handleFirstColorChange = (event) => {
    setFirstColor(event.target.value);
  };

  const handleSecondColorChange = (event) => {
    setSecondColor(event.target.value);
  };

  // Función para generar el degradado
  const generateGradient = () => {
    // Aquí puedes utilizar los valores de firstColor y secondColor para generar el degradado
    // Puedes aplicar el degradado utilizando la propiedad 'backgroundImage' en el estilo CSS
  };

  return (
    <div>
      {/* Selector del primer color */}
      <select
        value={firstColor}
        onChange={handleFirstColorChange}
        className="block w-full p-2 mt-2 border border-gray-300 rounded-md"
      >
        {colors.map((color) => (
          <option key={color.hex} value={color.hex}>
            <div className="flex items-center">
              <div
                className="w-4 h-4 rounded-full mr-2"
                style={{ backgroundColor: color.hex }}
              ></div>
              {color.name}
            </div>
          </option>
        ))}
      </select>

      {/* Selector del segundo color */}
      <select
        value={secondColor}
        onChange={handleSecondColorChange}
        className="block w-full p-2 mt-2 border border-gray-300 rounded-md"
      >
        {colors.map((color) => (
          <option key={color.hex} value={color.hex}>
            <div className="flex items-center">
              <div
                className="w-4 h-4 rounded-full mr-2"
                style={{ backgroundColor: color.hex }}
              ></div>
              {color.name}
            </div>
          </option>
        ))}
      </select>

      {/* Botón para generar el degradado */}
      <button onClick={generateGradient}>Generar Degradado</button>

      {/* Muestra de ejemplo del degradado */}
      <div
        className="h-16 w-80"
        style={{
          marginTop: "20px",
          backgroundImage: `linear-gradient(to right, ${firstColor}, ${secondColor})`,
        }}
      ></div>

      {/* Apartado para mostrar la lista de colores */}
      <div>
        <h2 className="text-lg font-semibold mb-2">
          Lista de Colores Disponibles:
        </h2>
        <ul>
          {colors.map((color) => (
            <li key={color.hex} className="flex items-center space-x-2 mb-2">
              <span
                className="w-5 h-5 rounded-full"
                style={{ backgroundColor: color.hex }}
              ></span>
              <span className="font-semibold">{color.name}</span>
              <span className="text-gray-600">{color.hex}</span>
              <span className="text-gray-800">{color.tailwindcss}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ColorPalette;
