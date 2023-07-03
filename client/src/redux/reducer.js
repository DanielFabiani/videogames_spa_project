import { DETAIL_VIDEOGAMES, GET_VIDEOGAMES, SEARCH_VIDEOGAMES } from "./actions/actions";

const initialState = {
  Videogames: [],
  DetailGame: [],
  SearchGame: [], //estado name
  AllVideogames: [],
  Genres: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        Videogames: action.payload,
      }
    case DETAIL_VIDEOGAMES:
      return {
        ...state,
        DetailGame: action.payload,
      }
    case SEARCH_VIDEOGAMES:
      return {
        ...state,
        SearchGame: action.payload,
      }
    default:
    //copia del estado
      return { ...state };
  }
};

export default reducer;