import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../card/Card';

const Cards = () => {
  // se fija el estado global de Videogames
  const Videogames = useSelector(state => state.Videogames)
  return (
    <div>
      {
        Videogames.map((game) => {
          return (
            // se mapea cada uno de los juegos para mostrarlos en el componente Card
            <Card 
              key={game.id}
              id={game.id}
              name={game.name}
              /* genres={game.genres.map((gen) => gen.name)} */
              image={game.image}
              /* platforms={game.platforms.map((platform) => platform.name)} */
              rating={game.rating}
          />)
        })
      }
    </div>
  )
}

export default Cards;