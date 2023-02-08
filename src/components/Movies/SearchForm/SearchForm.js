import React from "react";
import { useState } from "react";
import "./SearchForm.css"
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import lupa from '../../../images/lupa.svg'


function SearchForm({ onChange, handleSearchChange,onClick }) {


    return (
        <div className="search-form">
            <div className="search-form__container">
                <form className="search-form__forma">
                    <img src={lupa} alt="поиск" class="lupa" />
                    <input
                        className="search-form__input"
                        id="text-input"
                        required
                        placeholder="Фильм"
                        type="text"
                        name="text-link"
                        onChange={handleSearchChange}
                    />
                    <button className="search-form__button" onClick = {onClick}></button>
                </form>
                <FilterCheckbox
                    onChange={onChange}
                />
            </div>
        </div>
    );
};

export default SearchForm;