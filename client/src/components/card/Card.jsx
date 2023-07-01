import React from 'react';
import styles from './Card.module.css';

const Card = (props) => {
  //const id = props.id;

  return (
    <div className={styles.cardContainer}>

      <div className={styles.cardImageContainer}>
        <img src={props.image} alt="" />
      </div>

      <div className={styles.cardTitle}>
        <h3>{props.name}</h3>
      </div>

      <div className={styles.cardInfo}>
        <p>Genres: {props.genres.join(' | ')}</p>
        <p>Rating: {props.rating}</p>
      </div>

    </div>
  )
};

export default Card;