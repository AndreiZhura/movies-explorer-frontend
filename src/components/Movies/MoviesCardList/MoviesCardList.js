import React from "react";
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";
import SavesCard from "../savesCard/savesCard";

function MoviesCardList(props) {
  return (
    <>
      <div className="movie-card-list">
       {props.isSavesMovies ? <SavesCard /> : <MoviesCard />}
      </div>
      <div className="movies-buttons">
        <button className="movies-buttons__button">Ещё</button>
      </div>
    </>
  );
};

export default MoviesCardList;