// PublicationFormEdit.js
import React from 'react'
import PropTypes from 'prop-types'
import { updatePublication } from '../../../services/http/publicationRequest'

const PublicationFormEdit = ({
    formData,
    errors,
    handleChange,
    handleImageChange,
    validateForm,
    handleSubmit,
    resetForm,
    isEditing,
}) => (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
        <div className="text-white bg-gray-900 p-8 rounded-md w-96">
            <h2 className="text-2xl font-bold mb-4">Editar Publicación</h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="titulo" className="block text-sm font-medium text-gray-300">
                        Título
                    </label>
                    <input
                        type="text"
                        id="titulo"
                        name="titulo"
                        value={formData.titulo}
                        onChange={handleChange}
                        className={`mt-1 p-2 block w-full border  text-gray-900 ${
                            errors.titulo ? 'border-red-500' : 'border-gray-300'
                        } rounded-md`}
                    />
                    {errors.titulo && <p className="text-red-500 text-sm mt-1">{errors.titulo}</p>}
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="descripcion"
                        className="block text-sm font-medium text-gray-300">
                        Descripción
                    </label>
                    <textarea
                        id="descripcion"
                        name="descripcion"
                        value={formData.descripcion}
                        onChange={handleChange}
                        className={`mt-1 p-2 block w-full border  text-gray-900 ${
                            errors.descripcion ? 'border-red-500' : 'border-gray-300'
                        } rounded-md`}></textarea>
                    {errors.descripcion && (
                        <p className="text-red-500 text-sm mt-1">{errors.descripcion}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="contenido" className="block text-sm font-medium text-gray-300">
                        Contenido
                    </label>
                    <textarea
                        id="contenido"
                        name="contenido"
                        value={formData.contenido}
                        onChange={handleChange}
                        className={`mt-1 p-2 block w-full border  text-gray-900 ${
                            errors.contenido ? 'border-red-500' : 'border-gray-300'
                        } rounded-md`}></textarea>
                    {errors.contenido && (
                        <p className="text-red-500 text-sm mt-1">{errors.contenido}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="fotoUrl" className="block text-sm font-medium text-gray-300">
                        Foto URL
                    </label>
                    <input
                        type="file"
                        id="fotoUrl"
                        name="fotoUrl"
                        onChange={handleImageChange}
                        className={`mt-1 p-2 block w-full border  ${
                            errors.fotoUrl ? 'border-red-500' : 'border-gray-300'
                        } rounded-md`}
                    />
                    {errors.fotoUrl && (
                        <p className="text-red-500 text-sm mt-1">{errors.fotoUrl}</p>
                    )}
                </div>

                <div className="mt-4 flex justify-end">
                    <button
                        type="button"
                        onClick={resetForm}
                        className="mr-2 bg-gray-500 text-white py-1 px-2 rounded hover:bg-gray-600">
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600">
                        {isEditing ? 'Actualizar' : 'Crear'}
                    </button>
                </div>
            </form>
        </div>
    </div>
)

PublicationFormEdit.propTypes = {
    formData: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleImageChange: PropTypes.func.isRequired,
    validateForm: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
}

export default PublicationFormEdit
