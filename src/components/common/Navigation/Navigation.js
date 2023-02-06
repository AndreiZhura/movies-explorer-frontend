import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="menu">
      <NavLink className="menu__item menu__item_register" to="/signup">Регистрация</NavLink>
      <NavLink className="menu__item menu__item_green"   to="/signin">Войти</NavLink>
    </nav>
  );
}

export default Navigation;