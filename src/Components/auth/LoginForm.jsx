import React from "react";
import { Link } from "react-router-dom";
import { formStyles } from "../../styles/Constants";

function LoginForm({ handleLogin, email, setEmail, password, setPassword }) {
  return (
    <div className={formStyles.container}>
      <div className={formStyles.formContainer}>
        <h1 className={formStyles.title}>Inicio de Sesión</h1>
        <div className="mb-4">
          <label className={formStyles.inputLabel} htmlFor="email">
            Correo Electrónico
          </label>
          <input
            className={formStyles.inputField}
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className={formStyles.inputLabel} htmlFor="password">
            Contraseña
          </label>
          <input
            className={formStyles.inputField}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4 flex items-center justify-between mt-4">
          <div className="mx-2"></div>
          <label className="text-sm mx-2 text-gray-600">
            <Link to="/recovery_forgot" className={formStyles.link}>
              Recuperar contraseña
            </Link>
          </label>
          <label className="text-sm mx-2 text-gray-600">
            <Link to="/register" className={formStyles.link}>
              Registrarse
            </Link>
          </label>
        </div>
        <div className="mt-6">
          <button
            className={formStyles.button}
            type="button"
            onClick={handleLogin}
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
