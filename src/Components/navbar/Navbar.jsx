import React from 'react';
import './styles.css';
import { useState } from 'react';

import Logo from '../../assets/Img/Logobw.png';

function Navbar(){

  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };


  return (
    <>
       <nav className="navbar">
        <div className='navbar__container-logo-menu'>
              <div className="navbar__brand">
                <img src={Logo} className="navbar__logo"/>
              </div>
              <div className="navbar__hamburger" onClick={handleToggleMenu}>
                  <div className="navbar__hamburger-bar"></div>
                  <div className="navbar__hamburger-bar"></div>
                  <div className="navbar__hamburger-bar"></div>
                  
              </div>
          </div>
          <div className='navbar-menu'>
              <div className="navbar__menu-container">
                <ul className={`navbar__menu ${showMenu ? 'navbar__menu--show  ' : ''}`}>
                  <li className="navbar__item"><a href="#" className="navbar__link">Inicio</a></li>
                  <li className="navbar__item"><a href="#" className="navbar__link">Acerca de</a></li>
                  <li className="navbar__item"><a href="#" className="navbar__link">Servicios</a></li>
                  <li className="navbar__item"><a href="#" className="navbar__link">Contacto</a></li>
                </ul>
              </div>  
          </div>
    </nav>

    </>
  )
}

export default Navbar