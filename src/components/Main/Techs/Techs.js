import React from "react";
import './Techs.css'
import '../common-Main/up-title.css'




function Techs(props) {

  return (
    <section className="tekhnologies">
      <div className="up-title up-title_tekhnologies">
        <h3 className="up-title__text">Технологии</h3>
      </div>
      <h2 className="tekhnologies__title">7 технологий</h2>
      <p className="tekhnologies__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="tekhnologies__lists">
        <li className="tekhnologies__list"> HTML</li>
        <li className="tekhnologies__list"> CSS</li>
        <li className="tekhnologies__list"> JS</li>
        <li className="tekhnologies__list"> React</li>
        <li className="tekhnologies__list"> Git</li>
        <li className="tekhnologies__list"> Express.js</li>
        <li className="tekhnologies__list">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;