

import React from "react";
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies }) {
console.log(movies)
  return (
    <>
      <div className="movie-card-list">
        { movies.length === 0 ? <div className="movie-card-list__error">Ничего не найдено</div>:
          movies.map((movie) => (
            <MoviesCard
              key={movie.id}
              movie={movie}
          
            />
          ))
        }
      </div>
      {
        movies.length === 0 ? <></> :
      <div className="movies-buttons">
        <button className="movies-buttons__button">Ещё</button>
      </div>
      }
    </>
  );
};

export default MoviesCardList;