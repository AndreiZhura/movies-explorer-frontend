import React from "react";
import './Profile.css'
import HeaderProfile from '../../../components/common/Header/HeaderProfile';
import { Link } from 'react-router-dom';
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useState, useEffect } from "react";

function Profile(props) {
  // Стейт, в котором содержится значение инпута
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const currentUser = React.useContext(CurrentUserContext);
  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.about);
  }, [currentUser]);

  // Обработчик изменения инпута обновляет стейт
  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangeName(e) {
    setName(e.target.value);
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
                placeholder={currentUser.name}
                type="text"
                name="name-link"
                required
                minLength="2"
                maxLength="40"
                value={name || ""}
                onChange={handleChangeName}
              />
            </div>
            <div className="profile-main__container">
              <span className="profile-main__title">E-mail</span>
              <input
                className="profile-main__input"
                id="email-input"
                placeholder={currentUser.email}
                type="email"
                name="email-link"
                required
                minLength="2"
                maxLength="40"
                value={email || ""}
                onChange={handleChangeEmail}
              />
            </div>
            <button className='profile-main__button profile-main__button_register ' onClick={handleSubmit}>Редактировать</button>
            <Link to="/signin" className='profile-main__text-button' onClick={props.signOut}>Выйти из аккаунта
            </Link>
          </form>
        </div>
      </section>
    </>
  );
};

export default Profile