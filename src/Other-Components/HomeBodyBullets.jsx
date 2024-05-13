import logo from "../assets/Home/star.png";
import Style from "./HomeBodyBullets.module.css";

// Custom bullets component for Home -> Body -> Section 3
export default function HomeBodyBullets({ Title, Details }) {
    return (
        <div className={Style.BulletWrapper}>
            <div >
                <img className={Style.BulletPointImage} src={logo} alt="" />
            </div>
            <div>
                <p className={Style.BulletText}>{Title}</p>
                <p className={Style.BulletText}>{Details}</p>
            </div>
        </div>
 
    )
}