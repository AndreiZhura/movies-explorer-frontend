import React, { useEffect } from "react";
import { useState, useRef } from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../common/Footer/Footer";
import HeaderProfile from '../common/Header/HeaderProfile.js'
import "./Movies.css"

function Movies({ isSavesMovies, movies }) {



    const [check, setCheck] = useState(false);
    const [search, setSearch] = useState('');
    const [number , setNumber] = useState(false)
    const inputRef = useRef(null);
    
    
    const numberValidator = str => /^\d+$/.test(str);
    
    
    const filterMovies = movies.filter((movie) => {
         return movie.nameRU.trim().toLowerCase().includes(search.toLowerCase())
    })
    
    console.log(filterMovies)
    useEffect(() => {
        setSearch('/')
       
    }, [])
    /*function handlecheckChange() {
        setCheck(!check);
    }
    */

    function handleClick(e) {
        e.preventDefault();

        if(numberValidator(inputRef.current.value)){
            setSearch('/');
            setNumber(true);
        }
        else{
            setSearch(inputRef.current.value);
            setNumber(false);
        }
    }
    


    return (
        <>
            <HeaderProfile />
            <main className="main">
                <SearchForm
                  inputRef={inputRef}
                  onClick={handleClick}
                  
                />
                {
                   number ? (
                    <div className="movie__error">«Нужно ввести ключевое слово»</div>
                   ) : (
                       <MoviesCardList
                           isSavesMovies={isSavesMovies}
                           check={check}
                           movies={filterMovies}
                       />
                   ) 
                }
            </main>
            <Footer isMovieFooter={true} />
        </>
    )
};

export default Movies;