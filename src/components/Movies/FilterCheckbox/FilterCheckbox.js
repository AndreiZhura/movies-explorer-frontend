import React from "react";
import './FilterCheckbox.css'



function FilterCheckbox({onChange}) {


    return (
        <div className="checkbox">
            <input className="checkbox__input"
                type="checkbox"
                id="checkbox"
                onChange={onChange}
            />
            <label className="checkbox__label" for="checkbox" >Короткометражки</label>
        </div>
    );
}

export default FilterCheckbox;