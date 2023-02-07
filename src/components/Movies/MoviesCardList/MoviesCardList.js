import React, { useEffect, useMemo, useState } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import SavesCard from "../savesCard/savesCard";

function MoviesCardList({ isSavesMovies, movies }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [amountMovies , setAmountMovies]  = useState(0);


  useEffect(() => {
    if (width > 1279) {
      setAmountMovies(8);
    }
    else if (width > 767) {
      setAmountMovies(2+3);
    }
   else if (width > 319) {
      setAmountMovies(3);
    }
  },[])

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
