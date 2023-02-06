import React from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../common/Footer/Footer";
import HeaderProfile from '../common/Header/HeaderProfile.js'

function Movies({ movies }) {
    return (
        <>
            <HeaderProfile />
            <main className="main">
                <SearchForm />
                <MoviesCardList
                    movies={movies}
                    isMoviesStars={false}
                    isSavedMovies={true} />
            </main>
            <Footer isMovieFooter={true} />
        </>
    )
};

export default Movies;