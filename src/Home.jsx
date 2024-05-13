import { useState } from "react";

// Components of the home page
import HomeNav from "./Home-Components/HomeNav";
import HomeBody from "./Home-Components/HomeBody";
import HomeFooter from "./Home-Components/HomeFooter";

// CSS styling 
import Style from "./Home.module.css";

// this component generates the completed home page
export default function Home() {

  // this useState holds and sets the logged in username
  const [userData, setUserData] = useState("");
  function setUser(user) {
    setUserData(user);
  }

  // this useState checks and sets login page or signup page based on the value
  const [IsLogin, setIsLogin] = useState(false);
  function setLoginStatus(status) {
    setIsLogin(status);
  }

  return (
    <div className={Style.homeBody}>
      <HomeNav IsLogin={IsLogin} LoginStatus={setLoginStatus}  UserName={userData} SetUser={setUser} />
      <HomeBody IsLogin={IsLogin} LoginStatus={setLoginStatus}  UserName={userData} SetUser={setUser} />
      <HomeFooter />
    </div>
  );
};