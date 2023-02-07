import React from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../common/Footer/Footer";
import HeaderProfile from '../common/Header/HeaderProfile.js'

function Movies({isSavesMovies,movies}) {
    return (
        <>
            <HeaderProfile />
            <main className="main">
                <SearchForm />
                <MoviesCardList
                    isSavesMovies={isSavesMovies}
                    movies = {movies}
                />
            </main>
            <Footer isMovieFooter={true} />
        </>
    )
};

export default Movies;