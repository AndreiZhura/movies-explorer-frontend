import React, { useEffect, useState } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import SavesCard from "../savesCard/savesCard";

function MoviesCardList({ isSavesMovies, movies, check }) {
  // eslint-disable-next-line no-unused-vars
  const [width, setWidth] = useState(window.innerWidth);
  const [counter, setCounter] = useState(0);


  window.addEventListener('resize', function () {
    if (width <= 1280 || width > 1280) {
      setCounter(3)
    }
    else if (width <= 769) {
      setCounter(6);
    }
    else if (width <= 321) {
      setCounter(6);
    }

  })

  function count() {
    if (width <= 1280 || width > 1280) {
      setCounter(counter + 3)
    }
    else if (width <= 769) {
      setCounter(counter + 2)
    }
    else if (width <= 321) {
      setCounter(counter + 1);
    }
  }

  useEffect(() => {
    if (width <= 1280 || width > 1280) {
      setCounter(13)
    }
    else if (width <= 769) {
      setCounter(9);
    }
    else if (width <= 321) {
      setCounter(6);
    }

  }, [width])

  return (
    <>
      <div className="movie-card-list">
        {isSavesMovies ? (
          <SavesCard />
        ) : (
          <>
            {
              check ? (movies.filter(movie => movie.duration < 40).slice(1, counter).map((movie) => (
                <MoviesCard
                  key={movie.id}
                  movie={movie}
                />
              ))) : (
                movies.slice(1, counter).map((movie) => (
                  <MoviesCard
                    key={movie.id}
                    movie={movie}
                  />
                ))
              )
            };
          </>
        )}
      </div>
      <div className="movies-buttons">
        {counter >= movies.length || check ?
          (<button className="movies-buttons__button movies-buttons__button_hidden" onClick={count}>Ещё</button>)
          :
          (<button className="movies-buttons__button" onClick={count}>Ещё</button>)}

      </div>
    </>
  );
}

export default MoviesCardList;
