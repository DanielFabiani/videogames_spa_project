import axios from 'axios';

export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';

// conexión par traer todas las cartas 
export const getVideogames = () => {
  return async (dispatch) => {
  //conectamos con la ruta de mi back-end
    const apiData = await axios.get('http://localhost:3001/videogames');
    const Videogames = apiData.data;
    dispatch({
      type: GET_VIDEOGAMES,
      payload: Videogames,
    });
  }
}