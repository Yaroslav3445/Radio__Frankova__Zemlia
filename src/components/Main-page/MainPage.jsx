import React from 'react'
import ReactDOM from 'react-dom/client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import '../reset.scss'
import './mainPage.scss'
import bus from '../../image/bus.png'
import portret from '../../image/portret.png'
import background from '../../image/background.png'
import flower from '../../image/flower.png'
import spheres from '../../image/spheres.png'
import yellowLine from '../../image/yellowLine.svg'
import helix from '../../image/helix.png'
import command1 from '../../image/command-portret1.png'
import command2 from '../../image/command-portret2.png'
import command3 from '../../image/command-portret3.png'
import command4 from '../../image/command-portret4.png'
import thors from '../../image/thorus.png'
import blueLine from '../../image/blueLine.svg'
import cube from '../../image/cube.png'
import knot from '../../image/Knot.png'
import podcastFoto1 from '../../image/podcast-foto1.jpg'
import podcastFoto2 from '../../image/podcast-foto2.jpg'
import podcastFoto3 from '../../image/podcast-foto3.jpg'
import podcastFoto4 from '../../image/podcast-foto4.jpg'
import podcastFoto5 from '../../image/podcast-foto5.jpg'
import kuivstar from '../../image/kuivstar.png'
import akkopd from '../../image/akkopd.png'
import arrowPrew from '../../image/arrow-prew.svg'
import arrowNext from '../../image/arrow-next.svg'
function MainPage() {
    return (
        <>
            <section>
                <div className='illustration'>
                    <div className='illustration__wrapper'>
                        <div className='illustration__ether'>
                            <div className='illustration__button'>
                                <div className='illustration__triangle'></div>
                                <div className='illustration__info'>
                                    <span className='illustration__text-big'>БЛа бла бал</span>
                                    <span className='illustration__text'>Зараз в ефірі</span>
                                </div>
                            </div>
                            <div className='illustration__bus'><img src={bus} /></div>
                        </div>
                        <div className='illustration__image'>
                            <div className='illustration__flower'><img src={flower} /></div>
                            <div className='illustration__background'><img src={background} /></div>
                            <div className='illustration__hero'><img src={portret} /></div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='schedule'>
                    <div className='schedule__link'>
                        <img className='schedule__spheres' src={spheres} /><h1 className='schedule__h1'>Розклад</h1><img className='schedule__yellow-line' src={yellowLine} />
                    </div>
                    <div className='schedule__table-wrap'>
                        <table className='schedule__table'>
                            <thead>
                                <tr className='schedule__tr schedule__tr-head'>
                                    <th>Сьогодні у програмі</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='schedule__tr'>
                                    <td className='schedule__td'>10:00 - 11:00</td>
                                    <td className='schedule__td-text'><h2>Новини дня</h2><p></p>
                                    </td>
                                </tr>
                                <tr className='schedule__tr'>
                                    <td className='schedule__td'>12:00 - 13:45</td>
                                    <td className='schedule__td-text'><h2>Про культуру</h2><p>Валерія Чикириса - художнього керівника та диригента муніципального естрадно-симфонічного оркестру і ансамблю саксофоністів, активного учасника перформансів для збору коштів на потреби ЗСУ;</p></td>
                                </tr>
                                <tr className='schedule__tr'>
                                    <td className='schedule__td'>10:00 - 11:00</td>
                                    <td className='schedule__td-text'><h2>Програма Франкова Земля</h2><p>
                                    </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <img className='schedule__helix' src={helix} />
                    </div>
                </div>
            </section>
            <section>
                <div className='podcast'>
                    <img className='podcast__knot' src={knot} />
                    <div className='podcast__main'>
                        <h1>Підкасти</h1><img className='podcast__blueLine' src={blueLine} />
                    </div>
                    <ul className='podcast__list-column-1  podcast__list'>
                        <li className='podcast__play-1 podcast__play'>
                            <img src={podcastFoto1} />
                        </li>
                        <li className='podcast__play-1 podcast__play'>
                            <img src={podcastFoto2} />
                        </li>
                        <li className='podcast__play-1 podcast__play'>
                            <img src={podcastFoto3} />
                        </li>
                    </ul>
                    <ul className='podcast__list-column-2 podcast__list'>
                        <li className='podcast__play-2 podcast__play'>
                            <img src={podcastFoto4} />
                        </li>
                        <li className='podcast__play-2 podcast__play'>
                            <img src={podcastFoto5} />
                        </li>
                    </ul>
                    <img className='podcast__cube' src={cube} />
                </div>
            </section>
            <section>
                <div className='command'>
                    <div className='command__present'>
                        <h1>Наша команда</h1><img className='command__yellowLine' src={yellowLine} />
                    </div>
                    <div className='command__peson-wrap'>
                        <img className='command__helix' src={helix} />
                        <ul className='command__person'>
                            <li className='command__portret'><img src={command1} />
                                <div className='command__info'><span className='command__text'>Марія Іваненко</span><span>Ведуча</span></div></li>
                            <li className='command__portret'><img src={command2} />
                                <div className='command__info'><span className='command__text'>Єва Райська</span><span></span>Продюсер</div></li>
                            <li className='command__portret'><img src={command3} />
                                <div className='command__info'><span className='command__text'>Андрій Коваленко</span><span></span>Звукорежисер</div></li>
                            <li className='command__portret'><img src={command4} />
                                <div className='command__info'><span className='command__text'>Михайло Ковач</span><span>Ведучий</span></div></li>
                        </ul>
                        <img className='command__thorus' src={thors} />
                    </div>
                </div>
            </section>
            <section>
                <div className='partner'>
                    <div className='partner__main'>
                        <h1>Партнери</h1><img src={blueLine} />
                    </div>
                    <div className='partner__wrapper'>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            speed={1000}
                            spaceBetween={40}
                            slidesPerView={4}
                            slidesPerGroup={4}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}

                        >
                            <SwiperSlide><img src={kuivstar} /></SwiperSlide>
                            <SwiperSlide><img src={akkopd} /></SwiperSlide>
                            <SwiperSlide><img src={kuivstar} /></SwiperSlide>
                            <SwiperSlide><img src={akkopd} /></SwiperSlide>
                            <SwiperSlide><img src={kuivstar} /></SwiperSlide>
                            <SwiperSlide><img src={akkopd} /></SwiperSlide>
                            <SwiperSlide><img src={kuivstar} /></SwiperSlide>
                            <SwiperSlide><img src={akkopd} /></SwiperSlide>
                            ...
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainPage;