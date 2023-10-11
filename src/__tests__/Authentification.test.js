import { isUserAuthenticated } from '../page/Auth/isUserAuthenticated';
import fetchMock from 'jest-fetch-mock';

// Habilita el mock de fetch para simular llamadas a la API
fetchMock.enableMocks();

// Prueba 1: isUserAuthenticated devuelve true si la autenticación es exitosa
test('isUserAuthenticated devuelve true si la autenticación es exitosa', async () => {
  // Simula una respuesta exitosa de la API
  fetchMock.mockResponseOnce(JSON.stringify({}), { status: 200 });

  // Llama a la función isUserAuthenticated
  const result = await isUserAuthenticated();

  // Comprueba si la función devuelve true
  expect(result).toBe(true);
});

// Prueba 2: isUserAuthenticated redirige a la página de inicio de sesión si el token es inválido
test('isUserAuthenticated redirige a la página de inicio de sesión si el token es inválido', async () => {
  // Simula una respuesta de la API con un error de token inválido
  fetchMock.mockResponseOnce(JSON.stringify({ error: 'Token inválido o caducado' }, { status: 401 }));

  // Configura una función `navigate` para rastrear las redirecciones
  const navigate = jest.fn();
  globalThis.navigate = navigate;

  // Llama a la función isUserAuthenticated
  await isUserAuthenticated();

  // Verifica que la función `navigate` haya sido llamada con la URL de inicio de sesión
  expect(navigate).toHaveBeenCalledWith('/login');
});
