import React from "react";

function tarjetaBlog({ titulo, imagenSrc, descripcion, mostrarBotonLeerMas, claseContenedor, claseImagen, fechaPublicacion, autor, onBotonLeerMasClick }) {
  return (
    <div className={`bg-white shadow-md rounded-lg p-4 my-4 ${claseContenedor}`}>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="sm:col-span-1">
          <img src={imagenSrc} alt={titulo} className={`w-full h-auto ${claseImagen}`} />
        </div>
        <div className="sm:col-span-2">
          <h2 className="text-xl font-semibold mb-2">{titulo}</h2>
          <p className="text-gray-600">{descripcion}</p>
          {mostrarBotonLeerMas && (
            <button onClick={onBotonLeerMasClick} className="text-blue-500 hover:underline focus:outline-none">
              Leer Más
            </button>
          )}
          {fechaPublicacion && (
            <p className="text-sm text-gray-400 mt-2">Publicado el {fechaPublicacion} por {autor}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default tarjetaBlog;
