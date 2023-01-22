import React from "react";
import "./SearchForm.css"


function SearchForm() {
    return (
        <section className="search-form">
            <div className="search-form__container">
                <form className="search-form__forma">
                    <input
                        className="section-form__input"
                        id="text-input"
                        required
                        placeholder="Фильмы"
                        type="text"
                        name="text-link"
                    />
                    <button className="section-form__button"></button>
                    <div className="checbox">
                        <input className="checkbox__input" type="checkbox" id = "checkbox" />
                        <label className="checkbox__label" for="checkbox" >Короткометражка</label>
                    </div>

                </form>
            </div>
        </section>
    );
};

export default SearchForm;