import React, { useEffect, useState } from "react";
import Header from "../components/Header"
import Footer from "../components/Footer";
import "../pages/Tur.css"
import { useLocation } from "react-router-dom";
const Tur = () => {
    const [selected,setSelected] = useState("");
    const {state} = useLocation();

    useEffect(()=>{
        
        const {title} = state;
        if (title){
            setSelected(title);
        }
    }, [])

    return (
        <div>
            
            <Header/>
            <div className="page">
            {
                selected === "maldiv" ? (<>
                    <div className="maldiv">
                        <img src="/maldiv.jpg" alt="" className="img-maldiv"/>
                        <b><p className="text-maldiv">Мальдивы — это ожившие картинки рекламы. Белоснежные песчаные пляжи, пальмы и бескрайний бирюзовый 
                            океан манят туристов со всего мира. Природа — это и есть главная достопримечательность Мальдив.</p></b>
                        <b><button className="but-maldiv">Купить</button></b>
                    </div>

                </>) :  selected === "barselona" ? (<>
                    <div className="barc">
                        <img src="/barcelona.jpg" alt="" className="img-barc"/>
                        <b><p className="text-barc">Барселона — это живописная палитра культуры и искусства. Здесь готические кварталы соседствуют с современными зданиями, а узкие улочки ведут к широким проспектам. 
                            Главные достопримечательности — это величественные соборы, музеи и знаменитые работы Гауди. Барселона — это город, который никогда не спит и всегда радует своих гостей.</p></b>
                        <b><button className="but-barc">Купить</button></b>
                    </div>

                </>) : selected === "dubai" ? (<>
                    <div className="dubai">
                        <img src="/dubai.jpg" alt="" className="img-dubai"/>
                        <b><p className="text-dubai">Дубай — это воплощение роскоши и инноваций. Этот город будущего удивляет своими небоскребами, включая знаменитый Бурдж-Халифа, и искусственными островами в форме пальмы. 
                            Здесь можно найти самые роскошные отели мира, великолепные торговые центры и даже лыжный курорт в пустыне. Дубай — это место, где восточные традиции встречаются с западным стилем жизни.</p></b>
                        <b><button className="but-dubai">Купить</button></b>
                    </div>

                </>) :selected === "egyp" ? (<>
                    <div className="egyp">
                        <img src="/Egypt.jpg" alt="" className="img-egyp"/>
                        <b><p className="text-egyp">Египет — это страна, где древняя история встречается с современностью. Здесь можно увидеть величественные пирамиды, сфинкса и многочисленные археологические памятники, которые рассказывают о богатой истории древних цивилизаций. 
                            Кроме того, Египет известен своими красивыми пляжами на Красном море, которые идеально подходят для дайвинга и сноркелинга. Египет — это место, где можно погрузиться в уникальную культуру и историю.</p></b>
                        <b><button className="but-egyp">Купить</button></b>
                    </div>

                </>) : selected === "ind" ? (<>
                    <div className="ind">
                        <img src="/india.jpg" alt="" className="img-ind"/>
                        <b><p className="text-ind">Индия — это страна контрастов, где древние традиции соседствуют с современными технологиями. Здесь можно увидеть величественные храмы, цветные рынки и бесконечные плантации чая. 
                            Индия известна своей богатой культурой, включая йогу, медитацию и вкусную кухню. Это страна, которая оставляет неизгладимые впечатления своими яркими красками, запахами и звуками.</p></b>
                        <b><button className="but-ind">Купить</button></b>
                    </div>

                </>) : selected === "paris" ? (<>
                    <div className="paris">
                        <img src="/paris.jpg" alt="" className="img-paris"/>
                        <b><p className="text-paris">Париж — это город света и любви, известный своими узнаваемыми достопримечательностями, такими как Эйфелева башня, Лувр и Собор Парижской Богоматери. Здесь каждая улочка наполнена историей, а каждый кафе пропитано атмосферой романтики. Париж — это место, где искусство, мода, гастрономия и культура сливаются воедино, создавая неповторимый образ этого великолепного города.</p></b>
                        <b><button className="but-paris">Купить</button></b>
                    </div>
                </>) : (<></>)
            }
                </div>
            <Footer/>
        </div>
    )
}

export default Tur; 
