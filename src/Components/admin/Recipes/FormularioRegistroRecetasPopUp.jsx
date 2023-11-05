import React, { useState } from 'react'

const FormularioRegistroRecetasPopUp = ({ onClose }) => {
    const [formData, setFormData] = useState({
        titulo: '',
        descripcion: '',
        ingredientes: '',
        elaboracion: '',
    })

    const token = localStorage.getItem('tokenSession')

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // Define la URL de tu API
        const apiUrl = 'https://backend-proyecto-api-production.up.railway.app/recetas'

        // Configura la solicitud POST
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(formData),
        }

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
            })
            .catch((error) => {
                // Ocurrió un error al enviar la solicitud, puedes manejar el error aquí
                console.error('Error al enviar la solicitud:', error)
            })
    }

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
                                Add a new product
                            </h2>
                            <form onSubmit={handleSubmit}>
                                <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                    <div class="sm:col-span-2">
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
                                            placeholder="Escribe el titulo de la receta"
                                            required="required"
                                        />
                                    </div>

                                    <div class="sm:col-span-2">
                                        <label
                                            type="text"
                                            name="descripcion"
                                            htmlFor="descripcion"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Descripcion
                                        </label>
                                        <textarea
                                            name="descripcion"
                                            id="descripcion"
                                            value={formData.descripcion}
                                            onChange={handleInputChange}
                                            rows="3"
                                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Agrega una descripción aquí"></textarea>
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
                                            rows="5"
                                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Agrega una descripción aquí"></textarea>
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
                                            rows="8"
                                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Agrega una descripción aquí"></textarea>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-green-600 hover:bg-green-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                                    Add product
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
