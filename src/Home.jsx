import { useState } from "react";

import HomeNav from "./Home-Components/HomeNav";
import HomeBody from "./Home-Components/HomeBody";
import HomeFooter from "./Home-Components/HomeFooter";
import Style from "./Home.module.css";

export default function Home() {

  const [IsLogin, setIsLogin] = useState(false);

  function setLoginStatus(status) {
    setIsLogin(status);
  }

  return (
    <div className={Style.homeBody}>
      <HomeNav IsLogin={IsLogin} LoginStatus={setLoginStatus} />
      <HomeBody IsLogin={IsLogin} LoginStatus={setLoginStatus} />
      <HomeFooter />
    </div>
  );
};