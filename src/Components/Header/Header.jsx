import DOMORA from "../../assets/logo/domora.png";
import { Link } from "react-router-dom";
import style from "./Header.module.css";
import { useState } from "react";
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <header>
        <div className={style.mobilehead}>
          <svg
            width="32px"
            height="32px"
            onClick={() => setOpenMenu(!openMenu)}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
          {openMenu && (
            <ul className={style.menu}>
              <button
                className="bg-transparent"
                onClick={() => setOpenMenu(false)}
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#fff"
                >
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              </button>
              <li>
                <Link to="">Home </Link>
              </li>
              <li>
                <Link to=""> Properties </Link>
              </li>
              <li>
                <Link to="">Buy </Link>
              </li>
              <li>
                <Link to="">Rent </Link>
              </li>
              <li>
                <Link to="">Investment</Link>
              </li>
              <li>
                <Link to="">Contact Us </Link>
              </li>
            </ul>
          )}
          <div className={style.logo}>
            <img src={DOMORA} alt="DOMORA" />
          </div>
          <div className={style.login}>
            <Link to="">Login </Link>
          </div>
        </div>
        <div className={style.head}>
          <div className={style.logo}>
            <img src={DOMORA} alt="DOMORA" />
          </div>
          <div className={style.menu}>
            <ul>
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to=""> Properties</Link>
              </li>
              <li>
                <Link to=""> Buy</Link>
              </li>
              <li>
                <Link to="">Rent</Link>
              </li>
              <li>
                <Link to="">Investment</Link>
              </li>
              <li>
                <Link to="">Contact Us </Link>
              </li>
            </ul>
          </div>
          <div className={style.login}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="#d4b483"
            >
              <path d="M367-527q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm296.5-343.5Q560-607 560-640t-23.5-56.5Q513-720 480-720t-56.5 23.5Q400-673 400-640t23.5 56.5Q447-560 480-560t56.5-23.5ZM480-640Zm0 400Z" />
            </svg>
            <Link to="">Login / Sign Up </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
