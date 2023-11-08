export const savePublicationsLocally = (data) => {
    localStorage.setItem('publicationData', JSON.stringify(data));
  };
  
  export const getPublicationsLocally = () => {
    const localData = localStorage.getItem('publicationData');
    return localData ? JSON.parse(localData) : null;
  };
  