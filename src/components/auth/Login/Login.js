import React from "react";
import './Login.css'
import '../auth.css'
import { Link } from 'react-router-dom';
import { useState } from "react";


function Login(props) {

  const [email, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const [passwordDirty, setPasswordDirty] = useState(true);
  const [passwordError, setPasswordError] = useState('');

  const [emailDirty, setEmailDirty] = useState(true);
  const [EmailError, setEmailError] = useState('');

  const emailValid = str => /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(str);


  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleLogin(email, password)
  }

  function handleEmail(evt) {
    if (evt.target.value) {

      if (emailValid(evt.target.value)) {
        setUserEmail(evt.target.value)
        setEmailDirty(true)
      }
      else {
        setEmailDirty(false)
        setEmailError('Email не корректный')
      }
    }
    else {
      setEmailDirty(false)
      setEmailError('Email не может быть пустым')
    }

  }

  function handlePassword(evt) {
    if (evt.target.value.length < 5) {
      setPassword(evt.target.value);
      setPasswordDirty(false)
      setPasswordError('пароль не может быть пустым')

    }
    else if (evt.target.value.length > 5) {
      setPassword(evt.target.value);
      setPasswordDirty(true)
      setPasswordError('')
    }
  }

  return (
    <section className="login ">
      <div className="login-main">
        <Link to="/" className="logo logo_login"></Link>
        <div className="auth">
          <h1 className="auth__title auth__title_login">Рады видеть!</h1>
          <div className="auth-main">
            <form className='auth-main__form' onSubmit={handleSubmit} noValidate >
              <span className="auth-main__title">E-mail</span>
              <input
                className="auth-main__input"
                id="email-input"
                required
                placeholder="Email"
                type="email"
                name="email"
                onChange={handleEmail}
              />
              <span className={emailDirty ? 'auth-main__error_hidden' : "auth-main__error"}>{EmailError}</span>
              <span className="auth-main__title">Пароль</span>
              <input
                className={passwordDirty ? 'auth-main__input' : "auth-main__input_bottom"}
                id="password-input"
                required
                placeholder="Пароль"
                type="password"
                name="password"

                onChange={handlePassword}
              />
              <span className={passwordDirty ? 'auth-main__error_hidden' : "auth-main__error"}>{passwordError}</span>
              <span className={props.loginError ? 'auth-main__error_hidden' : "auth-main__error"}>{props.loginMessage}</span>
              <button className={emailDirty && passwordDirty && props.blockButton ? 'auth-main__button auth-main__button_login' : 'auth-main__button auth-main__button_login auth-main__button_error'}>Войти</button>
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