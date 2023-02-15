import React from "react";
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";


function MoviesCardList({ movies, counter, count,  onMovieLike, savesMovies, onMovieDisLike }) {

  const filter = movies.slice(0, counter)

  return (
    <>
      <div className="movie-card-list">
     {
            movies.length === 0 ? <div className="movie-card-list__error">Ничего не найдено</div> :
              filter.map((movie) => (
                <MoviesCard
                  key={movie.id}
                  movie={movie}
                  onMovieLike={onMovieLike}
                  savesMovies = {savesMovies}
                  onMovieDisLike={onMovieDisLike}
                />
              ))
        }
      </div>
      {
        movies.length === 0 ? <></> : counter >= movies.length ? <></> :
          <div className="movies-buttons">
            <button className="movies-buttons__button" onClick={count}>Ещё</button>
          </div>
      }
    </>
  );
};

export default MoviesCardList;