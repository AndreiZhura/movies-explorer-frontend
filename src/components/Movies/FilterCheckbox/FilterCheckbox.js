import React from "react";
import './FilterCheckbox.css'

function FilterCheckbox() {
    return (
        <div className="checbox">
            <input className="checkbox__input" type="checkbox" id="checkbox" />
            <label className="checkbox__label" for="checkbox" >Короткометражки</label>
        </div>
    );
}

export default FilterCheckbox;