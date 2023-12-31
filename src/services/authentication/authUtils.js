import { loginRequest } from '../http/loginRequest'

import { setTokenCookie, getTokenCookie, deleteTokenCookie } from './cookieUtils'
import { saveLocalData, getLocalData } from './localStorageUtils'

/**
 * Procesa la respuesta de inicio de sesión y guarda datos localmente.
 * @param {string} email - Correo electrónico del usuario.
 * @param {string} password - Contraseña del usuario.
 * @returns {Object} - Objeto con el token de sesión y datos del usuario.
 * @throws {Error} - En caso de error.
 */
export const processLoginResponse = async (email, password) => {
    try {
        const response = await loginRequest(email, password)

        if (!response) {
            throw new Error('La respuesta del servidor está vacía.')
        }

        if (response.success) {
            // Manejar la autenticación aquí.
            // setTokenCookie(response.token);

            const user = response.user

            // Guardar el token y datos del usuario localmente.
            saveLocalData('tokenSession', response.token)
            saveLocalData('userData', user)

            return { tokenSession: response.token, user }
        } else {
            throw new Error(response.error)
        }
    } catch (error) {
        console.error('Error al procesar la respuesta de inicio de sesión:', error)

        // Elimina el token de sesión y datos del usuario localmente en caso de error.
        // deleteTokenCookie();
        logout()

        throw error
    }
}

/**
 * Cierra la sesión del usuario.
 */
export const logout = () => {
    // Elimina el token de sesión de la cookie.
    const token = false
    // Elimina información adicional local si se eliminó la cookie de token.
    clearLocalDataOnTokenLogout(token)
    window.location.reload()
}

export function checkLogout() {
    // Obtener el valor de 'dateCurrent' del localStorage
    const dateCurrent = localStorage.getItem('dateCurrent')

    // Verificar si 'dateCurrent' es null
    if (dateCurrent !== null) {
        // Convertir 'dateCurrent' a un objeto de fecha
        const storedDate = new Date(dateCurrent)

        // Obtener la fecha actual
        const currentDate = new Date()

        // Calcular la diferencia en milisegundos
        const timeDifference = currentDate - storedDate

        // Convertir la diferencia a horas
        const hoursDifference = timeDifference / (1000 * 60 * 60)

        // Verificar si han pasado más de dos horas
        if (hoursDifference > 2) {
            // Llamar a logout si han pasado más de dos horas
            logout()
        } else {
        }
    } else {
    }
}

/**
 * Elimina información adicional local cuando se elimina la cookie de token.
 */
export function clearLocalDataOnTokenLogout(token) {
    if (!token) {
        // No se encontró un token, lo que indica que el usuario ha cerrado la sesión.
        // Elimina cualquier información adicional local almacenada.
        localStorage.removeItem('userData')
        localStorage.removeItem('tokenSession')
        localStorage.removeItem('id')
        localStorage.removeItem('dateCurrent')
        localStorage.removeItem(token)
    }
}
