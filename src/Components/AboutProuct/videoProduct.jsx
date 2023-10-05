import React from 'react';
import fondoVideo from './fondodelvideo.png';

const VideoProduct = () => {
    return (
        <div className="bg-cover bg-center h-96 md:h-screen flex flex-col items-center justify-center"
            style={{
                backgroundImage: `url(${fondoVideo})`, // Reemplaza con la ruta correcta de tu imagen de fondo
            }}
        >
            <h1 className="text-5xl text-white font-bold mb-6 text-center">Te invitamos a conocer más sobre nuestro producto, mirando el siguiente video</h1>
            <iframe
                className="w-2/3 h-2/3" // Ajustamos el tamaño del video a dos tercios del contenedor
                src="https://www.youtube.com/embed/tgbNymZ7vqY" // Reemplaza con la URL de tu video
                title="Video del Producto"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default VideoProduct;
