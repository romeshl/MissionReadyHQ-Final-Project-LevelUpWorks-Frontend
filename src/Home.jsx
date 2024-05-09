import HomeNav from "./Home-Components/HomeNav";
import HomeBody from "./Home-Components/HomeBody";
import HomeFooter from "./Home-Components/HomeFooter";
import Style from "./Home.module.css";

//import LoginSignup from "./LoginSignup";

export default function Home() {
    return (
        <div className={Style.homeBody}>
            <HomeNav />
            <HomeBody />
            <HomeFooter />
        </div>
      
    );
};