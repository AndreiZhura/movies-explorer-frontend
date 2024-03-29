
import React from "react";
import './Header.css'
import NavigationProfile from "../NavigationProfile/NavigationProfile";
import { Link ,NavLink } from 'react-router-dom';
import './MenuRight.css'

function HeaderProfile(props) {
  const [isMenu, setIsMenu] = React.useState(false);

  function handleChange() {
    setIsMenu(!isMenu);
  }

  return (
    <>
      <header className="header header_profile">
      <Link to="/" className="header__logo"></Link>
        <NavigationProfile />
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
                <NavLink className="menu-right__item"  to="/">Главная</NavLink>
                <NavLink className="menu-right__item" to="/movies">Фильмы</NavLink>
                <NavLink className="menu-right__item" to="/saved-movies">Сохраненные фильмы</NavLink>
              </nav>
              <nav className="menu-right__accounts">
                <NavLink className="menu-right__account"   to="/profile">Аккаунт</NavLink>
              </nav>
            </div>
          </section>
        )}
      </header>
    </>
  );
}

export default HeaderProfile;