import React, { useEffect } from "react";
import { useState, useRef } from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../common/Footer/Footer";
import HeaderProfile from '../common/Header/HeaderProfile.js'
import Preloader from '../Movies/Preloader/Preloader'
import "./Movies.css"


function Movies({ isSavesMovies, movies, loading, connectingError, onMovieLike, onMovieDisLike, savesMovies }) {

  const [search, setSearch] = useState('');
  const [number, setNumber] = useState(false);
  const [shortMovie, setshortMovie] = useState(false);
  const inputRef = useRef(null);
  const [width, setWidth] = useState(window.innerWidth);
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState('')
  /// история

  const searchHistory = localStorage.getItem("search");
  const shortORlong = localStorage.getItem("shortORlong");

  useEffect(() => {
    if(searchHistory === null){
      setshortMovie(shortORlong);
      setSearch('/');
      localStorage.getItem("search");
    }
    else{
      setshortMovie(shortORlong);
      setSearch(searchHistory);
      localStorage.getItem("search");
    }
  }, [])


  function count() {
    if (width >= 1280) {
      setCounter(counter + 3)
    }
    else if (width < 1280 && width > 480) {
      setCounter(counter + 2)
    }
    else if (width <= 480) {
      setCounter(counter + 1);
    }
  }

  useEffect(() => {
    if (width >= 1280) {
      setCounter(12)

    }
    else if (width < 1280 && width > 480) {
      setCounter(8);

    }
    else if (width <= 480) {
      setCounter(5);

    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', checkWindowWidth)
    setWidth(window.innerWidth)
    
  }, [window.innerWidth])

  function checkWindowWidth() {
    if (width >= 1280) {
      setCounter(12)
    }
    else if (width < 1280 && width > 480) {
      setCounter(8);
    }
    else if (width <= 480) {
      setCounter(5);

    }
  }

  const numberValidator = str => /^\d+$/.test(str);

  const filterMovies = movies.filter((movie) => {
    return movie.nameRU.trim().toLowerCase().includes(search.toLowerCase())
  })

  const filterMoviesShort = movies.filter((movie) => {
    return movie.nameRU.trim().toLowerCase().includes(search.toLowerCase()) && movie.duration < 40
  })



  function handlecheckChange() {
    setshortMovie(!shortMovie);
    localStorage.setItem("shortORlong", shortMovie)
    localStorage.setItem("search", inputRef.current.value);
  }

  function handleClick(e) {
    e.preventDefault();

    if (numberValidator(inputRef.current.value)) {
      setData(inputRef.current.value)
      setSearch('/');
      setNumber(true);
      localStorage.setItem("search", inputRef.current.value);

      
    }
    else {
      setSearch(inputRef.current.value);
      setData(inputRef.current.value)
      setNumber(false);
      localStorage.setItem("search", inputRef.current.value);
    }
  }

  
  return (
    <>
      <HeaderProfile />
      <main className="main">
        <SearchForm
          inputRef={inputRef}
          onClick={handleClick}
          number={number}
          onChange={handlecheckChange}
          shortMovie = {shortMovie}
          searchHistory = {searchHistory}
         />
        {
          number ? (
            <div className="movie__error">«Нужно ввести ключевое слово»</div>
          ) : (loading ? <Preloader /> : connectingError ? <p className="movie__error-server">«Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз» </p> :
            shortMovie ?
              <MoviesCardList
                isSavesMovies={isSavesMovies}
                savesMovies={savesMovies}
                movies={filterMoviesShort}
                counter={counter}
                count={count}
                onMovieLike={onMovieLike}
                onMovieDisLike={onMovieDisLike}
                data = {data}
              />
              :
              <MoviesCardList
                isSavesMovies={isSavesMovies}
                savesMovies={savesMovies}
                movies={filterMovies}
                counter={counter}
                count={count}
                onMovieLike={onMovieLike}
                onMovieDisLike={onMovieDisLike}
                data = {data}
              />
          )
        }
      </main>
      <Footer isMovieFooter={true} />
    </>
  )

};

export default Movies;