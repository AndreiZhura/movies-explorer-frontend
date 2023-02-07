import React, { useEffect, useState } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import SavesCard from "../savesCard/savesCard";

function MoviesCardList({ isSavesMovies, movies }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [amountMovies , setAmountMovies]  = useState(0);

  useEffect(() => {
    if (width > 1280) {
      setAmountMovies(12);
    }
   else if (width > 767) {
      setAmountMovies(2);
      console.log(window.innerWidth)
    }
   else if (width > 320) {
    
      setAmountMovies(3);
    }
  }, [window.innerWidth])

  return (
    <>
      <div className="movie-card-list">
        {isSavesMovies ? (
          <SavesCard />
        ) : (
          <>
            {movies.slice(1,amountMovies).map((movie) => (
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
