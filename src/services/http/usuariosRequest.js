/**
 * Realiza una solicitud para obtener información de un usuario y guarda los datos localmente.
 * @param {string} userId - ID del usuario.
 * @param {string} apiUrl - URL de la API de usuarios.
 * @param {string} token - Token de autorización del usuario.
 * @returns {Promise<Object>} - Promesa que resuelve en los datos del usuario.
 * @throws {Error} - En caso de error en la solicitud.
 */
export const usuariosRequest = async (userId, token) => {
    try {
        if (!token) {
            throw new Error('Token de autorización no disponible.')
        }

        const response = await fetch(
            `https://backend-proyecto-api-production.up.railway.app/usuarios/${userId}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            }
        )

        if (!response.ok) {
            throw new Error(`Solicitud de usuario fallida con código de estado: ${response.status}`)
        }

        const userData = await response.json()

        // Almacena los datos del usuario de manera local
        localStorage.setItem('userData', JSON.stringify(userData))

        return userData
    } catch (error) {
        throw error
    }
}
