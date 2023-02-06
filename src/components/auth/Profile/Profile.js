import React from "react";
import './Profile.css'
import HeaderProfile from '../../../components/common/Header/HeaderProfile';
import { Link } from 'react-router-dom';
import CurrentUserContext from "../../../contexts/CurrentUserContext";

function Profile(props) {


  const currentUser = React.useContext(CurrentUserContext);
  console.log(currentUser)
  return (
    <>
    <HeaderProfile/>  
    <section className="profile">
      <div className="profile-main">
        <h1 className="profile__title">Привет, {props.userData.data.name}</h1>
        <form className='profile-main__form' >
          <div className="profile-main__container">

            <span className="profile-main__title">Имя</span>
            <input
              className="profile-main__input"
              id="name-input"
              placeholder={props.userData.data.name}
              type="text"
              name="name-link"
            
            />
          </div>
          <div className="profile-main__container">
            <span className="profile-main__title">E-mail</span>
            <input
              className="profile-main__input"
              id="email-input"
              placeholder={props.userData.data.email}
              type="email"
              name="email-link"
            
            />
          </div>
          <button className='profile-main__button profile-main__button_register '>Редактировать</button>
          <Link to="/signin" className='profile-main__text-button' onClick={props.signOut}>Выйти из аккаунта
          </Link>
        </form>
      </div>
    </section>
    </>
  );
};

export default Profile