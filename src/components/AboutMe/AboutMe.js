import React from "react";
import './AboutMe.css'
import '../joint/up-title.css'
import myImage from '../../images/myImage.jpg'

function AboutMe(){
  return(
   <section className="about-me">
    <div className="up-title up-title_about-me">
        <h3 className="up-title__text">Студент</h3>
      </div>
      <div className="about-me__info">
        <h3 className="about-me__title">Андрей</h3>
        <p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
        <p className="about-me__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
         <p className="about-me__techno">Github</p>
        <img src={myImage} alt="логотип" className="about-me__image" />
      </div>
   </section>
  );
};

export default AboutMe;