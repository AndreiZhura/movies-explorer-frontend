import React from "react";
import "./SearchForm.css"
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import lupa from '../../../images/lupa.svg'


function SearchForm({ inputRef, onClick }) {

    const numberValidator = str => /^\d+$/.test(str);

    console.log(numberValidator('3324'))

    return (
        <div className="search-form">
            <div className="search-form__container">
                <form className="search-form__forma">
                    <img src={lupa} alt="поиск" class="lupa" />
                    <input
                        className="search-form__input"
                        required
                        placeholder="Фильм"
                        type="text"
                        name="search"
                        autoComplete="off"
                        ref={inputRef}
                    />
                    <button className="search-form__button"
                        onClick={onClick}
                    ></button>
                </form>
                <FilterCheckbox
                />
            </div>
        </div>
    );
};

export default SearchForm;