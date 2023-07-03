import { useState } from 'react';
import styles from './SearchBar.module.css';
import { useDispatch } from 'react-redux';
import { searchVideogames } from '../../redux/actions/actions';
import { useNavigate } from 'react-router-dom';


const SearchBar = (props) => {
  const dispatch = useDispatch()
  const [name, setName] = useState('');
  const navigate = useNavigate()

  //guardo el estado de lo que me pasan por input
  const handleInputChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  }
  
  const handleSubmitSearch = (event) => {
    event.preventDefault();
    dispatch(searchVideogames(name))
    setName('')
    navigate(`/name`)
  }
  
  return (
    <div className={styles.searchBarContainer}>

      <input onChange={handleInputChange} 
        type="search" 
        placeholder="Insert game name"
        value={name}
      />
      <button 
        className={styles.searchButton}
        type="submit" 
        onClick={handleSubmitSearch}
      >
        <span>Find game</span>
      </button>

    </div>
  )
};

export default SearchBar;