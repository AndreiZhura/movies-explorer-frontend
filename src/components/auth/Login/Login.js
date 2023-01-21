import React from "react";
import './Login.css'
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.svg'

function Login(props){
    return(
     <section className="login">
        <img src={logo} alt="логотип" className="auth__logo" />
        <h1 className="auth__title">Рады видеть!</h1>
        <form className='auth-main__form' >
        <span className="auth-main__title">E-mail</span>    
        <input
          className="auth-main__input"
          id="email-input"
          required
          placeholder="Email"
          type="email"
          name="email-link"
        />
        <span className="auth-main__title">Пароль</span>  
        <input
          className="auth-main__input"
          id="password-input"
          required
          placeholder="Пароль"
          type="password"
          name="password-link"

        />
        <button className='auth-main__button auth-main__button_login'>Войти</button>
        <p className='auth-main__text'>Ещё не зарегистрированы?
          <Link to="/sign-in" className='auth-main__text-button'>Регистрация
          </Link></p>
      </form>
     </section>
    );
}

export default Login