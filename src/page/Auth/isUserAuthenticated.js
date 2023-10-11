const isUserAuthenticated = async () => {
  try {
    // Realiza una solicitud POST a la API de autenticación para verificar las credenciales del usuario.
    const response = await fetch("https://backend-proyecto-api-production.up.railway.app/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        correoElectronico: "JoseAnaya@gmail.com", // Correo electrónico del usuario
        contrasena: "JoseJuan2023", // Contraseña del usuario
      }),
    });

    if (response.ok) {
      // Si la respuesta es exitosa (código de respuesta HTTP 200), procesa los datos.
      const data = await response.json();

      // Extrae el token de sesión de la respuesta.
      const token = data.tokenSession;

      // Almacena el token en el almacenamiento local del navegador para futuras verificaciones.
      localStorage.setItem("authToken", token);

      // Devuelve true para indicar que la autenticación fue exitosa.
      return true;
    } else {
      // Si la respuesta no es exitosa, devuelve false para indicar que la autenticación falló.
      return false;
    }
  } catch (error) {
    // Maneja cualquier error que pueda ocurrir durante la solicitud, como problemas de red o errores en el servidor.
    console.error("Error al autenticar al usuario", error);

    // Devuelve false en caso de error para indicar que la autenticación falló.
    return false;
  }
};
export default isUserAuthenticated;