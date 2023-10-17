export const registerRequest = async (
  name,
  name_a,
  name_b,
  email,
  password,
  customHeaders = {}
) => {
  try {
    const response = await fetch(
      "https://backend-proyecto-api-production.up.railway.app/registro",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...customHeaders,
        },
        body: JSON.stringify({
          nombre: name,
          primerApellido: name_a,
          segundoApellido: name_b,
          correoElectronico: email,
          contrasena: password,
          rol: "usuario",
        }),
      }
    );

    if (!response.ok) {
      throw new Error(
        `Solicitud de inicio de sesión fallida con código de estado: ${response.status}`
      );
    }

    const responseData = await response.json();

    return responseData;
  } catch (error) {
    throw error;
  }
};
