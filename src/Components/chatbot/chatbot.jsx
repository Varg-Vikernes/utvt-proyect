fetch('/webhook', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: 'Hola' }), // Mensaje que deseas enviar al bot
})
    .then((response) => response.json())
    .then((data) => {
        // Maneja la respuesta del bot aquí
        console.log(data);
    })
    .catch((error) => console.error(error));
