import React from "react";
import './NavTab.css'
import { NavLink } from 'react-router-dom';




function NavTab(props) {

  return (
    <nav className="navtab">
    <a className="navtab__item" href = "#project">О проекте</a>
    <a className="navtab__item" href = "#tech" >Технологии</a>
    <a className="navtab__item" href = "#stydent" >Студент</a>
  </nav>
  );
}

export default NavTab;