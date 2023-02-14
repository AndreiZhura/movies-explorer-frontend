import React, { useEffect } from "react";
import { useState, useRef } from "react";
import SearchForm from "../SearchForm/SearchForm";
import SavedCardList from "../SavedCardList/SavedCardList";
import Footer from "../../common/Footer/Footer";
import HeaderProfile from '../../common/Header/HeaderProfile.js'
import Preloader from '../../Movies/Preloader/Preloader'
import "../Movies.css"


function SavedMovies({ isSavesMovies, loading, connectingError,  savesMovies, onMovieDisLike }) {



  

  return (
    <>
      <HeaderProfile />
      <main className="main">
        <SearchForm
      
        />
        {
         <SavedCardList
         isSavesMovies={isSavesMovies}
         onMovieDisLike={onMovieDisLike}
       />
        }
      </main>
      <Footer isMovieFooter={true} />
    </>
  )

};

export default SavedMovies;