const config = {
    // Backend server URL — comes from .env file
    apiBaseUrl: import.meta.env.VITE_API_BASE_URL,
  
    // Helpful full paths built from the base URL
    restaurantsUrl: `${import.meta.env.VITE_API_BASE_URL}/restaurants`,
    dishesUrl: `${import.meta.env.VITE_API_BASE_URL}/dishes`,
  };
  
  export default config;