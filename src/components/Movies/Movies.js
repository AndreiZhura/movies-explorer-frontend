import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../common/Footer/Footer";
import HeaderProfile from '../common/Header/HeaderProfile.js'

function Movies({ isSavesMovies, movies }) {

    const [check, setCheck] = useState(false);
    const [search, setSearch] = useState('');

    useEffect(() => {
        setSearch('')
    }, [])

    useEffect(() => {
    }, [check])

    const filterMovies = movies.filter((movie) => {
        return movie.nameRU.trim().toLowerCase().includes('Америке'.toLowerCase())
        //return movie.nameRU.trim().toLowerCase().includes(search.toLowerCase()) //&& movie.nameEN.trim().toLowerCase().includes(search.toLowerCase())
    })

    console.log(filterMovies)

   
  
    function handlecheckChange() {
        setCheck(!check);
    }

    function handleClick(e) {
        e.preventDefault();
        setSearch(search);
    }

    return (
        <>
            <HeaderProfile />
            <main className="main">
                <SearchForm
                    onChange={handlecheckChange}
                    check={check}
                    search = {search}
                    onClick={handleClick}
                  
                />
                <MoviesCardList
                    isSavesMovies={isSavesMovies}
                    check={check}
                    movies={filterMovies}
                />
            </main>
            <Footer isMovieFooter={true} />
        </>
    )
};

export default Movies;