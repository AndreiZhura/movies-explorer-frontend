import React from "react";
import './AboutMe.css'
import '../common-Main/up-title.css'
import Avatar from '../../../images/Avatar.jpg'

function AboutMe() {
  return (
    <section className="about-me" id = 'stydent'>
      <div className="up-title up-title_about-me">
        <h3 className="up-title__text">Студент</h3>
      </div>
      <div className="about-me__info">
        <h3 className="about-me__title">Андрей</h3>
        <p className="about-me__subtitle">Web-разработчик, 30 лет</p>
        <p className="about-me__text">Я закончил курс в Яндекс Практикуме в 2023 году на данный момент прохожу еще один курс по Бэкенд-разработке.Паралельно выполняю фриланс-заказы</p>
        <p className="about-me__techno">Github</p>
        <img src={Avatar} alt="логотип" className="about-me__image" />
      </div>
    </section>
  );
};

export default AboutMe;