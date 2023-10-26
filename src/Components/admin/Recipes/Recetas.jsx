import React, { useEffect, useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import FormularioRegistroRecetasPopUp from './FormularioRegistroRecetasPopUp'

function Recetas() {
    const [recetas, setRecetas] = useState([])
    const [loading, setLoading] = useState(true)

    const [isFormOpen, setFormOpen] = useState(false)

    const openForm = () => {
        setFormOpen(true)
    }

    const closeForm = () => {
        setFormOpen(false)
    }

    useEffect(() => {
        // Realizar la solicitud a la API usando fetch
        fetch('https://backend-proyecto-api-production.up.railway.app/recetas')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Error al cargar recetas: ${response.status}`)
                }
                return response.json()
            })
            .then((data) => {
                setRecetas(data)
                setLoading(false)
            })
            .catch((error) => {
                console.error('Error al cargar recetas:', error)
                setLoading(false)
            })
    }, [])
    return (
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg ">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-lg">
                            Nombre Receta
                        </th>
                        <th scope="col" class="px-6 py-3 text-lg">
                            Descripción
                        </th>
                        <th scope="col" class="px-6 py-3 text-lg">
                            Ingredientes
                        </th>
                        <th scope="col" class="px-6 py-3 text-lg">
                            Elaboracion
                        </th>
                        <th scope="col" class="px-6 py-3 text-lg justify-evenly">
                            Acciones
                            <div>
                                <button
                                    onClick={openForm}
                                    type="button"
                                    className="w-1/2 text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-200 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto">
                                    <svg
                                        className="-ml-1 mr-2 h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                    Add user
                                </button>
                                {isFormOpen && (
                                    <FormularioRegistroRecetasPopUp
                                        isOpen={isFormOpen}
                                        onClose={closeForm}
                                    />
                                )}
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {recetas.map((receta) => (
                        <tr
                            key={receta.idReceta}
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                                scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {receta.titulo}
                            </th>
                            <td class="px-6 py-4 text-base ">{receta.descripcion}</td>
                            <td class="px-6 py-4 text-base">{receta.ingredientes}</td>
                            <td class="px-6 py-4 text-base">{receta.elaboracion}</td>
                            <td class="p-4 whitespace-nowrap space-x-2">
                                <button
                                    type="button"
                                    data-modal-toggle="user-modal"
                                    class="text-white bg-cyan-600 hover:bg-cyan-700  font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
                                    <svg
                                        class="mr-2 h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                                        <path
                                            fillRule="evenodd"
                                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    Edit
                                </button>

                                <button
                                    type="button"
                                    data-modal-toggle="delete-user-modal"
                                    class="text-white bg-red-600 hover:bg-red-800  font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
                                    <svg
                                        class="mr-2 h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fillRule="evenodd"
                                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Recetas
