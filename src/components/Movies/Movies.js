import React from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../common/Footer/Footer";
import HeaderProfile from '../common/Header/HeaderProfile.js'

function Movies({ isSavesMovies, movies }) {

    const [size, setSize] = React.useState(false);

    function handleSizeChange() {
        setSize(!size);
        alert('привет')
    }




    return (
        <>
            <HeaderProfile />
            <main className="main">
                <SearchForm
                onChange={handleSizeChange}
                size={size}
                />
                <MoviesCardList
                    isSavesMovies={isSavesMovies}
                    size = {size}
                    movies={movies}
                />
            </main>
            <Footer isMovieFooter={true} />
        </>
    )
};

export default Movies;