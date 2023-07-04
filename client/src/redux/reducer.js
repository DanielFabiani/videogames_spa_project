import { ALL_GENRE, DETAIL_VIDEOGAMES, FILTER_GENRE, GET_VIDEOGAMES, SEARCH_VIDEOGAMES } from "./actions/actions";

const initialState = {
  Videogames: [],
  VideogamesCopy: [],
  DetailGame: [],
  SearchGame: [], //estado name
  FilteredGenres: [],
  genres: [],
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
    case ALL_GENRE:
      return {
        ...state,
        genres: action.payload,
      }
    case FILTER_GENRE: 
      const VideogamesCopy = state.VideogamesCopy;
      // confirma que estén los juegos
      const gamesGenres = action.payload === "all"
        ? VideogamesCopy 
        : VideogamesCopy.filter(game => game.genres.includes(action.payload))
        console.log(action.payload)
      return {
        ...state,
        Videogames: gamesGenres,
      };    
    default:
      return { ...state };
  }
};

export default reducer;