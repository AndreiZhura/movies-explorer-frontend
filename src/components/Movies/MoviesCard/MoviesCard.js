import React from "react";
import './MoviesCard.css'
import { useState } from "react";




function MoviesCard(props) {

  const [clickButton, setClickButton] = useState(false)

  function buttonClick() {
    setClickButton(!clickButton)
    props.onCardSave(props.movie)
  }
  
  console.log(props)

  return (
    <>
    <div  className="movies" rel="noreferrer">
      <a className="movies__link" href={props.movie.trailerLink} target="_blank">
      <h4 className="movies__title">{props.movie.nameRU}</h4>
      <p className="movies__time">{props.movie.duration} минут</p>
      <img src={`https://api.nomoreparties.co/${props.movie.image.formats.thumbnail.url}`} alt="фильм" className="movies__img" />
      </a>
      <button className={clickButton ? "movies__button-stars movies__button-stars_green" : "movies__button-stars"} onClick = {buttonClick}></button>
    </div>
    </>
  );
}

export default MoviesCard;
