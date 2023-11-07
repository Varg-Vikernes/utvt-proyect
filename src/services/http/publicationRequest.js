// src/services/publicationRequest.js

export const fetchPublications = async () => {
  try {
    const response = await fetch(
      `https://backend-proyecto-api-production.up.railway.app/publicaciones`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Solicitud de publicaciones fallida con código de estado: ${response.status}`);
    }

    const publicationData = await response.json();

    // Almacena los datos de las publicaciones de manera local
    localStorage.setItem('publicationData', JSON.stringify(publicationData));

    return publicationData;
  } catch (error) {
    throw error;
  }
};
