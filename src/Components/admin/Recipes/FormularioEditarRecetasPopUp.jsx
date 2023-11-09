import React, { useState, useEffect } from 'react'

const FormularioEditarRecetasPopUp = ({ isOpen, onClose, recipe }) => {
    const [editedRecipe, setEditedRecipe] = useState({}) // Estado para la receta editada

    const token = localStorage.getItem('tokenSession')

    useEffect(() => {
        // Copia la receta seleccionada al estado de edición al abrir el formulario
        setEditedRecipe({ ...recipe })
    }, [recipe])

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setEditedRecipe({
            ...editedRecipe,
            [name]: value,
        })
    }

    const handleSave = (e) => {
        e.preventDefault()
        // Realiza una solicitud PUT o PATCH para actualizar la receta en la API.
        const apiUrl = `https://backend-proyecto-api-production.up.railway.app/recetas/${editedRecipe.idReceta}` // Cambia recipeData a editedRecipe
        const requestOptions = {
            method: 'PUT', // o 'PATCH' dependiendo de la API
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editedRecipe), // Cambia formData a editedRecipe
        }

        fetch(apiUrl, requestOptions)
            .then((response) => {
                if (!response.ok) {
                    console.error(
                        'Error en la respuesta de la API:',
                        response.status,
                        response.statusText
                    )
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
                {/* Aquí está el contenedor principal */}
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
                                Actualizar receta
                            </h2>
                            <form onSubmit={handleSave}>
                                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                    <div className="w-full">
                                        <label
                                            htmlFor="titulo"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Título de la Receta
                                        </label>
                                        <input
                                            type="text"
                                            name="titulo"
                                            id="titulo"
                                            value={editedRecipe.titulo}
                                            onChange={handleInputChange}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Título de la Receta"
                                            required=""
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label
                                            htmlFor="descripcion"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Descripción
                                        </label>
                                        <input
                                            type="text"
                                            name="descripcion"
                                            id="descripcion"
                                            value={editedRecipe.descripcion}
                                            onChange={handleInputChange}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Escribe una corta descripción"
                                            required=""
                                        />
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="ingredientes"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Ingredientes
                                        </label>
                                        <textarea
                                            name="ingredientes"
                                            id="ingredientes"
                                            value={editedRecipe.ingredientes}
                                            onChange={handleInputChange}
                                            rows="4"
                                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="1.-
                                            2.-
                                            3.-
                                            Agrega cuantos necesites :D "></textarea>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="elaboracion"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Elaboración
                                        </label>
                                        <textarea
                                            name="elaboracion"
                                            id="elaboracion"
                                            value={editedRecipe.elaboracion}
                                            onChange={handleInputChange}
                                            rows="4"
                                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Paso 1:
                                            Paso 2: 
                                            Paso 3: 
                                            Agrega los que sean necesarios :)"></textarea>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-green-600 hover:bg-green-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                                    Actualizar Receta
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormularioEditarRecetasPopUp
