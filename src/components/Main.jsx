import React , {useState} from "react";
import { Link } from 'react-router-dom';
import "../components/Main.css"
import Head from "../img/gg.jpg"
import logo from "../img/logo.png"
const Main = () => {
    return (
            <div className="container">
                <div className="navigation">
                    <div className="nav-left">
                        <div className="logo">
                            <a href="/"><h1>TUR</h1></a>
                        </div>
                        <nav className="nav-menu">
                            <ul className="menu">
                                <li className="list">
                                    <Link to="/second">Туры</Link>
                                </li>
                                <li className="list">Круизы</li>
                                <li className="list">О нас</li>
                                <li className="list">Контакты</li>
                                <li className="list"s>Виза</li>
                            </ul>
                        </nav>
                    </div>
                    <div className="nav-right">
                        <h3 className="phone">+7 700 095 60 06</h3>
                        <button className="signUp">Войти</button>
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

export default Main;
