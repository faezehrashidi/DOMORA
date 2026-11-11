import style from "./Banner.module.css";
import Banner1 from "../../assets/banner/Banner1.png";
import Banner2 from "../../assets/banner/Banner2.png";
import Banner3 from "../../assets/banner/Banner3.png";
import Banner4 from "../../assets/banner/Banner4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
const Banner = () => {
  return (
    <>
      <section className={style.banner}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          loop={true}
          className={style.bannerSwiper}
        >
          <SwiperSlide>
            <img src={Banner1} alt="Banner1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Banner2} alt="Banner2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Banner3} alt="Banner3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Banner4} alt="Banner4" />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Banner;
