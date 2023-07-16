import React from 'react';
import styles from './Card.module.css';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
  const id = props.id;

  return (
    <div className={styles.cardContainer}>

      <div className={styles.cardImageContainer}>
        <img src={props.image} alt='' />
      </div>

      <div className={styles.cardTitle}>
        <NavLink to={`/detail/${id}`}>
          <h3>{props.name}</h3>
        </NavLink>
      </div>

      <div className={styles.cardInfo}>
        <p>Genres: {props.genres}</p>
        <p>Rating: {props.rating}</p>
      </div>

    </div>
  )
};

export default Card;