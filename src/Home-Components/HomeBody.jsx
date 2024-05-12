import HomeBodySection1 from "./Home-Body-Components/HomeBodySection1"
import HomeBodySection2 from "./Home-Body-Components/HomeBodySection2"
import HomeBodySection3 from "./Home-Body-Components/HomeBodySection3"

// This component combines all the 3 parts of the body into one component
export default function HomeBody() {
  return (
    <>
      <HomeBodySection1 />
      <HomeBodySection2 />
      <HomeBodySection3 />
    </>
  );
}
