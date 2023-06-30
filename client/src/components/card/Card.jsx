import React from 'react';

const Card = (props) => {
  //const id = props.id;

  return (
    <div>
      <img src={props.image} alt="" />
      <p>Name: {props.name}</p>
      <p>Genres: {props.genres.join(' | ')}</p>
      {/* <p>Rating: {props.rating}</p> */}
    </div>
  )
};

export default Card;