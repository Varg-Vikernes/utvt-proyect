// Función para configurar una cookie de token
export function setTokenCookie(token) {
  setCookie("tokenSession", token, {
    secure: true,
    sameSite: "strict",
  });
}

// Función para obtener el token de la cookie
export function getTokenCookie() {
  return getCookie("tokenSession");
}

// Función para eliminar la cookie de token
export function deleteTokenCookie() {
  deleteCookie("tokenSession");
}
