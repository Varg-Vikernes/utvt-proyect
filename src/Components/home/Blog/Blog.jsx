import React from "react";
import TarjetaBlog from "./tarjetaBlog";
import datosDeEjemplo from "./datosDeEjemplo";

function Blog() {
  return (
    <div>
      <h1>Mis Blogs</h1>
      {datosDeEjemplo.map((blog, index) => (
        <TarjetaBlog
          key={index}
          titulo={blog.titulo}
          imagenSrc={blog.imagenSrc}
          descripcion={blog.descripcion}
          mostrarBotonLeerMas={blog.mostrarBotonLeerMas}
          claseContenedor={blog.claseContenedor}
          claseImagen={blog.claseImagen}
          fechaPublicacion={blog.fechaPublicacion}
          autor={blog.autor}
          onBotonLeerMasClick={blog.onBotonLeerMasClick}
        />
      ))}
    </div>
  );
}

export default Blog;
