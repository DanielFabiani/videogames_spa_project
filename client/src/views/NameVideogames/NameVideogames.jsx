import { useSelector } from "react-redux";
import styles from "./NameVideogames.module.css";
import Card from "../../components/card/Card";


const NameVideogames = (props) => {
  
  const searchVideogame = useSelector((state) => state.Videogames);
  
  return (
    <div className={styles.nameGameContainer}>
      {
        searchVideogame.map((game) => {
          return (
            <Card 
              key={game.id}
              id={game.id}
              name={game.name}
              platforms={game.platforms}
              image={game.image}
              released={game.released}
              rating={game.rating}
              genres={game.genres}
            />
          )
        })
      }
    </div>
  )
};

export default NameVideogames;