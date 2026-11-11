import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import style from "./Featured.module.css";
import FetchAll from "../../hooks/fetchall";
const Featured = () => {
  const featured = FetchAll("https://domora-fx0w.onrender.com/Featured");
  return (
    <>
      <section className={style.featured}>
        <div className={style.head}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height="24px"
            width="24px"
            fill="#d4b483"
          >
            <path d="M6,19H9V13h6v6h3V10L12,5.5L6,10v9ZM4,21V9l8-6l8,6V21H13V15H11v6H4Zm8-8.75Z" />
          </svg>
          <h2>Discover Our Featured Properties</h2>
        </div>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          loop={true}
          breakpoints={{
            400: {
              slidesPerView: 2.1,
            },
            600: {
              slidesPerView: 3.5,
            },
            1200: {
              slidesPerView: 5,
            },
          }}
          className={style.featuredSwiper}
        >
          {featured?.map((elem) => {
            return (
              <SwiperSlide key={elem.id}>
                <div className={style.card}>
                  <img src={elem.src} alt={elem.alt} />
                  <div className={style.content}>
                    <h3>{elem.title}</h3>
                    <p>{elem.type}</p>
                    <h4>{elem.price}</h4>
                    <div className={style.info}>
                      <span>{elem.location}</span>
                      <span>{elem.area}</span>
                    </div>
                    <p>{elem.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default Featured;
