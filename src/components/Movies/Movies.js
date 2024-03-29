import React, { useEffect } from "react";
import { useState, useRef } from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../common/Footer/Footer";
import HeaderProfile from '../common/Header/HeaderProfile.js'
import Preloader from '../Movies/Preloader/Preloader'
import "./Movies.css"
import {
  SCREEN_SIZE_1280,
  SCREEN_SIZE_480,
  COUNTER_1,
  COUNTER_2,
  COUNTER_3,
  COUNTER_5,
  COUNTER_8,
  COUNTER_12,
  SHORTMOVIE
} from '../../constants/constants'

  



function Movies({ isSavesMovies, movies, loading, connectingError, onMovieLike, onMovieDisLike, savesMovies }) {

    const [search, setSearch] = useState('');
    const [number, setNumber] = useState(false);
    const [shortMovie, setshortMovie] = useState(false);
    const inputRef = useRef(null);
    const [width, setWidth] = useState(window.innerWidth);
    const [counter, setCounter] = useState(0);
    const [data, setData] = useState('');

    /// история
    const searchHistory = localStorage.getItem("search");
    const historyCheck = localStorage.getItem('shortMovie')



    useEffect(() => {
      if (historyCheck === "true") {
        setshortMovie(true)
      }
      else if (historyCheck === "false") {
        setshortMovie(false)
      }
    }, [])

    function handlecheckChange() {
      if (shortMovie) {
        setshortMovie(!shortMovie);
        localStorage.setItem('shortMovie', false);
      }
      else {
        setshortMovie(!shortMovie);
        localStorage.setItem('shortMovie', true);
      }
    }


    useEffect(() => {
      if (searchHistory === null) {
        setSearch('/');
        localStorage.getItem("search");
      }
      else {
        setSearch(searchHistory);
        localStorage.getItem("search");
      }
    }, [])


    function count() {
      if (width >= SCREEN_SIZE_1280) {
        setCounter(counter + COUNTER_3)
      }
      else if (width < SCREEN_SIZE_1280 && width > SCREEN_SIZE_480) {
        setCounter(counter + COUNTER_2)
      }
      else if (width <= SCREEN_SIZE_480) {
        setCounter(counter + COUNTER_1);
      }
    }

    useEffect(() => {
      if (width >= SCREEN_SIZE_1280) {
        setCounter(COUNTER_12)

      }
      else if (width < SCREEN_SIZE_1280 && width > SCREEN_SIZE_480) {
        setCounter(COUNTER_8);

      }
      else if (width <= SCREEN_SIZE_480) {
        setCounter(COUNTER_5);

      }
    }, []);

    useEffect(() => {
      window.addEventListener('resize', checkWindowWidth)
      setWidth(window.innerWidth)

    }, [window.innerWidth])

    function checkWindowWidth() {
      if (width >= SCREEN_SIZE_1280) {
        setCounter(COUNTER_12)
      }
      else if (width < SCREEN_SIZE_1280 && width > SCREEN_SIZE_480) {
        setCounter(COUNTER_8);
      }
      else if (width <= SCREEN_SIZE_480) {
        setCounter(COUNTER_5);

      }
    }

    const numberValidator = str => /^\d+$/.test(str);

    const filterMovies = movies.filter((movie) => {
      return movie.nameRU.trim().toLowerCase().includes(search.toLowerCase())
    })

    const filterMoviesShort = movies.filter((movie) => {
      return movie.nameRU.trim().toLowerCase().includes(search.toLowerCase()) && movie.duration < SHORTMOVIE
    })


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
            shortMovie={shortMovie}
            searchHistory={searchHistory}
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
                  data={data}
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
                  data={data}
                />
            )
          }
        </main>
        <Footer isMovieFooter />
      </>
    )

  };

export default Movies;