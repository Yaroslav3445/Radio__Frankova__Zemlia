import React from 'react'
import ReactDOM from 'react-dom/client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import '../style/reset.scss'
import partnerStyles from '../style/partner.module.scss'
import blueLine from '../image/blueLine.svg'
import kuivstar from '../image/kuivstar.png'
import akkopd from '../image/akkopd.png'
import arrowPrew from '../image/arrow-prew.svg'
import arrowNext from '../image/arrow-next.svg'
import pyramid from '../image/pyramid.png'


const Partner = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
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
              spaceBetween={70}
              slidesPerView={4}
              slidesPerGroup={4}
              navigation={true}
            >
              <SwiperSlide><img src={kuivstar} alt="Kuivstar" /></SwiperSlide>
              <SwiperSlide><img src={akkopd} alt="Akkopd" /></SwiperSlide>
              <SwiperSlide><img src={kuivstar} alt="Kuivstar" /></SwiperSlide>
              <SwiperSlide><img src={akkopd} alt="Akkopd" /></SwiperSlide>
              <SwiperSlide><img src={kuivstar} alt="Kuivstar" /></SwiperSlide>
              <SwiperSlide><img src={akkopd} alt="Akkopd" /></SwiperSlide>
              <SwiperSlide><img src={kuivstar} alt="Kuivstar" /></SwiperSlide>
              <SwiperSlide><img src={akkopd} alt="Akkopd" /></SwiperSlide>
              <SwiperSlide><img src={kuivstar} alt="Kuivstar" /></SwiperSlide>
              <SwiperSlide><img src={akkopd} alt="Akkopd" /></SwiperSlide>
              <SwiperSlide><img src={kuivstar} alt="Kuivstar" /></SwiperSlide>
              <SwiperSlide><img src={akkopd} alt="Akkopd" /></SwiperSlide>
            </Swiper>
            <img className={partnerStyles.partner__pyramid} src={pyramid}  alt='pyramid'/>
          </div>
        </div>
      </section>
    </>
  )
};
export default Partner