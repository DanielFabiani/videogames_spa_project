
import { useDispatch, useSelector } from "react-redux";
import styles from "./GenderFilter.module.css";
import { filterGenre } from "../../redux/actions/actions";

const GenderFilter = () => {

  const filteredGenres = useSelector((state) => state.FilteredGenres);
  console.log(filteredGenres);

  const dispatch = useDispatch();

  const handleFilter = (event) => {
    const selectedGenre = event.target.value;
    dispatch(filterGenre(selectedGenre));
  };

  return (
    <div className={styles.genderFilterContainer}>
      <span>filter by genre</span>
      <select onChange={handleFilter}>
        <option value="all">all</option>
        {filteredGenres.map((genre) => (
          <option key={genre.id} value={genre.name}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenderFilter;
