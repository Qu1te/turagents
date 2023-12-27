import React from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "../pages/additional/NavBar";

const Header = () => {
    return(
        <header>
            <div className="Headercontent">
                <div className="navigation-left">
                    <BurgerMenu/>
                    <nav className="navigation">
                        <ul>
                            <li><Link className="navigation__Link">Туры</Link></li>
                            <li><Link className="navigation__Link">Круизы</Link></li>
                            <li><Link to="/about" className="navigation__Link">О нас</Link></li>
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