import React, { useEffect, useState } from "react";
import "./SearchForm.css"
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import lupa from '../../../images/lupa.svg'



function SearchForm({ inputRef, onClick, onChange, shortMovie,searchHistory }) {

const [search,setSearch] = useState('')

useEffect(()=>{
    setSearch(searchHistory)
},[])

function handleChange(e){
    setSearch(e.target.value)
}

    return (
        <div className="search-form">
            <div className="search-form__container">
                <form className="search-form__forma">
                    <img src={lupa} alt="поиск" class="lupa" />
                    <input
                        className="search-form__input"
                        required
                        placeholder="Фильм"
                        type="search"
                        name="search"
                        autoComplete="off"
                        value={search}
                        onChange={handleChange}
                        ref={inputRef}
                    />

                    <button className="search-form__button"
                        onClick={onClick}
                    ></button>
                </form>
                <FilterCheckbox
                    onChange={onChange}
                    shortMovie = {shortMovie}
                />
            </div>
        </div>
    );
};

export default SearchForm;