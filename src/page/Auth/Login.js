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
            setIsLoading(true)
            setError(null)

            const loginResult = await loginRequest(email, password)

            if (loginResult) {
                await getLocalUserData() // Espera a que se resuelva la promesa
                console.log('navbar ', localStorage.getItem('userData'))
                navigate('/')
            } else {
                setError('Inicio de sesión fallido. Verifique sus credenciales.')
                clearLocalUserData()
            }
        } catch (error) {
            setError('Ocurrió un error durante el inicio de sesión. Por favor, intente nuevamente.')
            clearLocalUserData()
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen ">
                <LoginForm handleLogin={handleLogin} isLoading={isLoading} />
                <BackgroundImage />
            </div>
            <Footer />
        </div>
    )
}

export default Login
