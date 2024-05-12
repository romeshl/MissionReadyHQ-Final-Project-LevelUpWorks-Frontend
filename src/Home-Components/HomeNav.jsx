// CSS for Nav section html elements
import Style from "./HomeNav.module.css";
import React, { useState } from "react";
import { Link } from "react-router-dom"

import Overlay from "react-overlay-component";

// Images used in this section
import navLogo from "../assets/NavBar/LevelUpWorks-white.png";
import userLogo from "../assets/NavBar/Avatar-white.png";
import NZFlag from "../assets/NavBar/NZFlag.png";
import MaoriFlag from "../assets/NavBar/MaoriFlag.png";

import LoginSignup from "..//LoginSignup";


export default function HomeNav({IsLogin, LoginStatus}) {

  const [userData, setUserData] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };


  const configs = {
    animate: true,
    // clickDismiss: false,
    // escapeDismiss: false,
    focusOutline: false,
  };

  return (
    // This div contains all the elements in nav section
    <div className={Style.navBackground}>
      {/*This div holds the website logo */}
      <div className={Style.navDivImg}>
        {/*Logo of the company */}
        <img className={Style.navImgLogo} src={navLogo} alt="" />
      </div>

      {/*This div holds the nav links */}
      <div className={Style.navDivLinks}>
        <ul className={Style.navLinks}>
          <li>
            <Link className={Style.navlink} to="/">
              HOME
            </Link>
          </li>
          <li>FEATURES</li>
          <li>TEACHERS</li>
        </ul>
      </div>

      {/*This div holds the login-register and lang links */}
      <div className={Style.navDivLogin}>
        {/*Language selector text and flags */}
        <div className={Style.navDivLoginLangImgAndText}>
          <p className={Style.navLangText}>LANG</p>
          <img className={Style.navLangFlags} src={NZFlag} alt="" />
          <img className={Style.navLangFlags} src={MaoriFlag} alt="" />
        </div>

        {/*Login and register links and image */}
        <div className={Style.navDivLoginImgAndText}>
          <Link className={Style.navlink} to="/">
            <img className={Style.navUserLogo} src={userLogo} alt="" />
          </Link>

          {!userData ?
            <>
              <p className={Style.navRegisterLoginText} onClick={() => { toggleOverlay(); LoginStatus(true) }}>
                Login
              </p>
              <p className={Style.navRegisterLoginText}>
                |
              </p>
              <p className={Style.navRegisterLoginText} onClick={() => { toggleOverlay(); LoginStatus(false) }}>
                Signup
              </p>
            </>
            :
            <p>test</p> }


          <LoginSignup StartOverlay={isOpen} CloseOverlay={toggleOverlay} IsLogin={IsLogin} LoginStatus={LoginStatus}/>
        </div>
      </div>
    </div>
  );
}
