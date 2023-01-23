import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="menu">
      <NavLink className="menu__item menu__item_register" activeClassName = "menu__item_active" exact to="/">Регистрация</NavLink>
      <NavLink className="menu__item menu__item_green"  activeClassName = "menu__item_active" to="/tips">Войти</NavLink>
    </nav>
  );
}

export default Navigation;