// userUtils.js

/**
 * Obtiene los datos del usuario almacenados localmente.
 * @returns {Object} - Datos del usuario o null si no se encuentran.
 */

import { usuariosRequest, updateUsuarioRequest } from '../http/usuariosRequest'

export function getLocalUserData() {
    const token = localStorage.getItem('tokenSession')
    const id = localStorage.getItem('id')
    return usuariosRequest(id, token) // Retorna la promesa directamente
}

export function updateUsuarioData(newData) {
    const token = localStorage.getItem('tokenSession')
    const userId = localStorage.getItem('id')
    updateUsuarioRequest(token, userId, newData)
}
/**
 * Borra los datos del usuario almacenados localmente.
 */
export function clearLocalUserData() {
    localStorage.removeItem('userData')
    localStorage.removeItem('tokenSession')
    localStorage.removeItem('id')
}

/**
 * Verifica si el usuario está autenticado (tiene un token almacenado localmente).
 * @returns {boolean} - true si el usuario está autenticado, false de lo contrario.
 */
export function isAuthenticated() {
    const token = localStorage.getItem('tokenSession')
    return !!token
}
