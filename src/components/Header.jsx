import React from "react";
import { Link } from "react-router-dom";
const Header = () => {


    return(
        <header>
            <div className="Headercontent">
                <div className="navigation-left">
                    <nav className="navigation">
                        <ul>
                            <li>Туры</li>
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