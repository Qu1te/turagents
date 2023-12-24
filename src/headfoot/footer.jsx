import React from "react";
import '../headfoot/footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="left">
                <h3 className="call">Единый колл-центр:</h3>
                <h2><a className="phone-num" href="https://www.youtube.com/watch?v=BXVWeexuaZs">+7 800 555 35 35</a></h2>
                <p><b>Время работы каждый день с 10:00 до 22:00</b></p>
            </div>
            <div className="customers">
                <h1>Покупателям:</h1>
                <nav>
                    <ul className="cust-li">
                        <li><b>Вопросы и ответы</b></li>
                        <li><b>Оплата онлайн</b></li>
                        <li><b>Правила бронирования</b></li>
                    </ul>
                </nav>
            </div>
            <div className="company">
                <h1>О компании:</h1>
                <nav>
                    <ul className="com-li">
                        <li><b>Адрес и контакты</b></li>
                        <li><b>Партнёры</b></li>
                    </ul>
                </nav>
            </div>
            <div className="social">
                <h1>Мы в социальных сетях:</h1>
            </div>
            <div className="terms">
                <b>Продолжая пользоваться нашим сайтом, вы обязуетесь поставить нам зачет за симестр.</b>
            </div>
        </div>
    )
}

export default Footer;
