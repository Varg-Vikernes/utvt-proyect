const datosDeEjemplo = [
  {
    titulo: "Mi Viaje a la Playa",
    imagenSrc: "../assets/home/blog/blog.png",
    descripcion:
      "Atrevete a probar nuestro queso en diferentes platillos de tu gusto gracias a su formula detallada",
    mostrarBotonLeerMas: false,
    claseContenedor: "mb-4", // Clase CSS personalizada para el contenedor
    claseImagen: "rounded", // Clase CSS personalizada para la imagen
    fechaPublicacion: "2023-10-09",
    autor: "Juan Pérez",
    onBotonLeerMasClick: () => {
      alert("¡Hiciste clic en Leer Más!");
    },
  },

  {
    titulo: "Elaboracion de nuestro queso ",
    imagenSrc: "https://4.bp.blogspot.com/-rGINeSCBXl8/WzAZfgJCf7I/AAAAAAAAJxc/DMrSRbiFDRgVTwC0SIny_ERBtpwz2gQFgCEwYBhgL/w1200-h630-p-k-no-nu/elaboracion-queso-roncal-paso-a-paso-1.png",
    descripcion:
      "Procesos quimicos y demas para la creacion del queso ademas de moldeo y proceso de empaquetado ",
    mostrarBotonLeerMas: false, // Sin botón "Leer Más"
    claseContenedor: "mb-4", // Clase CSS personalizada para el contenedor
    claseImagen: "rounded", // Clase CSS personalizada para la imagen
    fechaPublicacion: "2023-10-07",
    autor: "Ana López",
  },
  {
    titulo: "Consejos para una buena comida ",
    imagenSrc: "https://enterateahora.com.mx/wp-content/uploads/2016/10/bigstock-140524295.jpg",
    descripcion:
      "Aprende ricas recetas para alcanzar el platillo que que tanto deseas y aun precio bajo para su consumo .",
    mostrarBotonLeerMas: false, // Sin botón "Leer Más"
    claseContenedor: "mb-4", // Clase CSS personalizada para el contenedor
    claseImagen: "rounded", // Clase CSS personalizada para la imagen
    fechaPublicacion: "2023-10-07",
    autor: "Ana López",
  },
];

export default datosDeEjemplo;
