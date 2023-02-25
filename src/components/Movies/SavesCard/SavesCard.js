import React from "react";
import '../MoviesCard/MoviesCard.css'
import { useState, useEffect } from "react";

function SavesCard({ saves, onMovieDisLike }) {
  const [hourTrue, setHourTrue] = useState(false);
  const hours = Math.floor(saves.duration / 60);
  const minets = Math.floor(saves.duration - hours * 60);

  const haveHour = (hours) =>{
     if(hours !== 0){
      setHourTrue(true)
     }
     else{
      setHourTrue(false)
     }
  }

  useEffect(()=>{
    haveHour(hours)
  },[saves.duration])

  
  const handleDeleteMovies = () => {
    onMovieDisLike(saves._id)
  }

  return (
    <>
      <div className="movies" rel="noreferrer">
        <a className="movies__link" href={saves.trailerLink} target="_blank">
          <h4 className="movies__title">{saves.nameRU}</h4>
          <p className="movies__time">{hourTrue ? `${hours}ч ${minets}м ` : `${minets} минут`}</p>
          <img src={saves.image} alt="фильм" className="movies__img" />
        </a>
        <button className="movies__button movies__button_visible" onClick={handleDeleteMovies}></button>
      </div>
    </>
  );
}

export default SavesCard;