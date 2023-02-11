

import React, { useEffect, useState } from "react";
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies }) {


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
      setCounter(12)
    }
    else if (width > 767) {
      setCounter(9);
    }
    else if (width > 319) {
      setCounter(6);
    }
  }, []);

const filter = movies.slice(0, counter)


  return (
    <>
      <div className="movie-card-list">
        { movies.length === 0 ? <div className="movie-card-list__error">Ничего не найдено</div>:
          filter.map((movie) => (
            <MoviesCard
              key={movie.id}
              movie={movie}
          
            />
          ))
        }
      </div>
      {
        movies.length === 0 ? <></> : counter >= movies.length ? <></>:
      <div className="movies-buttons">
        <button className="movies-buttons__button" onClick={count}>Ещё</button>
      </div>
      }
    </>
  );
};

export default MoviesCardList;