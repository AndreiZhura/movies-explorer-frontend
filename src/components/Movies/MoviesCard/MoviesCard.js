import React from "react";
import './MoviesCard.css'




function MoviesCard(props) {

  return (
    <article className="movies">
      <h4 className="movies__title">{props.movie.nameRU}</h4>
      <p className="movies__time">{props.movie.duration} минут</p>
      <img src={`https://api.nomoreparties.co/${props.movie.image.formats.thumbnail.url}`} alt="фильм" className="movies__img" />
      <button className={props.isSavedMovies ? "movies__button movies__button_hidden" : "movies__button movies__button_visible"}></button>
      <button className={props.isMoviesStars ? "movies__button-stars movies__button-stars_hidden" : "movies__button-stars movies__button-stars_visible"}></button>
    </article>
  );
}

export default MoviesCard;
