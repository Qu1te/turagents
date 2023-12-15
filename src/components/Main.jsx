import React , {useState} from "react";
import "../components/Main.css"
import Head from "../img/gg.jpg"
import logo from "../img/logo.png"
const Main = () => {


    return (
       <div className="Main">
            <div className="header">
                <nav className="navbar"> 
                    <div className="container-left">
                        <a href="http://localhost:3000/"><img src={logo} alt="" /></a>

                        <div className="navbar-wrap">
                            <ul className="navbar-menu">
                                <li><a href="#">Туры</a></li>
                                <li><a href="#">Круизы</a></li>
                                <li><a href="#">О компании</a></li>
                                <li><a href="#">Контакты</a></li>
                                <li><a href="#">Виза</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="container-right">
                        <p><a href="#">+7 700 095 60 06</a></p>
                        
                        <div className="SignUp">
                            <button>Войти</button>
                        </div>
                    </div>


                </nav>
                <div className="quote">
                    <h2>Путешествовать необходимо тем, кто учится</h2>
                </div>
                <div className="sale">
                    <h4>Рассрочка на все туры </h4>
                </div>

                <div className="header-footer">
                    <button className="dropbtn">откуда</button>
                    <button className="dropbtn">куда</button>
                    <button className="dropbtn">дата</button>
                    <button className="dropbtn">пасажиров</button>
                    <button className="search">найти</button>
                </div>
            </div>
            <div className="center">
                
            </div>
            <div className="footer">
                <p>gg</p>
            </div>
       </div>
    )
}

export default Main;
