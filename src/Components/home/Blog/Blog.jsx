import React from "react";
import datosDeEjemplo from "./datosDeEjemplo";
import TarjetaBlog from "./TarjetaBlog";

function Blog() {
  return (
    <div
      id="blog"
      className="h-screen flex flex-col justify-center items-center"
    >
      <h1 className="text-3xl font-bold text-center mb-4">Mis Blogs</h1>
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
