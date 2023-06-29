import SecondaryButton from '../buttons/secondaryButton/SecondaryButton';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <div className={styles.searchBarContainer}>
      <input type="search" placeholder="Insert game name" />

      <SecondaryButton>
        Find game
      </SecondaryButton>
    </div>
  )
};

export default SearchBar;