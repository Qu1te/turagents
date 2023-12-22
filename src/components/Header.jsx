import React ,{useState}from "react";

const Header = () => {
    const [isSignIn,setsignIn] = useState(false)

    const openSignIn = () => {
        setsignIn(!isSignIn);
      };
    
  

    return(
        <header>
            <div className="conteiner">
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
                    <button className="SignIn" onClick={openSignIn}>Войти</button>
                    {isSignIn &&(
                        <div className="Box">
                            <div className="signInBox">
                                <div className="hederbox">
                                    <button onClick={openSignIn}>X</button>
                                </div>
                                <div className="centerBoxSignIn">
                                    <h2>Регистрация</h2>
                                    <input type="email" placeholder="email" />
                                    <input type="password" placeholder="password" />
                                    <button>Войти</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header;