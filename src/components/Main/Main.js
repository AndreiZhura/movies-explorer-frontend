import React from "react";
import Header from "../common/Header/Header";
import HeaderProfile from '../common/Header/HeaderProfile'
import Promo from "./Promo/Promo";
import AboutProject from './AboutProject/AboutProject'
import Techs from './Techs/Techs'
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Footer from "../common/Footer/Footer";




function Main(props) {

  return (
  <>
  {
    props.loggedIn ? <HeaderProfile/> :   <Header/>
  }
  <main className="main">
  <Promo/>
  <AboutProject/>
  <Techs/>
  <AboutMe/>
  <Portfolio/>
  </main>
  <Footer/>
  </>
  );
}

export default Main;