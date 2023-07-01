//import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Cards from '../../components/cards/Cards';
import SearchBar from '../../components/searchBar/SearchBar';
import styles from './HomePage.module.css';
import { useEffect } from 'react';
import { getVideogames } from '../../redux/actions/actions';
//import Card from '../../components/card/Card';

const HomePage = () => {
  const dispatch = useDispatch();
  /* const games = useSelector(state => state.Videogames) */

  useEffect(() => {
    dispatch(getVideogames())
  }, [dispatch])

  return (
    <div className={styles.homePageContainer}>
      <SearchBar />
      <Cards />
      <h1>home</h1>
    </div>
  )
};

export default HomePage;