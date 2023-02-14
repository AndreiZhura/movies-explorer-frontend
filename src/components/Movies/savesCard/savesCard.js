import React from "react";
import '../MoviesCard/MoviesCard.css'




function SavesCard({saves , onCardDelete}) {


function handleDeleteCard(){
  onCardDelete(saves.id);
  console.log(saves.id)
}

  return (
    <>
      <div className="movies" rel="noreferrer">
        <a className="movies__link" href={saves.trailerLink} target="_blank">
          <h4 className="movies__title">{saves.nameRU}</h4>
          <p className="movies__time">{saves.duration} минут</p>
          <img src={saves.image} alt="фильм" className="movies__img" />
        </a>
        <button className= "movies__button movies__button_visible" onClick={handleDeleteCard}></button>
      </div>
    </>
  );
}

export default SavesCard;
