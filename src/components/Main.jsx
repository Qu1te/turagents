import React from "react";
import "../components/Main.css"

const Main = () => {
    return (
       <div className="Main">
            <div className="header">
                <div className="navPanel">
                    <nav className="headerLeft">
                        <ul className="list">
                            <li><a href="">Туры</a></li>
                            <li><a href="">Круизы</a></li>
                            <li><a href="">О компании</a></li>
                            <li><a href="">Контакты</a></li>
                            <li><a href="">Виза</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
       </div>
    )
}

export default Main;