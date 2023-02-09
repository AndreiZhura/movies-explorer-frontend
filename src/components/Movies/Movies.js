import React, { useEffect } from "react";
import { useState, useRef } from "react"
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
        return movie.nameRU.trim().toLowerCase().includes(search.toLowerCase()) && movie.nameEN.trim().toLowerCase().includes(search.toLowerCase())
    })

    console.log(filterMovies)


    const inputRef = useRef(null);


    function handlecheckChange() {
        setCheck(!check);
    }

    function handleClick(e) {
        e.preventDefault();
        setSearch(inputRef.current.value);
    }






    return (
        <>
            <HeaderProfile />
            <main className="main">
                <SearchForm
                    onChange={handlecheckChange}
                    check={check}
                    onClick={handleClick}
                    inputRef={inputRef}
                />
                <MoviesCardList
                    isSavesMovies={isSavesMovies}
                    check={check}
                    search={search}
                    movies={filterMovies}
                />
            </main>
            <Footer isMovieFooter={true} />
        </>
    )
};

export default Movies;