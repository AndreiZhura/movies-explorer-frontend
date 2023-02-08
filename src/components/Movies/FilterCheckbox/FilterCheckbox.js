import React from "react";
import './FilterCheckbox.css'

function FilterCheckbox(props) {

   const checkedRef = React.useRef();

   function handleClick() {
    checkedRef.current.play(); 
    console.log(checkedRef)
  }

    return (
        <div className="checkbox">
            <input className="checkbox__input"
             type="checkbox"
              id="checkbox"
              onClick={handleClick}
               />
            <label className="checkbox__label" for="checkbox" >Короткометражки</label>
        </div>
    );
}

export default FilterCheckbox;