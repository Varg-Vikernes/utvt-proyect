import React, { useRef, useEffect, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

const VideoProduct = ({ src, hideIconTimeout = 3000 }) => {
    const videoRef = useRef();
    const [isInViewport, setIsInViewport] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMouseOver, setIsMouseOver] = useState(false);

    const checkVisibility = () => {
        const element = videoRef.current;
        const boundingBox = element.getBoundingClientRect();
        const isVisible = boundingBox.top < window.innerHeight && boundingBox.bottom >= 0;

        setIsInViewport(isVisible);
    };

    const handleVisibilityChange = () => {
        const videoElement = videoRef.current;
        if (isInViewport && isPlaying && isMouseOver) {
            videoElement.play().catch(error => console.error('Error al reproducir el video:', error));
        } else {
            videoElement.pause();
        }
    };

    const handleManualToggle = () => {
        const videoElement = videoRef.current;
        setIsPlaying((prevIsPlaying) => {
            const newIsPlaying = !prevIsPlaying;
            if (newIsPlaying) {
                videoElement.play().catch(error => console.error('Error al reproducir el video:', error));
                // Mostrar el icono de pausa y establecer un temporizador para ocultarlo después de un tiempo configurable
                setIsMouseOver(true);
                setTimeout(() => setIsMouseOver(false), hideIconTimeout);
            } else {
                videoElement.pause();
            }
            return newIsPlaying;
        });
    };

    const handleMouseEnter = () => {
        // El usuario colocó el mouse, mostrar el icono de pausa
        setIsMouseOver(true);
    };

    const handleMouseLeave = () => {
        // El usuario retiró el mouse, ocultar el icono después de un tiempo configurable
        setTimeout(() => setIsMouseOver(false), hideIconTimeout);
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
    }, [isInViewport, isPlaying, isMouseOver, hideIconTimeout]);

    return (
        <div
            className="h-screen flex flex-col justify-center items-center"
            onClick={handleManualToggle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <h1 className="text-4xl font-bold text-center mb-4">
                Te invitamos a conocer más sobre nuestro producto, mirando el siguiente video.
            </h1>
            <div className="h-3/4 w-11/12 bg-white flex items-center justify-center relative">
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover rounded-xl"
                    src={src}
                    title="Video del Producto"
                    allowFullScreen
                />
                {isPlaying && isMouseOver && (
                    <div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        style={{ color: 'white', fontSize: '2em', cursor: 'pointer' }}
                    >
                        <FaPause />
                    </div>
                )}
            </div>
        </div>
    );
};

export default VideoProduct;
