import React from "react";
import './Register.css'
import '../auth.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';




function Register(props) {

  const [email, setUserEmail] = useState("");
  const [emailDirty, setEmailDirty] = useState(true);
  const [EmailError, setEmailError] = useState('');
  const [password, setPassword] = useState("");
  const [passwordDirty, setPasswordDirty] = useState(true);
  const [passwordError, setPasswordError] = useState('');
  const [name, setName] = useState('');
  const [nameDirty, setNameDirty] = useState(true);
  const [nameError, setNameError] = useState('');

  const emailValid = str => /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(str);


  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleRegistration(email, password, name)
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

  const nameValidationLat = str => /^[A-Za-z -]+$/.test(str)
  const nameValidationKir= str => /^[А-Яа-я -]+$/.test(str)

  function handleName(evt) {

    if (evt.target.value) {
       if(nameValidationLat(evt.target.value)){
        setName(evt.target.value);
        setNameDirty(true)
       }
       else if(nameValidationKir(evt.target.value)){
        setName(evt.target.value);
        setNameDirty(true)
       }
       else{
        setNameDirty(false)
        setNameError('Некорректное имя!')
       }
    }
    else {
      setNameDirty(false)
      setNameError('Поле имя не должно быть пустым!')
    }
  }


  return (

    <section className="register">
      <div className="redister-main">
        <Link to="/" className="logo"></Link>
        <div className="auth">
          <h1 className="auth__title">Добро пожаловать!</h1>
          <div className="auth-main">
            <form className='auth-main__form' onSubmit={handleSubmit} noValidate >
              <span className="auth-main__title">Имя</span>
              <input
                className="auth-main__input"
                id="name-input"
                required
                minLength="2"
                maxLength="40"
                placeholder="Виталий"
                type="name"
                name="name-link"
                onChange={handleName}
              />
              <span className={nameDirty ? 'auth-main__error_hidden' : "auth-main__error"}>{nameError}</span>
              <span className="auth-main__title">E-mail</span>
              <input
                className="auth-main__input auth-main__input_email"
                id="email-input"
                required
                minLength="2"
                maxLength="40"
                placeholder="Email"
                type="email"
                name="email-link"
                onChange={handleEmail}
              />
              <span className={emailDirty ? 'auth-main__error_hidden' : "auth-main__error"}>{EmailError}</span>
              <span className="auth-main__title">Пароль</span>
              <input
                className={passwordDirty ? 'auth-main__input' : "auth-main__input_bottom"}
                id="password-input"
                required
                minLength="2"
                maxLength="40"
                placeholder="Пароль"
                type="password"
                name="password-link"
                onChange={handlePassword}
              />
              <span className={props.successfulRegistration ? "auth-main__success" :'auth-main__error_hidden'}>{props.successfulRegistrationText}</span>
              <span className={passwordDirty ? 'auth-main__error_hidden' : "auth-main__error"}>{passwordError}</span>
              <span className={props.registerError ? 'auth-main__error_hidden' : "auth-main__error"}>{props.redisterMessage}</span>
              <button className={emailDirty && passwordDirty && nameDirty && props.blockButton ? 'auth-main__button auth-main__button_register' : 'auth-main__button auth-main__button_register auth-main__button_error'}>Зарегистрироваться</button>
              <p className='auth-main__text auth-main__text_register'>Уже зарегистрированы?
                <Link to="/signin" className='auth-main__text-button auth-main__text-button_register'>Войти
                </Link></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;