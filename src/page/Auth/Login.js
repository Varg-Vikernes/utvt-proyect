// Login.js
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../Components/navbar/nav'
import Footer from '../../Components/footer/foter'
import LoginForm from '../../Components/auth/LoginForm'
import BackgroundImage from '../../Components/auth/BackgroundImage'
import { loginRequest } from '../../services/http/loginRequest'
import { getLocalUserData, clearLocalUserData } from '../../services/authentication/userUtils'

const Login = () => {
    const navigate = useNavigate()
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(email, password) {
        try {
            setIsLoading(true) // Activa el spinner
            setError(null) // Limpia los errores

            // Realiza la solicitud de inicio de sesión al servidor
            const loginResult = await loginRequest(email, password)

            if (loginResult) {
                // El inicio de sesión fue exitoso, redirige al usuario a la página de inicio.
                getLocalUserData()
                navigate('/')
            } else {
                // El inicio de sesión falló; muestra un mensaje de error.
                setError('Inicio de sesión fallido. Verifique sus credenciales.')
                clearLocalUserData()
            }
        } catch (error) {
            // Error de red u otro error inesperado.
            setError('Ocurrió un error durante el inicio de sesión. Por favor, intente nuevamente.')
            clearLocalUserData()
        } finally {
            setIsLoading(false) // Desactiva el spinner
        }
    }

    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen "
            >
                <LoginForm handleLogin={handleLogin} isLoading={isLoading} />
                <BackgroundImage />
            </div>
            <Footer />
        </div>
    )
}

export default Login
