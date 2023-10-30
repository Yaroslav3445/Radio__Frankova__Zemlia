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


const Partner = () => {
  return (
    <>

      {/* <section>
        <div className='partner'>
          <div className='partner__main'>
            <h1>Партнери</h1><img src={blueLine} />
          </div>
          <div className='partner__wrapper'>
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              speed={1000}
              spaceBetween={40}
              slidesPerView={4}
              slidesPerGroup={4}
              navigation
              pagination={{
                type: 'fraction'
              }}

            >
              <SwiperSlide><img src={kuivstar} /></SwiperSlide>
              <SwiperSlide><img src={akkopd} /></SwiperSlide>
              <SwiperSlide><img src={kuivstar} /></SwiperSlide>
              <SwiperSlide><img src={akkopd} /></SwiperSlide>
              <SwiperSlide><img src={kuivstar} /></SwiperSlide>
              <SwiperSlide><img src={akkopd} /></SwiperSlide>
              <SwiperSlide><img src={kuivstar} /></SwiperSlide>
              <SwiperSlide><img src={akkopd} /></SwiperSlide>
              <SwiperSlide><img src={kuivstar} /></SwiperSlide>
              <SwiperSlide><img src={akkopd} /></SwiperSlide>
              <SwiperSlide><img src={kuivstar} /></SwiperSlide>
              <SwiperSlide><img src={akkopd} /></SwiperSlide>
              <SwiperSlide><img src={kuivstar} /></SwiperSlide>
              <SwiperSlide><img src={akkopd} /></SwiperSlide>
              <SwiperSlide><img src={kuivstar} /></SwiperSlide>
              <SwiperSlide><img src={akkopd} /></SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section> */}
      <section>
        <div className={partnerStyles.partner}>
          <div className={partnerStyles.partner__main}>
            <h1>Партнери</h1>
            <img src={blueLine} alt="Blue Line" />
          </div>
          <div className={partnerStyles.partner__wrapper}>
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              speed={1000}
              spaceBetween={40}
              slidesPerView={4}
              slidesPerGroup={4}
              navigation
              pagination={{
                type: 'fraction'
              }}
            >
              <SwiperSlide><img src={kuivstar} alt="Kuivstar" /></SwiperSlide>
              <SwiperSlide><img src={akkopd} alt="Akkopd" /></SwiperSlide>
              <SwiperSlide><img src={kuivstar} alt="Kuivstar" /></SwiperSlide>
              <SwiperSlide><img src={akkopd} alt="Akkopd" /></SwiperSlide>
              <SwiperSlide><img src={kuivstar} alt="Kuivstar" /></SwiperSlide>
              <SwiperSlide><img src={akkopd} alt="Akkopd" /></SwiperSlide>
              <SwiperSlide><img src={kuivstar} alt="Kuivstar" /></SwiperSlide>
              <SwiperSlide><img src={akkopd} alt="Akkopd" /></SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  )
};
export default Partner