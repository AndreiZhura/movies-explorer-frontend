import React from "react";
import '../MoviesCard/MoviesCard.css'
import movie from '../../../images/movie.svg'



function SavesCard({moviesUser}) {


  return (
    <div className="movies">
      <a className="movies__link" href={moviesUser} target="_blank">
          <h4 className="movies__title">{moviesUser}</h4>
          <p className="movies__time">{moviesUser} минут</p>
          <img src={moviesUser} alt="фильм" className="movies__img" />
        </a>
      <button className= "movies__button movies__button_visible"></button>
    </div>
  );
}

export default SavesCard;
