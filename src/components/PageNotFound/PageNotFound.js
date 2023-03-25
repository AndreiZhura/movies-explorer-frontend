import React from "react";
import './PageNotFound.css'
import { NavLink } from 'react-router-dom';

function PageNotFound() {
    return (
        <section className="page-not-found">
            <div className="page-not-found__texts">
                <h3 className="page-not-found__error">404</h3>
                <p className="page-not-found__text">Страница не найдена</p>
            </div>
            <NavLink className="page-not-found__link" to="/">Назад</NavLink>
        </section>
    );
};

export default PageNotFound;