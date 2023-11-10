// gcpRequest.js

export const uploadImage = async (carpeta, fileName, id, imageFile) => {
    try {
      const serverURL = `http://backend-proyecto-api-production.up.railway.app/admin/${carpeta}`;
  
      const formData = new FormData();
      formData.append('fileName', fileName);
      
      formData.append('id', id);
      formData.append('file', imageFile);
  
      const response = await fetch(serverURL, {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error(`Solicitud de carga de imagen fallida con código de estado: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log('Información del servidor:', responseData);
      return responseData;
    } catch (error) {
      throw error;
    }
  };
  
  export const updateImage = async (carpeta, fileName, makePublic, id, imageFile) => {
    try {
      const serverURL = `http://backend-proyecto-api-production.up.railway.app/admin/${carpeta}`;
  
      const formData = new FormData();
      formData.append('fileName', fileName);
      formData.append('makePublic', makePublic);
      formData.append('id', id);
      formData.append('file', imageFile);
  
      const response = await fetch(serverURL, {
        method: 'PUT',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error(`Solicitud de carga de imagen fallida con código de estado: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log('Información del servidor:', responseData);
      return responseData;
  
    } catch (error) {
      throw error;
    }
  };
  
  export const deleteImage = async (carpeta, id) => {
    try {
      const serverURL = `http://backend-proyecto-api-production.up.railway.app/admin/${carpeta}`;
  
      const response = await fetch(`${serverURL}?id=${id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error(`Solicitud de eliminación de imagen fallida con código de estado: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log('Información del servidor:', responseData);
      return responseData;
    } catch (error) {
      throw error;
    }
  };
  
  export const getImage = async (carpeta, id) => {
    try {
      const serverURL = `http://backend-proyecto-api-production.up.railway.app/admin/${carpeta}?id=${id}`;
  
      const response = await fetch(serverURL, {
        method: 'GET',
      });
  
      if (!response.ok) {
        throw new Error(`Solicitud de obtención de imagen fallida con código de estado: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log('Información del servidor:', responseData);
      return responseData;
    } catch (error) {
      throw error;
    }
  };
  