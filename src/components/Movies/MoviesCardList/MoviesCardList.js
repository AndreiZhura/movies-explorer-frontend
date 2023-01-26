import React from "react";
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props){
    return(
        <>
        <div className="movie-card-list">
         <MoviesCard isSavedMovies = {props.isSavedMovies}/>
         <MoviesCard isSavedMovies = {props.isSavedMovies}/>
         <MoviesCard isSavedMovies = {props.isSavedMovies}/>
         <MoviesCard isSavedMovies = {props.isSavedMovies}/>
         <MoviesCard isSavedMovies = {props.isSavedMovies}/>
         <MoviesCard isSavedMovies = {props.isSavedMovies}/>
         <MoviesCard isSavedMovies = {props.isSavedMovies}/>
         <MoviesCard isSavedMovies = {props.isSavedMovies}/>
        </div>
        </>
    );
};

export default MoviesCardList;