import Drivers from "./Drivers.js";
import HomeSideBar from "./HomeSideBar.js";
import Map from "./Map.js";
import Progress from "./Progress.js";
import Rides from "./Rides.js";

const Home = () => {
  return (
    <>
      <div>
        <div className="grid grid-cols-[65%_32%]">
          <Drivers />
          <Rides />
        </div>
        <Map />
      </div>
      <div className="">
        <HomeSideBar />
      </div>
    </>
  );
};

export default Home;
