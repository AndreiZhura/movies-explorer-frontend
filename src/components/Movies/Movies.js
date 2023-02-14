import React, { useEffect } from "react";
import { useState, useRef } from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../common/Footer/Footer";
import HeaderProfile from '../common/Header/HeaderProfile.js'
import Preloader from '../Movies/Preloader/Preloader'
import "./Movies.css"


function Movies({ isSavesMovies, movies, loading, connectingError, onMovieLike, savesMovies, onMovieDisLike }) {

  const [check, setCheck] = useState(false);
  const [search, setSearch] = useState('');
  const [number, setNumber] = useState(false);
  const [shortMovie, setshortMovie] = useState(false);
  const inputRef = useRef(null);
  const [width, setWidth] = useState(window.innerWidth);
  const [counter, setCounter] = useState(0);

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
    window.addEventListener('resize', checkWindowWidth)
    setWidth(window.innerWidth)
  }, [])

  function checkWindowWidth() {
    if (width >= 1280) {
      setCounter(12)

    }
    else if (width < 1280 && width > 480) {
      setCounter(8);
      console.log(width)

    }
    else if (width <= 480) {
      setCounter(5);

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


  const numberValidator = str => /^\d+$/.test(str);

  const filterMovies = movies.filter((movie) => {
    return movie.nameRU.trim().toLowerCase().includes(search.toLowerCase())
  })

  const filterMoviesShort = movies.filter((movie) => {
    return movie.nameRU.trim().toLowerCase().includes(search.toLowerCase()) && movie.duration < 40
  })

  useEffect(() => {
    setSearch('/');
    setNumber(true);
  }, [])

  function handlecheckChange() {
    setCheck(!check);
    setshortMovie(!shortMovie)
  }

  function handleClick(e) {
    e.preventDefault();

    if (numberValidator(inputRef.current.value)) {
      setSearch('/');
      setNumber(true);
    }
    else {
      setSearch(inputRef.current.value);
      setNumber(false);
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
        />
        {
          number ? (

            <div className="movie__error">«Нужно ввести ключевое слово»</div>
          ) : (loading ? <Preloader /> : connectingError ? <p className="movie__error-server">«Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз» </p> :
            shortMovie ?
              <MoviesCardList
                isSavesMovies={isSavesMovies}
                check={check}
                movies={filterMoviesShort}
                counter={counter}
                count={count}
                onMovieLike={onMovieLike}
              />
              :
              <MoviesCardList
                isSavesMovies={isSavesMovies}
                check={check}
                movies={filterMovies}
                counter={counter}
                count={count}
                onMovieLike={onMovieLike}

              />

          )
        }
      </main>
      <Footer isMovieFooter={true} />
    </>
  )

};

export default Movies;