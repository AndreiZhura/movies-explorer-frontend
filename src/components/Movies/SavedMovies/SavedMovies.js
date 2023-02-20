import React, { useEffect } from "react";
import { useState, useRef } from "react";
import SearchForm from "../SearchForm/SearchForm";
import SavedCardList from "../SavedCardList/SavedCardList";
import Footer from "../../common/Footer/Footer";
import HeaderProfile from '../../common/Header/HeaderProfile.js'
import Preloader from '../../Movies/Preloader/Preloader'
import "../Movies.css"


function SavedMovies({ savesMovies, onMovieDisLike, loading, connectingError }) {
    const [check, setCheck] = useState(false);
    const [search, setSearch] = useState('');
    const [number, setNumber] = useState(false);
    const [shortMovie, setshortMovie] = useState(false);
    const inputRef = useRef(null);
    const numberValidator = str => /^\d+$/.test(str);


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



  const filterSavesMovies = savesMovies.filter((movie) => {
    return movie.nameRU.trim().toLowerCase().includes(search.toLowerCase())
  })

  const filterSavesMoviesShort = savesMovies.filter((movie) => {
    return movie.nameRU.trim().toLowerCase().includes(search.toLowerCase()) && movie.duration < 40
  })

    function handlecheckChange() {
        setCheck(!check);
        setshortMovie(!shortMovie)
        localStorage.setItem("shortORlong", shortMovie)
        localStorage.setItem("search", inputRef.current.value);
    }

    function handleClick(e) {
        e.preventDefault();

        if (numberValidator(inputRef.current.value)) {
            setSearch('/');
            setNumber(true);
            localStorage.setItem("search", inputRef.current.value);
        }
        else {
            setSearch(inputRef.current.value);
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
                    shortMovie ={shortMovie}
                    searchHistory = {searchHistory}
                />
                {number ? <div className="movie__error">«Нужно ввести ключевое слово»</div>:
                  loading ? <Preloader /> : connectingError ? <p className="movie__error-server">«Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз» </p> :
                    shortMovie ?
                        <SavedCardList
                            savesMovies={filterSavesMoviesShort}
                            onMovieDisLike={onMovieDisLike}
                        />
                        :
                        <SavedCardList
                            savesMovies={filterSavesMovies}
                            onMovieDisLike={onMovieDisLike}
                        />
                }
            </main>
            <Footer isMovieFooter={true} />
        </>
    )

};

export default SavedMovies;