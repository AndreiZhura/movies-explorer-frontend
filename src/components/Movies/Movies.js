import React, { useEffect } from "react";
import { useState, useRef } from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../common/Footer/Footer";
import HeaderProfile from '../common/Header/HeaderProfile.js'

function Movies({ isSavesMovies, movies }) {



    const [check, setCheck] = useState(false);
    const [search, setSearch] = useState('');
    const inputRef = useRef(null);
    
    
    
    
    
    const filterMovies = movies.filter((movie) => {
         return movie.nameRU.trim().toLowerCase().includes(search.toLowerCase())
    })
    
    console.log(filterMovies)
    useEffect(() => {
        setSearch('')
       
    }, [])
    /*function handlecheckChange() {
        setCheck(!check);
    }
    */

    function handleClick(e) {
        e.preventDefault();
        setSearch(inputRef.current.value);
    }
    


    return (
        <>
            <HeaderProfile />
            <main className="main">
                <SearchForm
                  inputRef={inputRef}
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