import React from 'react'
import PropTypes from 'prop-types'

const PublicationFormCreate = ({
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
            <h2 className="text-2xl font-bold mb-4">Crear Publicación</h2>

            <form onSubmit={handleSubmit}>
                {/* Componente de entrada reutilizable */}
                {renderTextarea('titulo', 'Título', formData.titulo, handleChange, errors.titulo)}

                {/* Componente de área de texto reutilizable */}
                {renderTextarea(
                    'descripcion',
                    'Descripción',
                    formData.descripcion,
                    handleChange,
                    errors.descripcion
                )}

                {/* Componente de área de texto reutilizable */}
                {renderTextarea(
                    'contenido',
                    'Contenido',
                    formData.contenido,
                    handleChange,
                    errors.contenido
                )}

                {/* Componente de entrada de archivo reutilizable */}
                {renderFileInput('fotoUrl', 'Foto URL', handleImageChange, errors.fotoUrl)}

                <div className="mt-4 flex justify-end">
                    {/* Botón de cancelar */}
                    <button
                        type="button"
                        onClick={resetForm}
                        className="mr-2 bg-gray-500 text-white py-1 px-2 rounded hover:bg-gray-600">
                        Cancelar
                    </button>

                    {/* Botón de enviar */}
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

// Propiedades
PublicationFormCreate.propTypes = {
    formData: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleImageChange: PropTypes.func.isRequired,
    validateForm: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    isEditing: PropTypes.bool.isRequired,
}

// Función para renderizar un componente de entrada
const renderInput = (id, label, value, onChange, error) => (
    <div className="mb-4">
        <label htmlFor={id} className="block text-sm font-medium text-gray-300">
            {label}
        </label>
        <input
            type="text"
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            className={`mt-1 p-2 block w-full border text-gray-900 ${
                error ? 'border-red-500' : 'border-gray-300'
            } rounded-md`}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
)

// Función para renderizar un componente de área de texto
const renderTextarea = (id, label, value, onChange, error) => (
    <div className="mb-4">
        <label htmlFor={id} className="block text-sm font-medium text-gray-300">
            {label}
        </label>
        <textarea
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            className={`mt-1 p-2 block w-full border text-gray-900 ${
                error ? 'border-red-500' : 'border-gray-300'
            } rounded-md`}></textarea>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
)

// Función para renderizar un componente de entrada de archivo
const renderFileInput = (id, label, onChange, error) => (
    <div className="mb-4">
        <label htmlFor={id} className="block text-sm font-medium text-gray-300">
            {label}
        </label>
        <input
            type="file"
            id={id}
            name={id}
            onChange={onChange}
            className={`mt-1 p-2 block w-full border ${
                error ? 'border-red-500' : 'border-gray-300'
            } rounded-md`}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
)

export default PublicationFormCreate
