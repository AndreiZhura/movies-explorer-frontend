import React from "react";
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
  movies,
  isMoviesStars,
  isSavedMovies,
}) {
  return (
    <>
      <div className="movie-card-list">
        {movies.map((movie)=>(
        <MoviesCard
          key = { movie.id }
          movie = { movie } 
          isMoviesStars={isMoviesStars}
          isSavedMovies={isSavedMovies}
        />
        ))}
    
      </div>
      <div className="movies-buttons">
        <button className="movies-buttons__button">Ещё</button>
      </div>
    </>
  );
};

export default MoviesCardList;