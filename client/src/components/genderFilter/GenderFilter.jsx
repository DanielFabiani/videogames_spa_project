
import { useDispatch, useSelector } from "react-redux";
import styles from "./GenderFilter.module.css";
//import Card from "../card/Card";
import { AllGenres, filterGenre, getVideogames } from "../../redux/actions/actions";
import { useEffect } from "react";



const GenderFilter = () => {

  const genres = useSelector(state => state.genres);
  console.log(genres);

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
      <span>filter by genre</span>

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
      {/* <div>
        {
          Videogames.map((genre) => {
            return (
              <Card
                key={genre.id}
                id={genre.id}
                image={genre.image}
                name={genre.name}
                platforms={genre.platforms}
                released={genre.released}
                rating={genre.rating}
                genres
              />
            )
          })
        }
      </div> */}
    </div>
  );
};

export default GenderFilter;
