import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import SavesCard from "../savesCard/savesCard";

function MoviesCardList({ isSavesMovies, movies }) {
  return (
    <>
      <div className="movie-card-list">
        {isSavesMovies ? (
          <SavesCard />
        ) : (
          <>
            {movies.map((movie) => (
              <MoviesCard
                key={movie.id}
                movie={movie}
              />
            ))}
          </>
        )}
      </div>
      <div className="movies-buttons">
        <button className="movies-buttons__button">Ещё</button>
      </div>
    </>
  );
}

export default MoviesCardList;
