import React from "react";
import './PageNotFound.css'
import { NavLink } from 'react-router-dom';

function PageNotFound() {
    return (
        <section className="page-not-found">
            <div className="page-not-found__text">
                <p className="page-not-found__error">404</p>
                <p className="page-not-found__text">Страница не найдена</p>
            </div>
            <NavLink className="page-not-found__link" to="/tips">Назад</NavLink>
        </section>
    );
};

export default PageNotFound;