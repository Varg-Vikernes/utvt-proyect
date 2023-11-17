import React, { useRef, useEffect, useState } from 'react';

const VideoProduct = ({ src }) => {
    const videoRef = useRef();
    const [isInViewport, setIsInViewport] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);

    const checkVisibility = () => {
        const element = videoRef.current;
        const boundingBox = element.getBoundingClientRect();
        const isVisible = boundingBox.top < window.innerHeight && boundingBox.bottom >= 0;

        setIsInViewport(isVisible);
    };

    const handleVisibilityChange = () => {
        const videoElement = videoRef.current;
        if (isInViewport && isPlaying) {
            videoElement.play();
        } else {
            videoElement.pause();
        }
    };

    const handleManualToggle = () => {
        const videoElement = videoRef.current;
        setIsPlaying((prevIsPlaying) => {
            const newIsPlaying = !prevIsPlaying;
            if (newIsPlaying) {
                videoElement.play();
            } else {
                videoElement.pause();
            }
            return newIsPlaying;
        });
    };

    useEffect(() => {
        checkVisibility(); // Verificar la visibilidad al cargar el componente

        const scrollHandler = () => {
            checkVisibility();
            handleVisibilityChange();
        };

        // Agregar eventos de desplazamiento y redimensionamiento para verificar la visibilidad
        window.addEventListener('scroll', scrollHandler);
        window.addEventListener('resize', scrollHandler);

        // Limpiar los eventos al desmontar el componente
        return () => {
            window.removeEventListener('scroll', scrollHandler);
            window.removeEventListener('resize', scrollHandler);
        };
    }, [isInViewport, isPlaying]);

    return (
        <div
            className="h-screen flex flex-col justify-center items-center"
            onClick={handleManualToggle}
        >
            <h1 className="text-4xl font-bold text-center mb-4">
                Te Invitamos a conocer más sobre nuestro producto, mirando el siguiente video.
            </h1>
            <div className="h-3/4 w-11/12 bg-white flex items-center justify-center">
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover rounded-xl"
                    src="assets/home/videos/q-spicy.mp4"
                    title="Video del Producto"
                    allowFullScreen
                />
            </div>
        </div>
    );
};

export default VideoProduct;
