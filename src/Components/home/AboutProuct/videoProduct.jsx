import React from 'react'

const VideoProduct = () => {
    return (
        <div id="conocenos" className="h-screen flex flex-col justify-center items-center ">
            <h2 className="text-4xl font-bold text-center mb-4">
                Descubre más sobre nuestro producto explorando el siguiente video.
            </h2>
            <div className="h-3/4 w-11/12 bg-white flex items-center justify-center">
                <iframe
                    className="w-full h-full object-cover rounded-xl"
                    src="https://www.youtube.com/embed/u63KbDV3GCQ"
                    title="Video del Producto"
                    allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default VideoProduct
