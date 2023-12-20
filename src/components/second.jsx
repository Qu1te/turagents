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
                            <li><b>Туры</b></li>
                            <li><b>Круизы</b></li>
                            <li><b>О нас</b></li>
                            <li><b>Контакты</b></li>
                            <li><b>Виза</b></li>
                        </ul>
                    </nav>
                </div>
                <div className="nav-right">
                    <h2><a className="Number" href="https://www.youtube.com/watch?v=f8hdBhCnyDY">+7 800 555 3535</a></h2>
                    <button>Войти</button>      
                </div>

            </div>
        </div>
    )
}

export default Second;
