const datosDeEjemplo = [
    {
      titulo: "Mi Viaje a la Playa",
      imagenSrc: "url_de_la_imagen_1.jpg",
      descripcion: "Un relato de mi viaje a la hermosa playa. Disfruté del sol, la arena y las olas del mar.",
      mostrarBotonLeerMas: true,
      claseContenedor: "mb-4", // Clase CSS personalizada para el contenedor
      claseImagen: "rounded", // Clase CSS personalizada para la imagen
      fechaPublicacion: "2023-10-09",
      autor: "Juan Pérez",
      onBotonLeerMasClick: () => {
        alert("¡Hiciste clic en Leer Más!");
      },
    },
    {
      titulo: "Recetas de Cocina",
      imagenSrc: "url_de_la_imagen_2.jpg",
      descripcion: "Descubre deliciosas recetas de cocina para preparar en casa. Desde platos principales hasta postres.",
      mostrarBotonLeerMas: true,
      claseContenedor: "mb-4", // Clase CSS personalizada para el contenedor
      claseImagen: "rounded", // Clase CSS personalizada para la imagen
      fechaPublicacion: "2023-10-08",
      autor: "María Rodríguez",
      onBotonLeerMasClick: () => {
        alert("¡Hiciste clic en Leer Más!");
      },
    },
    {
      titulo: "Consejos para el Éxito",
      imagenSrc: "url_de_la_imagen_3.jpg",
      descripcion: "Aprende valiosos consejos para alcanzar el éxito en tu vida personal y profesional.",
      mostrarBotonLeerMas: false, // Sin botón "Leer Más"
      claseContenedor: "mb-4", // Clase CSS personalizada para el contenedor
      claseImagen: "rounded", // Clase CSS personalizada para la imagen
      fechaPublicacion: "2023-10-07",
      autor: "Ana López",
    },
  ];
  
  export default datosDeEjemplo;
  