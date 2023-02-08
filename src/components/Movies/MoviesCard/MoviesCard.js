import React from "react";
import './MoviesCard.css'





function MoviesCard(props) {
  return (
    <a href={props.movie.trailerLink} target="_blank" className="movies" rel="noreferrer">
      <h4 className="movies__title">{props.movie.nameRU}</h4>
      <p className="movies__time">{props.movie.duration} минут</p>
      <img src={`https://api.nomoreparties.co/${props.movie.image.formats.thumbnail.url}`} alt="фильм" className="movies__img" />
      <button className="movies__button-stars"></button>
    </a>
  );
}

export default MoviesCard;
