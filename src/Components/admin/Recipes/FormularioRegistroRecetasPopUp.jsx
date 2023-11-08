import React, { useState } from 'react'

const FormularioRegistroRecetasPopUp = ({ onClose }) => {
    const [formData, setFormData] = useState({
        titulo: '',
        descripcion: '',
        ingredientes: '',
        elaboracion: '',
    })

    const [selectedImage, setSelectedImage] = useState(null) // Agregamos el estado para la imagen
    const token = localStorage.getItem('tokenSession')

    const handleInputChange = (e) => {
        const { name, value, files } = e.target
        if (name === 'imagen' && files.length > 0) {
            setSelectedImage(files[0])
            setFileUploaded(false) // Reinicia el estado de carga del archivo
        } else {
            setFormData({
                ...formData,
                [name]: value,
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setFileUploading(true) // Inicia la carga del archivo

        // Crea un objeto FormData para enviar la imagen junto con otros datos del formulario
        const formDataWithImage = new FormData()
        formDataWithImage.append('titulo', formData.titulo)
        formDataWithImage.append('descripcion', formData.descripcion)
        formDataWithImage.append('ingredientes', formData.ingredientes)
        formDataWithImage.append('elaboracion', formData.elaboracion)
        formDataWithImage.append('imagen', selectedImage)

        // Define la URL de tu API
        const apiUrl = 'https://backend-proyecto-api-production.up.railway.app/recetas'

        // Configura la solicitud POST
        const requestOptions = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formDataWithImage,
        }

        console.log(formData) // Agregar esto para depurar
        // Realiza la solicitud fetch
        fetch(apiUrl, requestOptions)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error al enviar la solicitud')
                }
                return response.json()
            })
            .then((data) => {
                // La solicitud se realizó con éxito, puedes manejar la respuesta aquí
                console.log('Respuesta de la API:', data)
                // Luego, cierra el modal llamando a la función onClose
                onClose()

                setFileUploading(false) // La carga del archivo ha finalizado
                setFileUploaded(true) // El archivo ha sido cargado por completo
            })
            .catch((error) => {
                // Ocurrió un error al enviar la solicitud, puedes manejar el error aquí
                console.error('Error al enviar la solicitud:', error)
            })
    }

    /* Se agregaron 2 nuevos estados para rastrear si la carga del archivo esta en curso o ya a finalizado */
    const [fileUploading, setFileUploading] = useState(false)
    const [fileUploaded, setFileUploaded] = useState(false)

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <span
                    className="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true">
                    &#8203;
                </span>
                {/* Here is the principal container */}
                <div
                    className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-4xl sm:w-full h-1/2  "
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline">
                    <div className="bg-white dark:bg-gray-900 h-1/2">
                        <div className="py-8 px-4 mx-auto max-w-3xl lg:py-16">
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-900">
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                                Agregar nueva receta
                            </h2>
                            <form onSubmit={handleSubmit}>
                                <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                    <div class="w-full">
                                        <label
                                            htmlFor="titulo"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Titulo de la Receta
                                        </label>
                                        <input
                                            type="text"
                                            name="titulo"
                                            id="titulo"
                                            value={formData.titulo}
                                            onChange={handleInputChange}
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Titulo de la Receta"
                                            required=""
                                        />
                                    </div>
                                    <div class="w-full">
                                        <label
                                            htmlFor="descripcion"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Descripción
                                        </label>
                                        <input
                                            type="text"
                                            name="descripcion"
                                            id="descripcion"
                                            value={formData.descripcion}
                                            onChange={handleInputChange}
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Escribe una corta descripción"
                                            required=""
                                        />
                                    </div>

                                    <div class="sm:col-span-2">
                                        <label
                                            type="text"
                                            name="ingredientes"
                                            htmlFor="ingredientes"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Ingredientes
                                        </label>
                                        <textarea
                                            name="ingredientes"
                                            id="ingredientes"
                                            value={formData.ingredientes}
                                            onChange={handleInputChange}
                                            rows="4"
                                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder=" 1.-
                                            2.- 
                                            3.- 
                                            Agrega cuantos necesites :D "></textarea>
                                    </div>

                                    <div class="sm:col-span-2">
                                        <label
                                            type="text"
                                            name="elaboracion"
                                            htmlFor="elaboracion"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Elaboración
                                        </label>
                                        <textarea
                                            name="elaboracion"
                                            id="elaboracion"
                                            value={formData.elaboracion}
                                            onChange={handleInputChange}
                                            rows="4"
                                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder=" Paso 1:
                                            Paso 2: 
                                            Paso 3: 
                                            Agrega los que sean necesarios :)"></textarea>
                                    </div>

                                    {/* Aqui se incluye el campo para la carga de archivos. */}
                                    <div class="flex items-center justify-center w-full sm:col-span-2">
                                        <label
                                            htmlFor="imagen"
                                            class="flex flex-col items-center justify-center w-full h-22 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                                <svg
                                                    class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 20 16">
                                                    <path
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                                    />
                                                </svg>
                                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                    <span class="font-semibold">
                                                        Click to upload
                                                    </span>{' '}
                                                    or drag and drop
                                                </p>
                                                <p class="text-xs text-gray-500 dark:text-gray-400">
                                                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                                                </p>
                                            </div>
                                            <input
                                                onChange={handleInputChange}
                                                name="imagen"
                                                id="imagen"
                                                type="file"
                                                class="hidden"
                                            />
                                        </label>
                                    </div>
                                </div>
                                {fileUploading && (
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Cargando archivo...
                                    </p>
                                )}

                                {fileUploaded && (
                                    <p className="text-sm text-green-500 dark:text-green-400">
                                        Archivo cargado con éxito.
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-green-600 hover:bg-green-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                                    Agregar Receta
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormularioRegistroRecetasPopUp
