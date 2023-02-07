import React from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../common/Footer/Footer";
import HeaderProfile from '../common/Header/HeaderProfile.js'

function Movies(props) {
    return (
        <>
            <HeaderProfile />
            <main className="main">
                <SearchForm />
                <MoviesCardList
                    isSavesMovies={props.isSavesMovies}
                />
            </main>
            <Footer isMovieFooter={true} />
        </>
    )
};

export default Movies;