import React from "react";
import '../MoviesCard/MoviesCard.css'
import movie from '../../../images/movie.svg'



function SavesCard(props) {
  return (
    <article className="movies">
      <h4 className="movies__title">33 слова о дизайне</h4>
      <p className="movies__time">1ч 47м</p>
      <img src={movie} alt="фильм" className="movies__img" />
      <button className= "movies__button movies__button_visible"></button>
    </article>
  );
}

export default SavesCard;
