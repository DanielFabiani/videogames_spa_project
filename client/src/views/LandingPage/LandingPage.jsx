import PrimaryButton from "../../components/buttons/primaryButton/PrimaryButton";
import styles from "./LandingPage.module.css";
//import backgroundLanding from "../LandingPage/GowLandingPage0.jpg"

const LandingPage = () => {
  return (
    <div className={styles.landingPageContainer}>

      <div className={styles.landingPageText}>
        <p>Welcome</p>
        <p>to the</p>
        <p>Videogames App</p>
      </div>

      <div className={styles.landingPageButton}>
        <PrimaryButton>Go to Home</PrimaryButton>
      </div>
      
      {/* <div className={styles.backgroundImage}>
        <img src={backgroundLanding} alt="" />
      </div> */}

    </div>
  );
};

export default LandingPage;
