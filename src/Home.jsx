import HomeNav from "./Home-Components/HomeNav";
import HomeBody from "./Home-Components/HomeBody";
import HomeFooter from "./Home-Components/HomeFooter";
import Style from "./Home.module.css"

export default function Home() {
    return (

        <div className={Style.homeBody}>
          <HomeNav />
        </div>
      
    );
};