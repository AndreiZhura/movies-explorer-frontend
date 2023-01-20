import React from "react";
import './AboutProject.css'
import '../joint/up-title.css'




function AboutProject(props) {

  return (
    <section className="about-project">
      <div className="up-title up-title_project">
        <h2 className="up-title__text">О проекте</h2>
      </div>
      <div className="about-project__container">
        <h3 className="about-project__title">Дипломный проект включал 5 этапов</h3>
        <h3 className="about-project__title about-project__title_frond-end">На выполнение диплома ушло 5 недель</h3>
        <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <p className="about-project__text about-project__text_frond-end">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      <div className="about-project__time">
        <p className="about-project__limited about-project__limited__green ">1 неделя</p>
        <p className="about-project__limited about-project__limited__gray">4 недели</p>
        <span className="about-project__technologie">Back-end</span>
        <span className="about-project__technologie">Front-end</span>
      </div>

    </section>
  );
}

export default AboutProject;