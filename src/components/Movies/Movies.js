import React from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../common/Footer/Footer";
import HeaderProfile from '../common/Header/HeaderProfile.js'

function Movies({ isSavesMovies, movies }) {

    const [check, setCheck] = React.useState(false);

    function handlecheckChange() {
        setCheck(!check);
    }




    return (
        <>
            <HeaderProfile />
            <main className="main">
                <SearchForm
                onChange={handlecheckChange}
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