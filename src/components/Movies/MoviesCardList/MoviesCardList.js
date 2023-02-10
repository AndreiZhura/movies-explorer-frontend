

import React from "react";
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({movies}) {

  console.log(movies)


  return (
    <>
      <div className="movie-card-list">
        
        <MoviesCard
           movies = {movies}
        />
      </div>
      <div className="movies-buttons">
        <button className="movies-buttons__button">Ещё</button>
      </div>
    </>
  );
};

export default MoviesCardList;