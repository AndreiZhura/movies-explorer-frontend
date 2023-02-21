import React from "react";
import './Profile.css'
import HeaderProfile from '../../../components/common/Header/HeaderProfile';
import { Link } from 'react-router-dom';
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useState, useEffect } from "react";

function Profile(props) {
  // Стейт, в котором содержится значение инпута
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [nameDirty, setNameDirty] = useState(true);
  const [nameError, setNameError] = useState('');
  const [email, setUserEmail] = useState(currentUser.email);
  const [emailDirty, setEmailDirty] = useState(true);
  const [EmailError, setEmailError] = useState('');
  const [corresponds, setCorresponds] = useState(true)
  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  useEffect(() => {
    setName(currentUser.name);
    setUserEmail(currentUser.email);
    if(name === currentUser.name && email === currentUser.email){
      setCorresponds(false);
    }
    
  }, [currentUser]);

  const emailValid = str => /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(str);

  // Обработчик изменения инпута обновляет стейт
  function handleEmail(evt) {
    if (evt.target.value) {
      if(email !== currentUser.email){
        setCorresponds(true);
      }

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

  const nameValidationLat = str => /^[A-Za-z -]+$/.test(str)
  const nameValidationKir= str => /^[А-Яа-я -]+$/.test(str)

  function handleName(evt) {

    if (evt.target.value) {
      if(name !== currentUser.name){
        setCorresponds(true);
      }
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

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.handleUpdateUser({
      email : email,
      name: name
    });
    
  }
  // Значение элемента «привязывается» к значению стейта
  return (
    <>
      <HeaderProfile />
      <section className="profile">
        <div className="profile-main">
          <h1 className="profile__title">Привет, {currentUser.name}</h1>
          <form className='profile-main__form'>
            <div className="profile-main__container">

              <span className="profile-main__title">Имя</span>
              <input
                className="profile-main__input"
                id="name-input"
                type="text"
                name="name"
                required
                minLength="2"
                maxLength="40"
                value={name}
                onChange={handleName}
              />
              
            </div>
            <span className={nameDirty ? 'auth-main__error_hidden' : "auth-main__error"}>{nameError}</span>
            <div className="profile-main__container">
              <span className="profile-main__title">E-mail</span>
              <input
                className="profile-main__input"
                id="email-input"
                type="email"
                name="email"
                required
                minLength="2"
                maxLength="40"
                value={email}
                onChange={handleEmail}
              />
            </div>
            <span className={props.successfulUpdateProfile ? 'auth-main__error_hidden' : "auth-main__success"}>{props.successfulUpdateProfileText}</span>
            <span className={props.errorEmailUpdate ? 'auth-main__error_hidden' : "auth-main__error"}>{props.errorUpdateUser}</span>
            <span className={emailDirty ? 'auth-main__error_hidden' : "auth-main__error"}>{EmailError}</span>
            <button className={nameDirty && emailDirty && corresponds ? 'profile-main__button profile-main__button_register' : 'profile-main__button profile-main__button_register auth-main__button_error'} onClick={handleSubmit}>Редактировать</button>
            <button  className='profile-main__text-button' onClick={props.signOut}>Выйти из аккаунта
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Profile