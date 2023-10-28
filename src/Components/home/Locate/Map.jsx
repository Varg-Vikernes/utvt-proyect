import React from 'react';

class Map extends React.Component {
  render() {
    const imageUrl = "https://s3.amazonaws.com/ciudad.mapasdemexico.com.mx/mapa-capulhuac-mexico.jpg"; // URL de la imagen
    const imageUtvt = "https://utvt.edomex.gob.mx/sites/utvt.edomex.gob.mx/files/images/1%20ACERCA%20DE%20LA%20UTVT/1.11%20UNIDAD%20ACAD%C3%89MICA%20CAPULHUAC/CAPULHUAC-01.png";
    const imageUniN = "https://3.bp.blogspot.com/-7gQ-cq929rc/V9GRmGHd6zI/AAAAAAAAbOY/C1rz1H07DGcWieEyaZXfZC5Zgq98N0FEwCLcB/s1600/Lerma.%2BUTVT%2B%252833%2529.jpg";
    const Logo = "https://th.bing.com/th/id/OIP.iFthClJcrUpRATGdlxO0yQHaHa?pid=ImgDet&rs=1";
    const Referencia = "https://th.bing.com/th/id/R.201c413ec16685b43a66295ba82d25cf?rik=0nPyRbMzFu%2fvkw&pid=ImgRaw&r=0";
    return (
      <div className="flex flex-col lg:flex-row items-center justify-center h-screen p-1 mt-0">
        <div className="lg:w-1/2">
          <h2 className="text-4xl mb-2">Unidad Académica de Capulhuac / Universidad</h2>
          <img src={imageUrl} alt="Imagen" className="w-full max-h-96" />
        </div>
        <div className="lg:w-1/2 p-4">
          <p className="text-lg mb-4">
            Aquí puedes agregar tu breve descripción.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img src={imageUtvt} alt="Imagen 1" className="w-full max-h-36" />
            <img src={imageUniN} alt="Imagen 2" className="w-full max-h-36" />
            <img src={Logo} alt="Imagen 3" className="w-full max-h-36" />
            <img src={Referencia} alt="Imagen 4" className="w-full max-h-36" />
          </div>
        </div>
      </div>
    );
  }
}

export default Map;
