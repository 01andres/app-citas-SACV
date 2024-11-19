//export const URL_API = 'http://www.saludanimalcitas2024.somee.com/api';

//export const URL_API = process.env.URL_API || 'http://www.saludanimalcitas2024.somee.com/api';

const DEFAULT_API_URL = 'http://localhost:3000/api'; // Fallback para desarrollo local

export const URL_API = typeof import.meta.env !== 'undefined' && import.meta.env.VITE_API_URL
  ? import.meta.env.VITE_API_URL
  : DEFAULT_API_URL;



//