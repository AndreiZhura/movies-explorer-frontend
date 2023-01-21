import React from "react";
import './Login.css'
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.svg'

function Login(props){
    return(
     <section className="login">
        <img src={logo} alt="логотип" className="login__logo" />
        <h1 className="login__title">Рады видеть!</h1>
        <form className='section-main__form' >
        <span className="section-main__title">E-mail</span>    
        <input
          className="section-main__input"
          id="email-input"
          required
          placeholder="Email"
          type="email"
          name="email-link"
        />
        <span className="section-main__title">Пароль</span>  
        <input
          className="section-main__input"
          id="password-input"
          required
          placeholder="Пароль"
          type="password"
          name="password-link"

        />
        <button className='section-main__button'>Войти</button>
        <p className='section-main__text'>Ещё не зарегистрированы?
          <Link to="/sign-in" className='section-main__text-button'>Регистрация
          </Link></p>
      </form>
     </section>
    );
}

export default Login