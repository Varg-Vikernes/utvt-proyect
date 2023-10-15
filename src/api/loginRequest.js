export const loginRequest = async (email, password) => {
    try {
      const response = await fetch('https://backend-proyecto-api-production.up.railway.app/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Otros encabezados que puedan ser necesarios para la autenticación, como tokens o claves de API.
        },
        body: JSON.stringify({
          correoElectronico: email,
          contrasena: password,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`Solicitud de inicio de sesión fallida con código de estado: ${response.status}`);
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      // Manejo de errores, como capturar errores de red o errores de autenticación.
      throw error;
    }
  };
  