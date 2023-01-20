import React from "react";
import './NavTab.css'
import { NavLink } from 'react-router-dom';




function NavTab(props) {

  return (
    <nav className="navtab">
    <NavLink className="navtab__item" activeClassName = "navtab__item_active" exact to="/">О проекте</NavLink>
    <NavLink className="navtab__item"  activeClassName = "navtab__item_active" to="/tips">Технологии</NavLink>
    <NavLink className="navtab__item"  activeClassName = "navtab__item_active" to="/tips">Студент</NavLink>
  </nav>
  );
}

export default NavTab;