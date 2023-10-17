// roleUtils.js

/**
 * Verifica si un usuario tiene un rol específico.
 * @param {string} role - El rol que se va a verificar.
 * @param {Object} user - Los datos del usuario.
 * @returns {boolean} - true si el usuario tiene el rol especificado, false de lo contrario.
 */
export function hasRole(user, role) {
  if (user && user.rol) {
    return user.rol === role;
  }
  return false;
}

/**
 * Verifica si un usuario es administrador.
 * @param {Object} user - Los datos del usuario.
 * @returns {boolean} - true si el usuario es administrador, false de lo contrario.
 */
export function isAdmin(user) {
  return hasRole(user, "administrador");
}

/**
 * Verifica si un usuario es un usuario estándar.
 * @param {Object} user - Los datos del usuario.
 * @returns {boolean} - true si el usuario es un usuario estándar, false de lo contrario.
 */
export function isUser(user) {
  return hasRole(user, "usuario");
}
