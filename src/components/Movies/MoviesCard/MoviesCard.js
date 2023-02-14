import React from "react";
import './MoviesCard.css'
import { useState, useEffect } from "react";





function MoviesCard({ movie, onMovieLike, onMovieDisLike ,savesMovies }) {

  const [clickButton, setClickButton] = useState(false);

  useEffect(() => {
    if (savesMovies.some((save) => save.movieId === movie.id)) {
      setClickButton(true);
    }
  }, []);

const handleChangeLike = () => {
      if(clickButton){
        onMovieDisLike(movie)
        setClickButton(false);
      }
      else{
        onMovieLike(movie)
        setClickButton(true);
      }
}

  return (
    <>
      <div className="movies" rel="noreferrer">
        <a className="movies__link" href={movie.trailerLink} target="_blank">
          <h4 className="movies__title">{movie.nameRU}</h4>
          <p className="movies__time">{movie.duration}минут</p>
          <img src={`https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`} alt="фильм" className="movies__img" />
        </a>
        <button className={clickButton ? "movies__button-stars movies__button-stars_green" : "movies__button-stars"} onClick={handleChangeLike}></button>
      </div>
    </>
  );
}

export default MoviesCard;