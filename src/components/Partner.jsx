import React from "react";
import ReactDOM from "react-dom/client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "../style/reset.scss";
import partnerStyles from "../style/partner.module.scss";
import blueLine from "../image/blueLine.svg";
import akkopd from "../image/kip-mcgrath-education-centres.svg";
import kuivstar from "../image/kyivstar-gsm.svg";
import mts from "../image/mts-logo-2015.svg";
import ukr from "../image/ukrtelekom.svg";

const Partner = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <>
      <section>
        <div className={partnerStyles.partner}>
          <div className={partnerStyles.partner__main}>
            <h1>Партнери</h1>
            <img src={blueLine} alt="Blue Line" />
          </div>
          <div className={partnerStyles.partner__wrapper}>
            <Swiper
              pagination={pagination}
              modules={[Pagination, Navigation, A11y]}
              className="mySwiper"
              speed={1000}
              navigation={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 20,
                },
                650: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  spaceBetween: 35,
                },
                1075: {
                  slidesPerView: 4,
                  slidesPerGroup: 4,
                  spaceBetween: 70,
                },
              }}
            >
              <SwiperSlide>
                <div className={partnerStyles.partner__image}>
                  <img src={kuivstar} alt="Kuivstar" />
                </div>

              </SwiperSlide>
              <SwiperSlide>
                <div className={partnerStyles.partner__image}>
                  <img src={mts} alt="Akkopd" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={partnerStyles.partner__image}>
                  <img src={ukr} alt="Kuivstar" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={partnerStyles.partner__image}>
                  <img src={akkopd} alt="Akkopd" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={partnerStyles.partner__image}>
                  <img src={kuivstar} alt="Kuivstar" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={partnerStyles.partner__image}>
                  <img src={mts} alt="Akkopd" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={partnerStyles.partner__image}>
                  <img src={ukr} alt="Kuivstar" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={partnerStyles.partner__image}>
                  <img src={akkopd} alt="Akkopd" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={partnerStyles.partner__image}>
                  <img src={kuivstar} alt="Kuivstar" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={partnerStyles.partner__image}>
                  <img src={mts} alt="Akkopd" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={partnerStyles.partner__image}>
                  <img src={ukr} alt="Kuivstar" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={partnerStyles.partner__image}>
                  <img src={akkopd} alt="akkopd" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
export default Partner;
