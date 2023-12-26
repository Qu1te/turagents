import React from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "../pages/additional/NavBar";
import "../components/Header.css"
const Header = () => {


    return(
        <header>
            <div className="Headercontent">
                <div className="navigation-left">
                    <BurgerMenu/>
                    <nav className="navigation">
                        <ul>
                            <li><Link to="/Tur" className="turis">Туры</Link></li>
                            <li>Круизы</li>
                            <li>О нас</li>
                        </ul>
                    </nav>
                </div>
                
                <div className="navigation-right">
                    <p>+7 759 899 45 62</p>
                    <Link to="/Login"><button className="SignIn">Войти</button></Link>
                </div>
            </div>

        </header>
    )
}

export default Header;