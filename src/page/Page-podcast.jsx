import React from 'react';
import { Link } from 'react-router-dom'
import blueLine from '../image/blueLine.svg'
import knot from '../image/Knot.png'
import cube from '../image/cube.png'
import thors from '../image/thorus.png'
import PagePodcastStyle from '../style/podcastList.module.scss'
import podcastData from '../data/podcast.json'
import "../style/reset.scss";
import Pagination from '../components/pagination';

const Pagepodcast = () => {
    return (
        <>
            <section>
                <div className={PagePodcastStyle.podcastList}>
                    <div className={PagePodcastStyle.podcastList__main}>
                        <h1>Подкасти</h1> <img src={blueLine} alt='blue Line' />
                    </div>
                    <div className={PagePodcastStyle.podcastList__container}>
                        <ul className={PagePodcastStyle.podcastList__list}>
                            {podcastData.map((list, index) => (
                                <li
                                    key={list.id}
                                    className={`${PagePodcastStyle.podcastList__podcast} ${index % 5 < 3
                                        ? PagePodcastStyle.podcastList__customStyle1
                                        : PagePodcastStyle.podcastList__customStyle2
                                        } ${(index + 1) % 5 === 0
                                            ? `${PagePodcastStyle.podcastList__customStyle3} `
                                            : ''
                                        }`}
                                > <img src={list.image} alt="podcast" />
                                </li>
                            ))}
                        </ul>
                        <div className="flflsldf
                        "></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Pagepodcast;