import React, { useEffect } from "react";
import {useState} from "react"
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../common/Footer/Footer";
import HeaderProfile from '../common/Header/HeaderProfile.js'

function Movies({ isSavesMovies, movies }) {

    const [check, setCheck] = useState(false);

    const [search , setSearch] =  useState([]);

    function handlecheckChange() {
        setCheck(!check);
    }

    function handleSearchChange(e){
        setSearch(e.target.value);
    }

    useEffect(()=>{
        setSearch()
    },[])



    return (
        <>
            <HeaderProfile />
            <main className="main">
                <SearchForm
                onChange={handlecheckChange}
                handleSearchChange = {handleSearchChange}
                check={check}
                />
                <MoviesCardList
                    isSavesMovies={isSavesMovies}
                    check = {check}
                    movies={movies}
                />
            </main>
            <Footer isMovieFooter={true} />
        </>
    )
};

export default Movies;