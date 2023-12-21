import React , {useState} from "react";
import { Link } from 'react-router-dom';
import "../main/header-style.css"
const Header = () => {
    const [isSignIn,setsignIn] = useState (false)

    const openSignIn = () => {
        setsignIn(true);
      };
    
      const closeSignIn = () => {
        setsignIn(false);
      };

    return (
        <div className="container">
                <div className="navigation">
                    <div className="nav-left">
                        <div className="logo">
                            <a href="/"><h1>TUR</h1></a>
                        </div>
                        <nav className="nav-menu">
                            <ul className="menu">
                                <li>
                                    <Link to="/second">Туры</Link>
                                </li>
                                <li>Круизы</li>
                                <li>О нас</li>
                                <li>Контакты</li>
                                <li>Виза</li>
                            </ul>
                        </nav>
                    </div>
                    <div className="nav-right">
                        <h3 className="phone">+7 700 095 60 06</h3>
                        <button className="signUp" onClick={openSignIn}>Войти</button>
                        {isSignIn &&(
                            <div className="Box">
                                <div className="signInBox">
                                    <div className="hederbox">
                                        <button onClick={closeSignIn}>X</button>
                                    </div>
                                    <div className="centerBoxSignIn">
                                        <h2>Регистрация</h2>
                                        <input type="email" placeholder="email" />
                                        <input type="password" placeholder="password" />
                                        <button>Войти</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="quote">
                    <h1>Отпуск мечты без ожидания</h1>
                </div>
                <div className="From-here-to-here">
                    <div className="button-nav">
                        <input className="from" readOnly type="text" value="" placeholder="откуда"/>
                        <input className="to" readOnly type="text" value="" placeholder="куда"/>
                        <input type="text" placeholder="кол-во человек" readOnly/>
                        <input type="text" readOnly placeholder="дата" />
                        <button className="search">Найти</button>
                    </div>
                </div>
            </div>
    )
}

export default Header;