import React from "react";
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList'
import HeaderProfile from '../common/Header/HeaderProfile.js'
import Footer from '../common/Footer/Footer'

function SavedMovies() {
    return (
        <>
            <HeaderProfile />
            <main className="main">
                <SearchForm />
                <MoviesCardList isSavedMovies = {false} />
            </main>
            <Footer />
        </>

    );
}

export default SavedMovies;