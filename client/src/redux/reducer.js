import {
  ALL_GENRE,
  DETAIL_VIDEOGAMES,
  FILTER_GENRE,
  GET_VIDEOGAMES,
  RESET_FILTER_GENRES,
  RESET_ORDER,
  SEARCH_VIDEOGAMES,
  SET_PAGE,
  SORT_VIDEOGAMES_ASC_DESC,
  SORT_VIDEOGAMES_RATING,
} from "./actions/actions";

const initialState = {
  Videogames: [],
  VideogamesCopy: [],
  DetailGame: [],
  SearchGame: [], //estado name
  FilteredGenres: [],
  genres: [],
  numPage: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        Videogames: action.payload,
        VideogamesCopy: action.payload,
        DetailGame: []
      };
    case DETAIL_VIDEOGAMES:
      return {
        ...state,
        Videogames: action.payload,
      };
    case SEARCH_VIDEOGAMES:
      return {
        ...state,
        SearchGame: action.payload,
      };
    case ALL_GENRE:
      return {
        ...state,
        genres: action.payload,
      };

    case FILTER_GENRE:
      const VideogamesCopy = state.VideogamesCopy;
      // confirma que estén los juegos
      const gamesGenres =
        action.payload === "all"
          ? VideogamesCopy
          : VideogamesCopy.filter((game) =>
              game.genres.includes(action.payload)
            );
      return {
        ...state,
        Videogames: gamesGenres,
        numPage: 1,
      };
    
    case SORT_VIDEOGAMES_ASC_DESC:
      let videogamesSort = action.payload === "asc"
        ? state.Videogames.sort((a, b)=> {
          if (a.name > b.name) {
            return 1;
          }
          if (b.name > a.name) {
            return -1;
          }
          return 0;
        })
        : state.Videogames.sort((a, b)=> {
          if (a.name > b.name) {
            return -1;
          }
          if (b.name > a.name) {
            return 1;
          }
          return 0;
        })
      return {
        ...state, 
        Videogames: videogamesSort,
        numPage: 1,
      };

      case SORT_VIDEOGAMES_RATING:
        let videogamesSortRating = action.payload === "best"
          ? state.Videogames.sort((a, b)=> {
            if (a.rating > b.rating) {
              return -1;
            }
            if (b.rating > a.rating) {
              return 1;
            }
            return 0;
          })
          :
          state.Videogames.sort((a, b)=> {
            if (a.rating > b.rating) {
              return 1;
            }
            if (b.rating > a.rating) {
              return -1;
            }
            return 0;
          })
        return {
          ...state,
          Videogames: videogamesSortRating,
          numPage: 1,
        };

      case RESET_FILTER_GENRES:
        return {
          ...state,
          Videogames: state.VideogamesCopy
        }
      case RESET_ORDER:
        return {
          ...state,
          Videogames: [...state.VideogamesCopy]
        }

        case SET_PAGE:
          return {
            ...state,
            numPage: action.payload // seteo la pagina en 1
          }
    default:
      return { ...state };
  }
};

export default reducer;


// posible opción con el reseteo
/*     case SORT_VIDEOGAMES_ASC_DESC:
      let videogamesSort;
      if (action.payload === "asc") {
        videogamesSort = state.VideogamesCopy.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
          if (b.name > a.name) {
            return -1;
          }
          return 0;
        });
      } else if (action.payload === "desc") {
        videogamesSort = state.VideogamesCopy.sort((a, b) => {
          if (a.name > b.name) {
            return -1;
          }
          if (b.name > a.name) {
            return 1;
          }
          return 0;
        });
      } else if (action.payload === "alls")  {
        videogamesSort = state.VideogamesCopy;
      }
      return {
        ...state,
        VideogamesCopy: videogamesSort,
      }; */