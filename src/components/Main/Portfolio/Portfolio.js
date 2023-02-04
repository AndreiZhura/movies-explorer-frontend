import React from "react";
import './Portfolio.css'
import arrow from '../../../images/arrow.svg'

function Portfolio() {
    return (
        <section className="portfolio">
            <h4 className="portfolio__title">Портфолио</h4>
            <ul className="portfolio__lists">
                <li className="portfolio__list">
                    <a className="portfolio__link" href="https://github.com/AndreiZhura/how-to-learn" target="_blank" >
                        Статичный сайт
                    <img className="portfolio__image" src={arrow} alt="стрелка" />
                    </a>
                </li>
                <li className="portfolio__list">
                    <a className="portfolio__link" href="https://github.com/AndreiZhura/russian-travel" target="_blank" >
                    Адаптивный сайт
                    <img className="portfolio__image" src={arrow} alt="стрелка" />
                    </a>
                </li>
                <li className="portfolio__list">
                    <a className="portfolio__link" href="https://andreizhura.nomoredomains.club/sign-up" target="_blank" >
                    Одностраничное приложение
                    <img className="portfolio__image" src={arrow} alt="стрелка" />
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio