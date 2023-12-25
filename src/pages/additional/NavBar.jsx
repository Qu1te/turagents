import React, {useState} from "react";
import "./NavBar.css"

const BurgerMenu = () => {
  const [MenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!MenuOpen);
  };

  return (
    <div className="burger-menu">
      <div className={`burger-icon ${MenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

      {MenuOpen && (
        <div className="menu-items">
          <a href="#">Туры</a>
          <a href="#">Круизы</a>
          <a href="#">О нас</a>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
