import React from "react";
import './Register.css'
import '../auth.css'
import { Link } from 'react-router-dom';
import { useState} from 'react';



function Register(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [name, setName] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleRegistration (email,password,name)
  }

  function handleEmail(evt) {
    setEmail(evt.target.value);
  }

  function handlePassword(evt) {
    setPassword(evt.target.value);
  }

  function handleName(evt) {
    setName(evt.target.value);
  }


  return (
    
    <section className="register">
      <div className="redister-main">
      <Link to="/" className="logo"></Link>
      <div className="auth">
        <h1 className="auth__title">Добро пожаловать!</h1>
        <div className="auth-main">
        <form className='auth-main__form'onSubmit={handleSubmit} >
          <span className="auth-main__title">Имя</span>
          <input
            className="auth-main__input"
            id="name-input"
            required
            placeholder="Виталий"
            type="name"
            name="name-link"
            value={name}
            onChange={handleName}
          />
          <span className="auth-main__title">E-mail</span>
          <input
            className="auth-main__input auth-main__input_email"
            id="email-input"
            required
            placeholder="Email"
            type="email"
            name="email-link"
            value={email}
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
            value={password}
            onChange={handlePassword}
          />
          <button className='auth-main__button auth-main__button_register '>Зарегистрироваться</button>
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