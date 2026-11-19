// URL del endpoint de hamburguesas proporcionado por la API REST
const API_URL = "https://free-food-menus-api-two.vercel.app/burgers";

// Función asíncrona exportable programada por Ashly para obtener los datos
export async function obtenerHamburguesas() {
  try {
    // fetch realiza la petición HTTP GET al servidor remoto de la API
    const respuesta = await fetch(API_URL);
    
    // .json() convierte la respuesta cruda del servidor en un objeto JSON manipulable por JS
    const datos = await respuesta.json();
    
    // Retornamos la lista de hamburguesas obtenida
    return datos;
  } catch (error) {
    // Capturamos cualquier error de conexión para que la app no falle
    console.error("Error al consumir la API de hamburguesas:", error);
    return [];
  }
}
