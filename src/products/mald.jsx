import React from "react";
import "./mald.css"
import MaldivAbaut from "../img/MaldivAbout.jpeg"
const MaldivInfo = () => {

    return (
        <main className="Main__Maldiv">
            <div className="about__Maldiv">
                <div className="about__Maldiv__Left">
                    <img src={MaldivAbaut} alt="" />
                </div>
                <div className="about__Maldiv__right">
                    <h2>
                    Мальдивы – это тропический рай в Южной части Индийского океана, состоящий 
                    из 26 атоллов и более 1,000 коралловых островов.
                    Поездка на Мальдивы обещает незабываемые впечатления, будь то романтический отдых, активный отдых на природе или погружение в удивительный подводный мир.
                    </h2>
                </div>
            </div>
            <div className="whats__interesting__about">
                <h1>Что интересного в Мальдивы? </h1>
            </div>

            
            <div className="button__further__and__back">
                <button className="further">Преведушее</button>
                <button className="back">Далее</button>
            </div>
            
            <div className="fact__about__Maldiv">
                <div className="fact__about__Maldiv__Left">
                    <img src={MaldivAbaut} alt="" />
                </div>
                <div className="fact__about__Maldiv__right">
                    <h2>
                    это тропический рай в Индийском океане, состоящий из более чем 1 000 
                    коралловых островов, разбросанных по 26 атоллам. Этот район привлекает 
                    туристов своими кристально чистыми водами, белоснежными пляжами, богатым подводным миром и роскошными курортами. Вот несколько интересных аспектов о Мальдивах:
                    </h2>
                </div>
            </div>
        </main>
    )
}

export default MaldivInfo;