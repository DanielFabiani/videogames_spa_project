import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';
import SecondaryButton from '../buttons/secondaryButton/SecondaryButton';



const NavBar = ()=> {
  return (
    <div className={styles.NavBarContainer}>
      <h2>Welcome</h2>
      <SecondaryButton>
        <NavLink to="/home">Home</NavLink>
      </SecondaryButton>
    </div>
  )
};

export default NavBar;