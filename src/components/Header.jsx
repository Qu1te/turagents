import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BurgerMenu from "../pages/additional/NavBar";

const Header = () => {
    
    const navigate = useNavigate();

    const navigateMaldiv = ()=>{
        navigate('/tur', {state: {title: "ind"}})
    }

    return(
        <header>
            <div className="Headercontent">
                <div className="navigation-left">
                    <BurgerMenu/>
                    <nav className="navigation">
                        <ul>
                            <li onClick={navigateMaldiv}>Туры</li>
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