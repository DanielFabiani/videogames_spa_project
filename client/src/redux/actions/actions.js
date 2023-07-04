import axios from 'axios';

export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const DETAIL_VIDEOGAMES = 'DETAIL_VIDEOGAMES';
export const SEARCH_VIDEOGAMES = 'SEARCH_VIDEOGAMES';
export const FILTER_GENRE = 'FILTER_GENRE';
export const ALL_GENRE = 'ALL_GENRE';
export const SORT_VIDEOGAMES_ASC_DESC = 'SORT_VIDEOGAMES_ASC_DESC';
export const SORT_VIDEOGAMES_RATING = 'SORT_VIDEOGAMES_RATING';

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
    const Videogames = apiData.data; 
    dispatch({
      type: SEARCH_VIDEOGAMES,
      payload: Videogames,
    })
  }
};

// filtro por genero
export const filterGenre = (payload) => {
  return{
    type: FILTER_GENRE,
    payload
  }
}
export const AllGenres = () => {
  return async (dispatch) => {
    try {
      const apiData = await axios.get('http://localhost:3001/genres');
      const genres = apiData.data;
      dispatch({
        type: ALL_GENRE,
        payload: genres,
      })
    } catch (error) {
      console.log(error.message);
    }
  }
}

// ordenamiento de juegos alfabético
export const orderVideogamesAscDesc = (payload) => {
  return {
    type: SORT_VIDEOGAMES_ASC_DESC,
    payload
  }
}

// ordenamiento de juegos por rating
export const orderVideogamesByRating = (payload) => {
  return {
    type: SORT_VIDEOGAMES_RATING,
    payload
  }
}

