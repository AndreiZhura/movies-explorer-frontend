import React from "react";
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props){
    return(
        <>
        <div className="movie-card-list">
         <MoviesCard 
         isMoviesStars = {props.isMoviesStars}
         isSavedMovies = {props.isSavedMovies}
         />
          <MoviesCard 
         isMoviesStars = {props.isMoviesStars}
         isSavedMovies = {props.isSavedMovies}
         />
          <MoviesCard 
         isMoviesStars = {props.isMoviesStars}
         isSavedMovies = {props.isSavedMovies}
         />
          <MoviesCard 
         isMoviesStars = {props.isMoviesStars}
         isSavedMovies = {props.isSavedMovies}
         />
          <MoviesCard 
         isMoviesStars = {props.isMoviesStars}
         isSavedMovies = {props.isSavedMovies}
         />
          <MoviesCard 
         isMoviesStars = {props.isMoviesStars}
         isSavedMovies = {props.isSavedMovies}
         />
          <MoviesCard 
         isMoviesStars = {props.isMoviesStars}
         isSavedMovies = {props.isSavedMovies}
         />
         <MoviesCard 
         isMoviesStars = {props.isMoviesStars}
         isSavedMovies = {props.isSavedMovies}
         />
          <MoviesCard 
         isMoviesStars = {props.isMoviesStars}
         isSavedMovies = {props.isSavedMovies}
         />
          <MoviesCard 
         isMoviesStars = {props.isMoviesStars}
         isSavedMovies = {props.isSavedMovies}
         />
          <MoviesCard 
         isMoviesStars = {props.isMoviesStars}
         isSavedMovies = {props.isSavedMovies}
         />
       <MoviesCard 
         isMoviesStars = {props.isMoviesStars}
         isSavedMovies = {props.isSavedMovies}
         />

         <button className="movies-card-list__button">Ещё</button>
        </div>
        </>
    );
};

export default MoviesCardList;