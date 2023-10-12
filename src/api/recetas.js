// Realiza una solicitud GET a la URL de la API
fetch('https://api.up.railway.app/recetas')
  .then(response => {
    // Verifica si la respuesta es exitosa (código 200)
    if (response.ok) {
      // Parsea la respuesta a formato JSON
      return response.json();
    } else {
      throw new Error('Error al obtener datos de la API');
    }
  })
  .then(data => {
    // Maneja los datos obtenidos
    console.log(data); // Muestra los datos en la consola
  })
  .catch(error => {
    // Maneja cualquier error que pueda ocurrir durante la solicitud
    console.error(error);
  });
