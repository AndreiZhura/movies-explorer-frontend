import React from "react";
import './FilterCheckbox.css'



function FilterCheckbox({onChange, shortMovie}) {


    return (
        <div className="checkbox">
            <input className={ shortMovie ? "checkbox__input checkbox__label_before":"checkbox__input checkbox__label_after" }
                type="checkbox"
                id="checkbox"
                onChange={onChange}
            />
            <label className="checkbox__label " for="checkbox" >Короткометражки</label>
        </div>
    );
}

export default FilterCheckbox;