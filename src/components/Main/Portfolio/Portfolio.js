import React from "react";
import './Portfolio.css'
import arrow from '../../../images/arrow.svg'

function Portfolio() {
    return (
        <section className="portfolio">
            <h4 className="portfolio__title">Портфолио</h4>
            <ul className="portfolio__lists">
                <li className="portfolio__list">
                    <a className="portfolio__link" href="#" target="_blank" >
                        Статичный сайт
                    </a>
                    <img className="portfolio__image" src={arrow} alt="стрелка" />
                </li>
                <li className="portfolio__list">
                    <a className="portfolio__link" href="#" target="_blank" >
                    Адаптивный сайт
                    </a>
                    <img className="portfolio__image" src={arrow} alt="стрелка" />
                </li>
                <li className="portfolio__list">
                    <a className="portfolio__link" href="#" target="_blank" >
                    Одностраничное приложение
                    </a>
                    <img className="portfolio__image" src={arrow} alt="стрелка" />
                </li>
            </ul>
        </section>
    );
}

export default Portfolio