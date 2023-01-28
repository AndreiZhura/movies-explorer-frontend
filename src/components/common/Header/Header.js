
import React from "react";
import './Header.css'
import Navigation from '../Navigation/Navigation'
import { Link, NavLink } from 'react-router-dom';
import './MenuRight.css'


function Header(props) {
  const [isMenu, setIsMenu] = React.useState(false);

  function handleChange() {
    setIsMenu(!isMenu);
  }

  return (
    <>
      <header className="header header_profile">
        <Link to="/" className="header__logo"></Link>
        <Navigation />
        <button
          className="header__button header__button-open "
          onClick={handleChange}
        ></button>
        {isMenu && (
          <section className="menu-right">
            <div className="menu-right__main">
              <button className="menu-right__close"
                onClick={handleChange}></button>
              <nav className="menu-right__navigetion">
                <NavLink className="menu-right__item" activeClassName="menu__item_active" to="/tips">Главная</NavLink>
                <NavLink className="menu-right__item" activeClassName="menu__item_active" exact to="/">Фильмы</NavLink>
                <NavLink className="menu-right__item" activeClassName="menu__item_active" to="/tips">Сохраненные фильмы</NavLink>
              </nav>
              <nav className="menu-right__accounts">
                <NavLink className="menu-right__account" activeClassName="menu__item_active" to="/tips">Аккаунт</NavLink>
              </nav>
            </div>
          </section>
        )}
      </header>
    </>
  );
}

export default Header;