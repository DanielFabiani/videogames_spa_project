import { DETAIL_VIDEOGAMES, FILTER_GENRE, GET_VIDEOGAMES, SEARCH_VIDEOGAMES } from "./actions/actions";

const initialState = {
  Videogames: [],
  VideogamesCopy: [],
  DetailGame: [],
  SearchGame: [], //estado name
  FilteredGenres: [],
  Genres: [],
  AllVideogames: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        Videogames: action.payload,
        VideogamesCopy: action.payload,
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
      case FILTER_GENRE: {
        const filterGenres = state.VideogamesCopy.filter((game) =>
          game.genres.includes(action.payload)
        );
        return {
          ...state,
          FilteredGenres: filterGenres,
        };
      }
    default:
      return { ...state };
  }
};

export default reducer;