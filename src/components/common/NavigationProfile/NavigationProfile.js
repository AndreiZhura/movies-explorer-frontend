import React from 'react';
import '../Navigation/Navigation.css';
import { NavLink } from 'react-router-dom';

function NavigationProfile() {
  return (
    <nav className="menu menu_profile">
      <div className='menu__profile'>
      <NavLink className="menu__item menu__item_films" activeClassName = "menu__item_active" exact to="/">Фильмы</NavLink>
      <NavLink className="menu__item menu__item_save-films" activeClassName = "menu__item_active" exact to="/">Сохранённые фильмы</NavLink>
      </div>
      <NavLink className="menu__item menu__item_profile"  activeClassName = "menu__item_active" to="/tips">Аккаунт</NavLink>
    </nav>
  );
}

export default NavigationProfile;