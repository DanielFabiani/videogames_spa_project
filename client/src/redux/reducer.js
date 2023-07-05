import {
  ALL_GENRE,
  DETAIL_VIDEOGAMES,
  FILTER_GENRE,
  GET_VIDEOGAMES,
  SEARCH_VIDEOGAMES,
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
  AllVideogames: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        Videogames: action.payload,
        VideogamesCopy: action.payload,
      };
    case DETAIL_VIDEOGAMES:
      return {
        ...state,
        DetailGame: action.payload,
      };
    case SEARCH_VIDEOGAMES:
      return {
        ...state,
        Videogames: action.payload,
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
      //console.log(action.payload);
      return {
        ...state,
        Videogames: gamesGenres,
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
        Videogames: videogamesSort
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
          Videogames: videogamesSortRating

        };
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