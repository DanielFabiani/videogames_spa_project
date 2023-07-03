import styles from './SecondaryButton.module.css';

//paso el contenido del span como un children prop
const SecondaryButton = ({ children }) => {
  return (
    <button type='submit' className={styles.secondaryButton}>
      <span>{children}</span>
    </button>
  )
};

export default SecondaryButton;