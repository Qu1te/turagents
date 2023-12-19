import React from "react";
import './second.css';

const Second = () => {
    return (
        <div className="Header">
            <div className="navigation">
                <div className="nav-left">
                    <div className="logo">
                        <a href="">
                        <img src="" alt="" />
                        </a>
                    </div>
                    <nav className="nav-menu">
                        <ul className="menu">
                            <li>Туры</li>
                            <li>Круизы</li>
                            <li>О нас</li>
                            <li>Контакты</li>
                            <li>Виза</li>
                        </ul>
                    </nav>
                </div>
                <div className="nav-right">
                    <h2>+7 776 444 3693</h2>
                    <button>Войти</button>
                </div>

            </div>
        </div>
    )
}

export default Second;
