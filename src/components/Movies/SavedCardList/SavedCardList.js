import React from "react";
import '../MoviesCardList/MoviesCardList.css'
import SavesCard from "../SavesCard/SavesCard";


function SavedCardList({ savesMovies }) {


    console.log(savesMovies)


    return (
        <>
            <div className="movie-card-list">
                {
                    savesMovies.map((saves) => {
                        return <SavesCard
                            saves={saves}
                        />
                    })
                }
            </div>

        </>
    );
};

export default SavedCardList;