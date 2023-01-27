import React from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../common/Footer/Footer";
import HeaderProfile from '../common/Header/HeaderProfile.js'

function Movies() {
    return (
        <>
            <HeaderProfile />
            <SearchForm />
            <MoviesCardList />
            <Footer />
        </>
    )
};

export default Movies;