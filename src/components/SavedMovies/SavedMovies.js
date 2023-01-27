import React from "react";

import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList'
import HeaderProfile from '../common/Header/HeaderProfile.js'

function SavedMovies() {
    return (
        <>
            <HeaderProfile />
            <SearchForm />
            <MoviesCardList />
        </>

    );
}

export default SavedMovies;