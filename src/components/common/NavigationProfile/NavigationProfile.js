import React from 'react';
import '../Navigation/Navigation.css';
import { NavLink } from 'react-router-dom';

function NavigationProfile() {
  return (
    <nav className="menu menu_profile">
      <div className='menu__profile'>
      <NavLink className="menu__item menu__item_films"  to="/movies">Фильмы</NavLink>
      <NavLink className="menu__item menu__item_save-films"  to="/saved-movies">Сохранённые фильмы</NavLink>
      </div>
      <NavLink className="menu__item menu__item_profile"   to="/profile">Аккаунт</NavLink>
    </nav>
  );
}

export default NavigationProfile;