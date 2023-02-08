import React, { useEffect, useState } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import SavesCard from "../savesCard/savesCard";

function MoviesCardList({ isSavesMovies, movies }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [counter, setCounter] = useState(0);

  function count() {
    if (width > 1279) {
      setCounter(counter + 3)
    }
    else if (width > 767) {
      setCounter(counter + 2)
    }
    else if (width > 319) {
      setCounter(counter + 1);
    }
  }

  useEffect(() => {
    if (width > 1279) {
      setCounter(13)
    }
    else if (width > 767) {
      setCounter(9);
    }
    else if (width > 319) {
      setCounter(6);
    }
  }, [])

  return (
    <>
      <div className="movie-card-list">
        {isSavesMovies ? (
          <SavesCard />
        ) : (
          <>
            {movies.slice(1, counter).map((movie) => (
              <MoviesCard
                key={movie.id}
                movie={movie}
              />
            ))}
          </>
        )}
      </div>
      <div className="movies-buttons">
        {counter >= movies.length ?
          (<button className="movies-buttons__button movies-buttons__button_hidden" onClick={count}>ещё</button>)
          :
          (<button className="movies-buttons__button" onClick={count}>ещё</button>)}

      </div>
    </>
  );
}

export default MoviesCardList;
