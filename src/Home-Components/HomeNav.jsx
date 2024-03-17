// CSS for Nav section html elements
import Style from "./HomeNav.module.css";

// Images used in this section
import navLogo from "../assets/NavBar/LevelUpWorks-white.png";
import userLogo from "../assets/NavBar/Avatar-white.png";
import NZFlag from "../assets/NavBar/NZFlag.png"
import MaoriFlag from "../assets/NavBar/MaoriFlag.png"

export default function HomeNav() {
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
          <li className={Style.navli}>HOME</li>
          <li>FEATURES</li>
          <li>TEACHERS</li>
        </ul>
      </div>

      {/*This div holds the login-register and lang links */}
      <div className={Style.navDivLogin}>
        
        <div className={Style.navDivLoginLangImgAndText}>
          <p className={Style.navLangText}>LANG</p>
          <img className={Style.navLangFlags} src={NZFlag} alt="" />
          <img className={Style.navLangFlags} src={MaoriFlag} alt="" />
        </div>

        <div className={Style.navDivLoginImgAndText}>
          <img className={Style.navUserLogo} src={userLogo} alt="" />
          <p className={Style.navRegisterLoginText}>REGISTER | LOGIN </p>
        </div>
      </div>
    </div>
  );
}
