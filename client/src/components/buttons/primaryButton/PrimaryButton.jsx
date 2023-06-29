import styles from './PrimaryButton.module.css';

//paso el contenido del span como un children prop
const PrimaryButton = ({ children }) => {
  return (
    <button className={styles.primaryButton}>
      <span>{children}</span>
    </button>
  )
};

export default PrimaryButton;