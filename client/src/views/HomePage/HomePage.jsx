import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Cards from '../../components/cards/Cards';
import SearchBar from '../../components/searchBar/SearchBar';
import styles from './HomePage.module.css';
import { useEffect, useState } from 'react';
import { getVideogames, orderVideogamesAscDesc, orderVideogamesByRating } from '../../redux/actions/actions';
import GenderFilter from '../../components/genderFilter/GenderFilter';
import Pagination from '../../components/pagination/Pagination';


const HomePage = () => {
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const allVideogames = useSelector(state => state.Videogames);
  //estados locales para el paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(15);

  //obtener el indice del ultimo game
  const indexOfLastGame = currentPage * gamesPerPage;

  //obtener el indice del primer game
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;

  //obtener el corte de los games por pagina
  const currentGames = allVideogames.slice(indexOfFirstGame, indexOfLastGame);

  //paginado
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  useEffect(() => {
    dispatch(getVideogames())
  }, [dispatch])

// orden alfabético Asc y Desc
  const handleOrderAscDesc = (e) => {
    e.preventDefault();
    dispatch(orderVideogamesAscDesc(e.target.value))
    setAux(!aux);
  }
// orden por rating
  const handleOrderRating = (e) => {
    e.preventDefault();
    dispatch(orderVideogamesByRating(e.target.value))
    setAux(!aux);
  }
  //boton reseteo de filtros
/*   const handlerAll = (e)=> {
    e.preventDefault();
    dispatch(getVideogames())
  } */

  return (
    <div className={styles.homePageContainer}>

      <div className={styles.searchFilterContainer}>
        <SearchBar />
        <GenderFilter />
      </div>

      <div className={styles.orderContainer}>
        {/* orden alfabético */}
        <div className={styles.orderAscDesc}>
          <select onChange={(e)=> handleOrderAscDesc(e)}>
            <option value="default" >Select by order</option>
            <option value="asc" >Ascendent</option>
            <option value="desc">Descendent</option>
          </select>
        </div>

        {/* orden por rating */}
        <div className={styles.orderByRating}>
        <select onChange={(e)=> handleOrderRating(e)}>
            <option value="default" >Select by rating</option>
            <option value="best" >Best</option>
            <option value="worst">Worst</option>
          </select>
        </div>
      </div>
      {/* paginado */}
      <div className={styles.paginationContainer}>
        <Pagination 
          currentPage={currentPage} /* pagina actual */
          gamesPerPage={gamesPerPage} /* juegos por paginas */
          allVideogames={allVideogames.length} /* todos los juegos */
          paginate={paginate} /* función para paginar */
        />
      </div>
      <Cards />
    </div>
  )
};

export default HomePage;