import React from "react";
import "./SearchForm.css"
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import lupa from '../../../images/lupa.svg'


function SearchForm() {
    return (
        <section className="search-form">
            <div className="search-form__container">
                <form className="search-form__forma">
                <img src={lupa} alt="поиск" class="lupa"/>
                    <input
                        className="section-form__input"
                        id="text-input"
                        required
                        placeholder="Фильм"
                        type="text"
                        name="text-link"
                    />
                    <button className="section-form__button"></button>
                </form>
                    <FilterCheckbox/>
            </div>
        </section>
    );
};

export default SearchForm;