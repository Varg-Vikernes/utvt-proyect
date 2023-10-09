import React from "react";

function BackgroundImage() {
  return (
    <div
      className="w-full h-screen md:w-1/2 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(/assets/auth/image/queso-vegano-portada.jpeg)",
      }}
    ></div>
  );
}

export default BackgroundImage;
