import style from "./Home.module.css";
import Banner from "../../Components/Banner/Banner";
import Search from "../../Components/Search/Search";
import Sort from "../../Components/Sort/Sort";
import Service from "../../Components/Service/Service";
import Whydomora from "../../Components/WhyDOMORA/Whydomora";
import Clients from "../../Components/Clients/Clients";
import Featured from "../../Components/Featured/Featured";

const Home = () => {
  return (
    <>
      <div className={style.herosection}>
        <Banner />
        <Search />
      </div>
      <Sort />
      <Featured />
      <Service />
      <Whydomora />
      <Clients />
    </>
  );
};

export default Home;
