import React, { useEffect } from "react";
import { useState } from "react"
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../common/Footer/Footer";
import HeaderProfile from '../common/Header/HeaderProfile.js'

function Movies({ isSavesMovies, movies }) {

    const [check, setCheck] = useState(false);

    const [search, setSearch] = useState('');

    useEffect(() => {
    }, [check])

    const filterMovies = movies.filter((movie) => {
        return movie.nameRU.toLowerCase().includes(search.toLowerCase()) || movie.nameEN.toLowerCase().includes(search.toLowerCase())
    })



    function handlecheckChange() {
        setCheck(!check);
    }

    function handleSearchChange(e) {
        setSearch(e.target.value);
    }

    useEffect(() => {
        setSearch(search)
    }, [search])

    useEffect(() => {
        setSearch('')
    }, [])



    return (
        <>
            <HeaderProfile />
            <main className="main">
                <SearchForm
                    onChange={handlecheckChange}
                    handleSearchChange={handleSearchChange}
                    check={check}
                    onClick = {handleSearchChange}
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