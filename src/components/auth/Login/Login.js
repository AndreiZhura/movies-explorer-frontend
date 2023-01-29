import React from "react";
import './Login.css'
import '../auth.css'
import { Link } from 'react-router-dom';


function Login(props) {
  return (
    <section className="login ">
      <div className="login-main">
      <Link to="/" className="logo logo_login"></Link>
      <div className="auth">
      <h1 className="auth__title auth__title_login">Рады видеть!</h1>
      <div className="auth-main">
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
        <p className='auth-main__text auth-main__text_login'>Ещё не зарегистрированы?
          <Link to="/signup" className='auth-main__text-button  auth-main__text-button_login '>Регистрация
          </Link></p>
      </form>
      </div>
      </div>
      </div>
    </section>
  );
}

export default Login