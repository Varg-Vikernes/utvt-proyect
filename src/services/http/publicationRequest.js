// src/services/publicationRequest.js
import { savePublicationsLocally, getPublicationsLocally } from '../util/publicaccionesUtils'

const API_BASE_URL = 'http://localhost:4000/publicacion'

export const fetchPublications = async () => {
    try {

        const response = await fetch(API_BASE_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (!response.ok) {
            throw new Error(
                `Solicitud de publicaciones fallida con código de estado: ${response.status}`
            )
        }

        const publicationData = await response.json()
        savePublicationsLocally(publicationData)
        console.log("ingformaccion de hhtp",publicationData );
        return publicationData
    } catch (error) {
        throw error
    }
}

export const createPublication = async (publicationData) => {
    try {
        const response = await fetch(API_BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(publicationData),
        })

        if (!response.ok) {
            throw new Error(
                `Solicitud para crear una publicación fallida con código de estado: ${response.status}`
            )
        }

        const createdPublication = await response.json()
        return createdPublication
    } catch (error) {
        throw error
    }
}

export const updatePublication = async (id, publicationData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(publicationData),
        })

        if (!response.ok) {
            throw new Error(
                `Solicitud para actualizar una publicación fallida con código de estado: ${response.status}`
            )
        }

        const updatedPublication = await response.json()
        return updatedPublication
    } catch (error) {
        throw error
    }
}

export const deletePublication = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${id}`, {
            method: 'DELETE',
        })

        if (!response.ok) {
            throw new Error(
                `Solicitud para eliminar una publicación fallida con código de estado: ${response.status}`
            )
        }

        const deletedPublication = await response.json()
        return deletedPublication
    } catch (error) {
        throw error
    }
}
