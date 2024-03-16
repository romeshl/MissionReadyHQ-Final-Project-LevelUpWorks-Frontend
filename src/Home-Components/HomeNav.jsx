import Style from "./HomeNav.module.css";
import navLogo from "../assets/NavBar/LevelUpWorks-white.png";
import userLogo from "../assets/NavBar/Avatar-white.png";

export default function HomeNav() {
  return (
    <div className={Style.navBackground}>
      <div className={Style.navDivImg}>
        <img className={Style.navImgLogo} src={navLogo} alt="" />
      </div>
      <div className={Style.navDivLinks}>
        <ul className={Style.navLinks}>
          <li>HOME</li>
          <li>FEATURES</li>
          <li>TEACHERS</li>
        </ul>
      </div>
      <div className={Style.navDivLogin}>
         <div className={Style.navDivLoginLang}>
          <img className={Style.navUserLogo} src={userLogo} alt="" />
          <p className={Style.navRegisterLoginText}>REGISTER LOGIN </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}
