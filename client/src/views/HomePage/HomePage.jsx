//import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Cards from '../../components/cards/Cards';
import SearchBar from '../../components/searchBar/SearchBar';
import styles from './HomePage.module.css';
import { useEffect } from 'react';
import { getVideogames } from '../../redux/actions/actions';
import GenderFilter from '../../components/genderFilter/GenderFilter';


const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogames())
  }, [dispatch])

  return (
    <div className={styles.homePageContainer}>
      <div className={styles.searchFilterContainer}>
        <SearchBar />
        <GenderFilter />
      </div>
      <Cards />
    </div>
  )
};

export default HomePage;