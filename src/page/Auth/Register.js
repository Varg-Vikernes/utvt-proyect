import React from "react";
import Navbar from "../../Components/navbar/nav";
import Footer from "../../Components/footer/foter";

import TablaPasos from "../../Components/auth/TablaPasos";

function Registro() {
  const handleRegistro = () => {
    // Aquí puedes agregar la lógica de registro, como enviar datos a tu servidor o API
    // Debes reemplazar esto con tu propia lógica
    // Después del registro exitoso, podrías redirigir al usuario a la página de inicio de sesión o al panel de control
  };

  return (
    <div>
      <Navbar />
      <div className="bg-cover bg-center h-screen bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700">
        <div className="flex items-center justify-center h-full">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Registro</h1>
            <TablaPasos />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registro;
