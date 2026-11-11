import { Link } from "react-router-dom";
import style from "./Search.module.css";
const Search = () => {
  return (
    <>
      <section className={style.search}>
        <div className={style.searchbox}>
          <div className={style.searchrow}>
            <div className={style.location}>
              <div className={style.title}>
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
                      d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                      stroke="#d4b483"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
                      stroke="#d4b483"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
                <label htmlFor="location">Location </label>
              </div>
              <input id="location" type="text" placeholder="Select Location " />
            </div>
            <div className={style.propertyType}>
              <div className={style.title}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#d4b483"
                >
                  <path d="M200-160v-366L88-440l-48-64 440-336 160 122v-82h120v174l160 122-48 64-112-86v366H520v-240h-80v240H200Zm80-80h80v-240h240v240h80v-347L480-739 280-587v347Zm120-319h160q0-32-24-52.5T480-632q-32 0-56 20.5T400-559Zm-40 319v-240h240v240-240H360v240Z" />
                </svg>
                <label htmlFor="propertyType"> Property Type </label>
              </div>
              <input id="propertyType" type="text" placeholder="	All Types " />
            </div>
          </div>
          <div className={style.filterrow}>
            <div className={style.TransactionType}>
              <div className={style.title}>
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
                      d="M18 8L6 8M6 8L10.125 4M6 8L10.125 12"
                      stroke="#d4b483"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      opacity="0.5"
                      d="M6 16L18 16M18 16L13.875 12M18 16L13.875 20"
                      stroke="#d4b483"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
                <label htmlFor="TransactionType">Transaction Type</label>
              </div>
              <input
                id="TransactionType"
                type="text"
                placeholder="All Types "
              />
            </div>
            <div className={style.PriceRange}>
              <div className={style.title}>
                <svg
                  version="1.0"
                  width="20px"
                  height="20px"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 64 64"
                  enable-background="new 0 0 64 64"
                  xml:space="preserve"
                  fill="#000000"
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
                      fill="#d4b483"
                      d="M62.828,29.172l-28-28C34.078,0.422,33.062,0,32,0H4C1.789,0,0,1.789,0,4v28 c0,1.062,0.422,2.078,1.172,2.828l28,28C29.953,63.609,30.977,64,32,64s2.047-0.391,2.828-1.172l28-28 C64.391,33.266,64.391,30.734,62.828,29.172z M20,28.004c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S24.418,28.004,20,28.004z"
                    ></path>{" "}
                  </g>
                </svg>
                <label htmlFor="PriceRange"> Price Range </label>
              </div>
              <input id="PriceRange" type="text" placeholder="$" />
            </div>
          </div>
          <div className={style.box}>
            <div className={style.Area}>
              <div className={style.title}>
                <svg
                  fill="#d4b483"
                  height="24px"
                  width="24px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 370 370"
                  xml:space="preserve"
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
                      id="XMLID_1070_"
                      d="M270,165V65H0v140h100v100h270V165H270z M313.216,234.932c-1.301-1.3-1.301-3.417,0-4.716L330,213.432 v38.285L313.216,234.932z M40,165v-60h35v20h40v-20h40v20h40v-20h35v60H100H40z M140,205h130h12.149 c-14.05,17.007-13.126,42.306,2.783,58.216l1.784,1.784H215v-20h-40v20h-35V205z"
                    ></path>{" "}
                  </g>
                </svg>
                <label htmlFor="Area"> Area </label>
              </div>
              <input id="Area" type="text" placeholder="	Square Meters " />
            </div>
            <div className={style.searchbtn}>
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
                    d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                    stroke="#d4b483"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              <Link to="#"> Search Properties </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
