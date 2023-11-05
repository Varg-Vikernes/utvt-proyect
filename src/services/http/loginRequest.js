export const loginRequest = async (email, password, customHeaders = {}) => {
    try {
        const response = await fetch(
            'https://backend-proyecto-api-production.up.railway.app/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...customHeaders,
                },
                body: JSON.stringify({
                    correoElectronico: email,
                    contrasena: password,
                }),
            }
        )

        if (!response.ok) {
            throw new Error(
                `Solicitud de inicio de sesión fallida con código de estado: ${response.status}`
            )
        }

        const responseData = await response.json()

        // Verificar si la respuesta contiene un token
        if (responseData.success && responseData.token) {
            // Almacena el token de acceso de manera local
            localStorage.setItem('tokenSession', responseData.token)
            localStorage.setItem('id', responseData.user.idUsuario)
            localStorage.setItem('nombre', responseData.user.nombre)
            console.log(responseData)
            return true
        }

        return false
    } catch (error) {
        throw error
    }
}
