import React from 'react';

const Card = (props) => {
  const id = props.id;

  return (
    <div>
      <p>Name: {props.name}</p>
      <img src={props.image} alt="" />
      {/* <p>Genres: {props.genres}</p> */}
      <p>Rating: {props.rating}</p>
    </div>
  )
};

export default Card;