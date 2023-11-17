import React from 'react'
import { createRoot } from 'react-dom/client'
import MyRoutes from './routes/routes'
import './index.css'

const root = document.getElementById('root')
const rootElement = createRoot(root)

rootElement.render(
    <React.StrictMode>
        <MyRoutes />
    </React.StrictMode>
)
