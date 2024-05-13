// CSS for Nav section html elements
import Style from "./HomeNav.module.css";

import { useState } from "react";
import { Link } from "react-router-dom"

// Components used in this section
import Overlay from "../Other-Components/Overlay";
import ButtonSignUp from "../Other-Components/ButtonSignUp";
import LoginSignup from "..//LoginSignup";

// Images used in this section
import navLogo from "../assets/NavBar/LevelUpWorks-white.png";
import userLogo from "../assets/NavBar/Avatar-white.png";
import NZFlag from "../assets/NavBar/NZFlag.png";
import MaoriFlag from "../assets/NavBar/MaoriFlag.png";

// Nav section of the Home page 
// IsLogin and LoginStatus is passed down from Home to check and set Login vs Signup section in Login/Signup component
// UserName and SetUser is passed down from Home to hold and set logged in user
export default function HomeNav({ IsLogin, LoginStatus, UserName, SetUser }) {

  // this useState is used to open and close Login/Signup component
  const [isOpen, setIsOpen] = useState(false);
  function toggleOverlay() {
    setIsOpen(!isOpen);
  };

  // This useState variable opens and closes message box based on Overlay component
  const [OverlayMessageBox, setOverlayMessageBox] = useState(false);
  const ToggleMessageBox = () => {
    setOverlayMessageBox(!OverlayMessageBox);
  }

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
          
          {/* Checks if user is logged in and displays Login/Signup or user name based of that. */}
          {UserName==="" ?
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
            <p className={Style.navRegisterLoginText} onClick={ToggleMessageBox}>{UserName}</p>}
          {/* if a user is logged in and clicked on the name, below message box is displayed asking if you want log off */}
          <Overlay isOpen={OverlayMessageBox} onClose={ToggleMessageBox}>
            <div className={Style.MessageBoxStyling}>
              <h3 className={Style.h3Active}>Are you sure you want to log off?</h3>
              <div className={Style.MessageBoxStylingButtons}>
                <ButtonSignUp Text="Log off" Clicked={() => { SetUser("");  ToggleMessageBox(); }}/>
                <ButtonSignUp Text="Close" Clicked={ToggleMessageBox} />
              </div>
            </div>
          </Overlay>
          {/* Loads Login/Signup component based on the option selected */}
          <LoginSignup IsOpen={isOpen} ToggleOverlay={toggleOverlay} IsLogin={IsLogin} LoginStatus={LoginStatus} UserName={UserName} SetUser={SetUser} />
        </div>
      </div>
    </div>
  );
}
