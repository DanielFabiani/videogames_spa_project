import styles from './SecondaryButton.module.css';

//paso el contenido del span como un children prop
const SecondaryButton = ({ children, onClick }) => {
  return (
    <button className={styles.secondaryButton} onClick={onClick}>
      <span>{children}</span>
    </button>
  )
};

export default SecondaryButton;