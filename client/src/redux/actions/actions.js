import axios from 'axios';

export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const DETAIL_VIDEOGAMES = 'DETAIL_VIDEOGAMES';
export const SEARCH_VIDEOGAMES = 'SEARCH_VIDEOGAMES';

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
};

// traigo el detalle de la carta seleccionada por su id
export const detailVideogames = (id) => {
  return async (dispatch) => {
    const apiData = await axios.get(`http://localhost:3001/videogames/${id}`);
    const DetailGame = apiData.data;
    dispatch({
      type: DETAIL_VIDEOGAMES,
      payload: DetailGame,
    });
  }
};

// traigo las cartas que coincidan con el nombre ingresado
export const searchVideogames = (name) => {
  return async (dispatch) => {
    const apiData = await axios.get(`http://localhost:3001/videogames/name?name=${name}`);
    const SearchGame = apiData.data; dispatch({
      type: SEARCH_VIDEOGAMES,
      payload: SearchGame,
    })
  }
};

