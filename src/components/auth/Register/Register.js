import React from "react";
import './Register.css'
import '../auth.css'
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.svg'

function Register() {
  return (
    <section className="register">
      <div className="redister-main">
        <img src={logo} alt="логотип" className="auth__logo" />
        <h1 className="auth__title">Добро пожаловать!</h1>
      <form className='auth-main__form' >
        <span className="auth-main__title">Имя</span>
        <input
          className="auth-main__input"
          id="name-input"
          required
          placeholder="Виталий"
          type="name"
          name="name-link"
        />
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
        <button className='auth-main__button auth-main__button_register '>Зарегистрироваться</button>
        <p className='auth-main__text'>Уже зарегистрированы?
          <Link to="/sign-in" className='auth-main__text-button'>Войти
          </Link></p>
      </form>
      </div>
    </section>
  );
};

export default Register;