import React from "react";
import './Footer.css'

function Footer(){
    return(
    <footer className="footer">
        <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__info">
        <p className="footer__year">© 2023</p>
        <p className="footer__yandex">Яндекс.Практикум</p>
        <p className="footer__git">Github</p>
        </div>
    </footer>
    );
}

export default Footer;