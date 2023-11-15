// src/services/RecipeRequest.js

const token = localStorage.getItem('tokenSession')
const API_BASE_URL = 'http://backend-proyecto-api-production.up.railway.app/recetas'

export const fetchRecipe = async () => {
    try {
        const response = await fetch(
            `https://backend-proyecto-api-production.up.railway.app/recetas`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )

        if (!response.ok) {
            throw new Error(
                `Solicitud de recetas fallida con código de estado: ${response.status}`
            )
        }

        const RecipeData = await response.json()
        localStorage.setItem('RecipeData', JSON.stringify(RecipeData))

        return RecipeData
    } catch (error) {
        throw error
    }
}

export const createRecipe = async (RecipeData) => {
    try {
        const response = await fetch(
            `https://backend-proyecto-api-production.up.railway.app/recetas`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(RecipeData),
            }
        )

        if (!response.ok) {
            throw new Error(
                `Solicitud para crear una publicación fallida con código de estado: ${response.status}`
            )
        }

        const createdRecipe = await response.json()
        return createdRecipe
    } catch (error) {
        throw error
    }
}

export const updateRecipe = async (id, RecipeData) => {
    try {
        const response = await fetch(
            `https://backend-proyecto-api-production.up.railway.app/recetas/${id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(RecipeData),
            }
        )

        if (!response.ok) {
            throw new Error(
                `Solicitud para actualizar una publicación fallida con código de estado: ${response.status}`
            )
        }

        const updatedRecipe = await response.json()
        return updatedRecipe
    } catch (error) {
        throw error
    }
}

export const deleteRecipe = async (id) => {
    try {
        if (!token) {
            throw new Error('Token de autorización no disponible.')
        }

        const response = await fetch(
            `https://backend-proyecto-api-production.up.railway.app/recetas/${id}`,
            {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )

        if (!response.ok) {
            throw new Error(
                `Solicitud para eliminar una publicación fallida con código de estado: ${response.status}`
            )
        }

        const deletedRecipe = await response.json()
        return deletedRecipe
    } catch (error) {
        throw error
    }
}
