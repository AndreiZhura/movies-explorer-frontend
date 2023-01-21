
import React from "react";
import './Header.css'
import Navigation from '../Navigation/Navigation'
// import { Link, Route, Routes } from "react-router-dom";
import logo from "../../../images/logo.svg";



function Header(props) {

  return (
  <header className="header">
    <img src={logo} alt="логотип" className="header__logo" />
    <Navigation/>
  </header>
  );
}

export default Header;