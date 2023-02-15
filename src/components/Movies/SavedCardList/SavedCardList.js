import React from "react";
import '../MoviesCardList/MoviesCardList.css'
import SavesCard from "../SavesCard/SavesCard";


function SavedCardList({ savesMovies, onMovieDisLike }) {

    return (
        <>
            <div className="movie-card-list">
                {
                    savesMovies.map((saves) => {
                        return <SavesCard
                            saves={saves}
                            onMovieDisLike = {onMovieDisLike}
                        />
                    })
                }
            </div>

        </>
    );
};

export default SavedCardList;