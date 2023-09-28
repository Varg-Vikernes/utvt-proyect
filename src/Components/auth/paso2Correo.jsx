import React, { useState } from 'react';
import TablaPasos from '../../Components/auth/TablaPasos';

function Paso2Correo() {
  const [correoEnviado, setCorreoEnviado] = useState(false);
  const [correoConfirmado, setCorreoConfirmado] = useState(false);

  const enviarCorreo = () => {
    // Aquí puedes agregar la lógica para enviar el correo de confirmación
    // Por ejemplo, puedes hacer una llamada a una API o simular el envío de correo
    // Una vez que se envíe el correo, establece el estado de correoEnviado a true
    setCorreoEnviado(true);
  };

  const confirmarCorreo = () => {
    // Aquí puedes agregar la lógica para confirmar el correo
    // Esto podría implicar que el usuario haga clic en un enlace de confirmación
    // Una vez que se confirme el correo, establece el estado de correoConfirmado a true
    setCorreoConfirmado(true);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Paso 2: Confirmar Correo Electrónico</h2>
      {correoEnviado ? (
        correoConfirmado ? (
          <div>
            <p>Correo confirmado correctamente.</p>
            <button
              onClick={() => TablaPasos.avanzarPaso()}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4"
            >
              Avanzar al Paso 3
            </button>
          </div>
        ) : (
          <div>
            <p>Se ha enviado un mensaje de confirmación al correo electrónico.</p>
            <button
              onClick={confirmarCorreo}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4"
            >
              Confirmar Correo
            </button>
            <button
              onClick={enviarCorreo}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 ml-2"
            >
              Reenviar Mensaje
            </button>
          </div>
        )
      ) : (
        <button
          onClick={enviarCorreo}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4"
        >
          Enviar Mensaje de Confirmación
        </button>
      )}
    </div>
  );
}

export default Paso2Correo;
