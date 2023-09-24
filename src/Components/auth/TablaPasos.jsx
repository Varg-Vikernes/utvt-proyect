import React, { useState } from "react";
import Paso1Datos from "./Paso1Datos";
import Paso2Correo from "./paso2Correo";
import Paso3Mensaje from "./Paso3Mensaje";

const Paso1 = () => {
  return (
    <div>
      <Paso1Datos />
    </div>
  );
};

const Paso2 = () => {
  return (
    <div>
      <Paso2Correo />
    </div>
  );
};

const Paso3 = () => {
    return (
        <div>
          <Paso3Mensaje />
        </div>
      );
};

const TablaPasos = () => {
  const [pasoActual, setPasoActual] = useState(1);

  const avanzarPaso = () => {
    if (pasoActual < 3) {
      setPasoActual(pasoActual + 1);
    }
  };

  const retrocederPaso = () => {
    if (pasoActual > 1) {
      setPasoActual(pasoActual - 1);
    }
  };

  return (
    <div className="w-full p-4">
      <div className="grid grid-cols-3 gap-4">
        <div
          className={`col-span-1 cursor-pointer ${
            pasoActual === 1 ? "font-bold" : ""
          }`}
          onClick={() => setPasoActual(1)}
        >
          Paso 1: Ingresar Datos
        </div>
        <div
          className={`col-span-1 cursor-pointer ${
            pasoActual === 2 ? "font-bold" : ""
          }`}
          onClick={() => setPasoActual(2)}
        >
          Paso 2: Confirmar Correo Electrónico
        </div>
        <div
          className={`col-span-1 cursor-pointer ${
            pasoActual === 3 ? "font-bold" : ""
          }`}
          onClick={() => setPasoActual(3)}
        >
          Paso 3: Mostrar Mensaje de Listo
        </div>
      </div>
      <div className="mt-4">
        {pasoActual === 1 && <Paso1 />}
        {pasoActual === 2 && <Paso2 />}
        {pasoActual === 3 && <Paso3 />}
      </div>
      <div className="mt-4">
        <button
          onClick={retrocederPaso}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2"
        >
          Retroceder
        </button>
        <button
          onClick={avanzarPaso}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
        >
          Avanzar
        </button>
      </div>
    </div>
  );
};

export default TablaPasos;
