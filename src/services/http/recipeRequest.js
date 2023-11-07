export const recipeGet = async () => {
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
            throw new Error(`Solicitud de usuario fallida con código de estado: ${response.status}`)
        }

        const userData = await response.json()

        // Almacena los datos del usuario de manera local
        localStorage.setItem('recipeData', JSON.stringify(userData))

        return userData
    } catch (error) {
        throw error
    }
}
