import React, { useState } from 'react'

const FormularioRegistroRecetasPopUp = ({ onClose }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        department: '',
        company: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Aquí puedes manejar la lógica de envío del formulario si es necesario
        // Luego, cierra el modal llamando a la función onClose
        console.log('Datos del formulario:', formData)
        onClose()
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

                <div
                    className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline">
                    <div className="bg-white dark:bg-gray-900">
                        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
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
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Escribe el titulo de la receta"
                                            required=""
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
                                            id="descripcion"
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
                                            id="ingredientes"
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
                                            id="elaboracion"
                                            rows="8"
                                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Agrega una descripción aquí"></textarea>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
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
