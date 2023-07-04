
import { useDispatch, useSelector } from "react-redux";
import styles from "./GenderFilter.module.css";
import { AllGenres, filterGenre, getVideogames } from "../../redux/actions/actions";
import { useEffect } from "react";


const GenderFilter = () => {

  const genres = useSelector(state => state.genres);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(AllGenres())
  }, [dispatch])

  useEffect(()=>{
    dispatch(getVideogames())
  }, [dispatch])

  const handleFilter = (event) => {
    dispatch(filterGenre(event.target.value));
  };

  return (
    <div className={styles.genderFilterContainer}>
      <span>Filter by Genre</span>

      <select onChange={(e)=> handleFilter(e)} defaultValue='default'>

        <option value="default" disabled >All</option>
        {
          genres?.map((genre) => (
            <option key={genre.name} value={genre.name}>
              {genre.name}
            </option>
        ))
        }

      </select>
    </div>
  );
};

export default GenderFilter;
