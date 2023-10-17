// userUtils.js

/**
 * Obtiene los datos del usuario almacenados localmente.
 * @returns {Object} - Datos del usuario o null si no se encuentran.
 */

import { usuariosRequest } from "../http/usuariosRequest";
const token = localStorage.getItem("tokenSession");
const id = localStorage.getItem("id");

export function getLocalUserData() {
  usuariosRequest(id, token);
}

/**
 * Borra los datos del usuario almacenados localmente.
 */
export function clearLocalUserData() {
  localStorage.removeItem("userData");
}

/**
 * Verifica si el usuario está autenticado (tiene un token almacenado localmente).
 * @returns {boolean} - true si el usuario está autenticado, false de lo contrario.
 */
export function isAuthenticated() {
  return !!token;
}
