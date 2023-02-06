import React from "react";
import './Login.css'
import '../auth.css'
import { Link } from 'react-router-dom';
import { useState } from "react";


function Login(props) {

  const [email, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleLogin(email,password)
  }

  function handleEmail(evt) {
    setUserEmail(evt.target.value);
  }

  function handlePassword(evt) {
    setPassword(evt.target.value);
  }

  return (
    <section className="login ">
      <div className="login-main">
      <Link to="/" className="logo logo_login"></Link>
      <div className="auth">
      <h1 className="auth__title auth__title_login">Рады видеть!</h1>
      <div className="auth-main">
      <form className='auth-main__form' onSubmit={handleSubmit} >
        <span className="auth-main__title">E-mail</span>
        <input
          className="auth-main__input"
          id="email-input"
          required
          placeholder="Email"
          type="email"
          name="email-link"
          onChange={handleEmail}
        />
        <span className="auth-main__title">Пароль</span>
        <input
          className="auth-main__input"
          id="password-input"
          required
          placeholder="Пароль"
          type="password"
          name="password-link"
          onChange={handlePassword}
        />
        <button className='auth-main__button auth-main__button_login'>Войти</button>
        <p className='auth-main__text auth-main__text_login'>Ещё не зарегистрированы?
          <Link to="/signup" className='auth-main__text-button auth-main__text-login '>Регистрация
          </Link></p>
      </form>
      </div>
      </div>
      </div>
    </section>
  );
}

export default Login