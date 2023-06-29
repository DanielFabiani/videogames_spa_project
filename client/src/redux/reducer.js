import { GET_VIDEOGAMES } from "./actions/actions";

const initialState = {
  Videogames: [],
  allVideogames: [],
  genres: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        Videogames: action.payload,
      }
    default:
    //copia del estado
      return { ...state };
  }
}

export default reducer;