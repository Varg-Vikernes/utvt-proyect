import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Asumiendo que usas react-router-dom

function Paso3Mensaje({ nombre }) {
  const [redireccionar, setRedireccionar] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Iniciar el temporizador para redirigir después de 5 segundos
    const timer = setTimeout(() => {
      setRedireccionar(true);
    }, 5000);

    // Limpiar el temporizador al desmontar el componente
    return () => clearTimeout(timer);
  }, []);

  const handleRedireccionar = () => {
    navigate("/home");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Paso 3: Conclusion del Registro
      </h2>
      <p>Hola {nombre}, ya puedes acceder al sitio!!</p>
      <img
        src="/assets/auth/image/completado.png"
        alt="Mensaje de Bienvenida"
        className="mt-4"
        width={100}
        height={100}
      />
      <button
        onClick={handleRedireccionar}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4"
      >
        Ingresar
      </button>
      {redireccionar && (
        <p className="text-blue-500 mt-4">
          Redireccionando a la página de inicio...
        </p>
      )}
    </div>
  );
}

export default Paso3Mensaje;
