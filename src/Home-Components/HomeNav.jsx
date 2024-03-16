import Style from "./HomeNav.module.css"
import LevelUpWorksWhite from "../assets/NavBar/LevelUpWorks-white.png"

export default function HomeNav() {
    return (
      <div className={Style.navBackground}>
        <div className={Style.navDivLogo}>
          <img className={Style.navImgLogo} src={LevelUpWorksWhite} alt="" />
        </div>
        <div className={Style.navDivLogo}></div>
        <div className={Style.navDivLogo}></div>
      </div>
    );
}