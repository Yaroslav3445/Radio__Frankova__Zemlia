
import React from 'react'
import '../style/reset.scss'
import podcastStyles from '../style/podcast.module.scss'
import blueLine from '../image/blueLine.svg'
import cube from '../image/cube.png'
import knot from '../image/Knot.png'
import podcastFoto1 from '../image/podcast-foto1.jpg'
import podcastFoto2 from '../image/podcast-foto2.jpg'
import podcastFoto3 from '../image/podcast-foto3.jpg'
import podcastFoto4 from '../image/podcast-foto4.jpg'
import podcastFoto5 from '../image/podcast-foto5.jpg'


const Podcast = () => {
    return (
        <>
            <section>
                <div className={podcastStyles.podcast}>
                    <img className={podcastStyles['podcast__knot']} src={knot} alt="Knot" />
                    <div className={podcastStyles['podcast__main']}>
                        <h1>Підкасти</h1>
                        <img className={podcastStyles['podcast__blueLine']} src={blueLine} alt="Blue Line" />
                    </div>
                    <ul className={`${podcastStyles['podcast__list-column-1']} ${podcastStyles['podcast__list']}`}>
                        <li className={`${podcastStyles['podcast__play-1']} ${podcastStyles['podcast__play']}`}>
                            <img src={podcastFoto1} alt="Podcast 1" />
                        </li>
                        <li className={`${podcastStyles['podcast__play-1']} ${podcastStyles['podcast__play']}`}>
                            <img src={podcastFoto2} alt="Podcast 2" />
                        </li>
                        <li className={`${podcastStyles['podcast__play-1']} ${podcastStyles['podcast__play']}`}>
                            <img src={podcastFoto3} alt="Podcast 3" />
                        </li>
                    </ul>
                    <ul className={`${podcastStyles['podcast__list-column-2']} ${podcastStyles['podcast__list']}`}>
                        <li className={`${podcastStyles['podcast__play-2']} ${podcastStyles['podcast__play']}`}>
                            <img src={podcastFoto4} alt="Podcast 4" />
                        </li>
                        <li className={`${podcastStyles['podcast__play-2']} ${podcastStyles['podcast__play']}`}>
                            <img src={podcastFoto5} alt="Podcast 5" />
                        </li>
                    </ul>
                    <img className={podcastStyles['podcast__cube']} src={cube} alt="Cube" />
                </div>
            </section>
        </>
    )
}

export default Podcast