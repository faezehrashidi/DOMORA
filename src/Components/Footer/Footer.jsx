import { Link } from "react-router-dom";
import style from "./Footer.module.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className={style.footertable}>
          <div className={style.QuickLinks}>
            <h5>Quick Links</h5>
            <ul>
              <li>
                <Link to="#">Home</Link>
              </li>
              <li>
                <Link to="#">About Us</Link>
              </li>
              <li>
                <Link to="#">Our Services</Link>
              </li>
              <li>
                {" "}
                <Link to="#">Our Clients</Link>
              </li>
            </ul>
          </div>
          <div className={style.Properties}>
            <h5>Property Categories</h5>
            <ul>
              <li>
                <Link to="#">Apartments</Link>
              </li>
              <li>
                <Link to="#">Villas </Link>
              </li>
              <li>
                <Link to="#">Houses</Link>
              </li>
              <li>
                <Link to="#">Land</Link>
              </li>
            </ul>
          </div>
          <div className={style.ContactUs}>
            <h5>Contact Information</h5>
            <div className={style.email}>
              <span>Email Address : </span>
              <Link to="#"> info@domora.com</Link>
            </div>
            <div className={style.phone}>
              <span>Phone Number : </span>
              <Link to="#"> +1 (555) 123-4567 </Link>
            </div>
            <div className={style.Address}>
              <span>Office Address : </span>
              <Link to="#">123 Real Estate Avenue, New York, NY</Link>
            </div>
          </div>
          <div className={style.Follow}>
            <h5>Follow Us</h5>
            <div className={style.logo}>
              <svg
                viewBox="0 -0.5 25 25"
                width="34px"
                height="34px"
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
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.5 5H9.5C7.29086 5 5.5 6.79086 5.5 9V15C5.5 17.2091 7.29086 19 9.5 19H15.5C17.7091 19 19.5 17.2091 19.5 15V9C19.5 6.79086 17.7091 5 15.5 5Z"
                    stroke="#C5C9B9"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.5 15C10.8431 15 9.5 13.6569 9.5 12C9.5 10.3431 10.8431 9 12.5 9C14.1569 9 15.5 10.3431 15.5 12C15.5 12.7956 15.1839 13.5587 14.6213 14.1213C14.0587 14.6839 13.2956 15 12.5 15Z"
                    stroke="#C5C9B9"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <rect
                    x="15.5"
                    y="9"
                    width="2"
                    height="2"
                    rx="1"
                    transform="rotate(-90 15.5 9)"
                    fill="#C5C9B9"
                  ></rect>{" "}
                  <rect
                    x="16"
                    y="8.5"
                    width="1"
                    height="1"
                    rx="0.5"
                    transform="rotate(-90 16 8.5)"
                    stroke="#C5C9B9"
                    stroke-linecap="round"
                  ></rect>{" "}
                </g>
              </svg>
              <svg
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
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
                    d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"
                    fill="#C5C9B9"
                  ></path>{" "}
                  <path
                    d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"
                    fill="#C5C9B9"
                  ></path>{" "}
                  <path
                    d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"
                    fill="#C5C9B9"
                  ></path>{" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
                    fill="#C5C9B9"
                  ></path>{" "}
                </g>
              </svg>
              <svg
                viewBox="0 0 192 192"
                width="28px"
                height="28px"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    stroke="#C5C9B9"
                    stroke-linecap="round"
                    stroke-width="12"
                    d="M96 170c40.869 0 74-33.131 74-74 0-40.87-33.131-74-74-74-40.87 0-74 33.13-74 74 0 40.869 33.13 74 74 74Zm0 0v-62m30-48h-10c-11.046 0-20 8.954-20 20v28m0 0H74m22 0h22"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <span>© 2026 DOMORA. All Rights Reserved.</span>
      </footer>
    </>
  );
};

export default Footer;
