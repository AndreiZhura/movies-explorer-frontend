
import React from "react";
import './Header.css'
import Navigation from '../Navigation/Navigation'
import NavigationRegister from "../NavigationProfile/NavigationProfile";
// import { Link, Route, Routes } from "react-router-dom";
import logo from "../../../images/logo.svg";



function Header(props) {

  return (
    <header className="header header_profile">
      <img src={logo} alt="логотип" className="header__logo" />
      <NavigationRegister />
      <button
        className="header__button header__button-open "
        onClick={props.headerOpen}
      ></button>
    </header>
  );
}

export default Header;