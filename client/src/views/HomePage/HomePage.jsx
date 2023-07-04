//import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Cards from '../../components/cards/Cards';
import SearchBar from '../../components/searchBar/SearchBar';
import styles from './HomePage.module.css';
import { useEffect, useState } from 'react';
import { getVideogames, orderVideogamesAscDesc, orderVideogamesByRating } from '../../redux/actions/actions';
import GenderFilter from '../../components/genderFilter/GenderFilter';


const HomePage = () => {
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

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

      <Cards />
    </div>
  )
};

export default HomePage;