import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Detail.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { detailVideogames } from '../../redux/actions/actions';

const Detail = () => {
  const { id }= useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailVideogames(id));
  }, [dispatch, id]);

  const DetailGame = useSelector((state) => state.DetailGame)

  return (
    <div className={styles.detailContainer}>

      <div className={styles.detailImage}>
        <img src={DetailGame.image} alt="" />
      </div>

      <div className={styles.detailInfo}>
        <h1>{DetailGame.name}</h1>
        <h3>Description: </h3>
        <p>{DetailGame.description}</p>
        <p>{DetailGame.platforms.join(' | ')}</p>
        <p>{DetailGame.released}</p>
        <p>{DetailGame.website}</p>
        <p>{DetailGame.rating}</p>
        <p>{DetailGame.genres.join(' | ')}</p>
      </div>

    </div>
  )
};

export default Detail;