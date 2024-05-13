// Imports components to create the Home -> Body
import HomeBodySection1 from "./Home-Body-Components/HomeBodySection1"
import HomeBodySection2 from "./Home-Body-Components/HomeBodySection2"
import HomeBodySection3 from "./Home-Body-Components/HomeBodySection3"

// This component combines all the 3 parts of the body into one component
// IsLogin and LoginStatus is passed down from Home to check and set Login vs Signup section in Login/Signup component
// UserName and SetUser is passed down from Home to hold and set logged in user
export default function HomeBody({ IsLogin, LoginStatus, UserName, SetUser }) {
  return (
    <>
      <HomeBodySection1 IsLogin={IsLogin} LoginStatus={LoginStatus} UserName={UserName} SetUser={SetUser} />
      <HomeBodySection2 />
      <HomeBodySection3 IsLogin={IsLogin} LoginStatus={LoginStatus} UserName={UserName} SetUser={SetUser} />
    </>
  );
}
