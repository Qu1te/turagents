import React from "react";
import "../components/mald.css"

const center = () => {
    return (
        <>
        <div className="first">
            <h1 className="top-text">Мальдивы - это...</h1>
        </div>
        <div className="top">
            <img src="1.jpg" alt="" className="left-img" />
            <h2 className="first-text">Мальдивы — это ожившие картинки рекламы. Белоснежные песчаные пляжи, пальмы и бескрайний бирюзовый 
            океан манят туристов со всего мира. Природа — это и есть главная достопримечательность Мальдив. </h2>
        </div>
        <div className="buttons">
            <div><button className="but1"><b>Назад</b></button></div>
            <div><button className="but2"><b>Дальше</b></button></div>
        </div>
        <div className="under">
            <h1 className="interesting">Что интересного на Мальдивах?</h1>
            <img src="2.jpg" alt="" className="second-img"/>
            <h2 className="second-text">Мальдивы - это одна из самых низкорасположенных стран мира, в который средняя высота над уровнем моря состовляет 
            всего 1.5 метра. Большенство остравов на Мальдивах расположенны на кораловых атоллах, образованных крупными кораловыми рифами.</h2>
        </div>
        <div className="but-un">
            <button className="menu-un">На главную</button>
        </div>
        </>
    )
}

export default center;