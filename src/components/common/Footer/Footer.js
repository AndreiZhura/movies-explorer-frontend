import React from "react";
import './Footer.css'

function Footer(props) {
    return (
        <footer className={props.isMovieFooter ? "footer footer_movies" : "footer"}>
            <p className={props.isMovieFooter ? "footer__title footer__title_movies" : "footer__title"}>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className={props.isMovieFooter ? "footer__info footer__info_movies" : "footer__info"}>
                <p className={props.isMovieFooter ? "footer__year footer__year_movies" : "footer__year"}>© 2023</p>
                <p className={props.isMovieFooter ? "footer__yandex footer__yandex_movies" : "footer__yandex"}>Яндекс.Практикум</p>
                <p className={props.isMovieFooter ? "footer__git footer__git_movies" : "footer__git"}>Github</p>
            </div>
        </footer>
    );
}

export default Footer;