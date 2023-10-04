import React from 'react';
import fondoVideo from './fondodelvideo.png';

const VideoProduct = () => {
    return (
        <div
            className="bg-cover bg-center h-96 md:h-screen flex items-center justify-center"
            style={{
                backgroundImage: `url(${fondoVideo})`, // Reemplaza con la ruta correcta de tu imagen de fondo
            }}
        >
            <iframe
                className="w-1/2 h-1/2" // Aquí ajustamos el tamaño del video a la mitad
                src="https://www.youtube.com/embed/tgbNymZ7vqY" // Reemplaza con la URL de tu video
                title="Video del Producto"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default VideoProduct;
