// Función para guardar información adicional localmente
export function saveLocalData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// Función para obtener información adicional localmente
export function getLocalData(key) {
  const storedData = localStorage.getItem(key);
  if (storedData) {
    return JSON.parse(storedData);
  }
  return null;
}
