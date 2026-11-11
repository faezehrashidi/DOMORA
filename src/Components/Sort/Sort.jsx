import HomesandVillas from "../../assets/sortImage/Homes and Villas.png";
import Apartment from "../../assets/sortImage/Apartment.png";
import Commercial from "../../assets/sortImage/Commercial.png";
import LandandPlot from "../../assets/sortImage/Land and Plot.png";
import DailyRental from "../../assets/sortImage/Daily Rental.png";
import GardenandVilla from "../../assets/sortImage/Garden and Villa.png";
import { Link } from "react-router-dom";
import style from "./Sort.module.css";
const Sort = () => {
  return (
    <>
      <section className={style.sort}>
        <div className={style.head}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#d4b483"
          >
            <path d="M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z" />
          </svg>
          <h2>Property Categories </h2>
        </div>
        <div className={style.chart}>
          <div className={style.title}>
            <Link to="">Houses & Villas </Link>
            <img src={HomesandVillas} alt="HomesandVillas" />
          </div>
          <div className={style.title}>
            <Link to="">Apartment</Link>
            <img src={Apartment} alt="Apartment" />
          </div>
          <div className={style.title}>
            <Link to="">Commercial Property </Link>
            <img src={Commercial} alt="Commercial" />
          </div>
          <div className={style.title}>
            <Link to="">Land & Plots</Link>
            <img src={LandandPlot} alt="LandandPlot" />
          </div>
          <div className={style.title}>
            <Link to="">Daily Rentals</Link>
            <img src={DailyRental} alt="DailyRental" />
          </div>
          <div className={style.title}>
            <Link to="">Gardens & Villas</Link>
            <img src={GardenandVilla} alt="GardenandVilla" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Sort;
