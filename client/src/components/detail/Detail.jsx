import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Detail.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { detailVideogames } from '../../redux/actions/actions';
import Loading from '../loading/Loading';

const Detail = () => {
  const { id }= useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailVideogames(id));
  }, [dispatch, id]);

  const DetailGame = useSelector((state) => state.DetailGame)

  const platforms = DetailGame.platforms;
  const genres = DetailGame.genres;
  

  return (
    <>
      {
        DetailGame.name ? (
          <div className={styles.detailContainer}>
            <div className={styles.detailImage}>
              <h1>{DetailGame.name}</h1>
              <img src={DetailGame.image} alt="juego" />
              <h3>Platforms: </h3>
              <p>{platforms}</p>
              <p>Released:  {DetailGame.released}</p>
              <a href={DetailGame.website}>Website</a>
            </div>
      
            <div className={styles.detailInfo}>
              <h3>Description: </h3>
              <p>{DetailGame.description}</p>
              <p>Rating: {DetailGame.rating}</p>
              <p>Genero: {genres}</p>
              
            </div>
          </div>
        ) : (
          <Loading />
        )
      }
    </>
  )
};

export default Detail;
