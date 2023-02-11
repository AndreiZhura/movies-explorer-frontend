

import React from "react";
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies }) {





  return (
    <>
      <div className="movie-card-list">
        {
          movies.map((movie) => (
            <MoviesCard
              key={movie.id}
              movie={movie}
          
            />
          ))
        }
      </div>
      <div className="movies-buttons">
        <button className="movies-buttons__button">Ещё</button>
      </div>
    </>
  );
};

export default MoviesCardList;