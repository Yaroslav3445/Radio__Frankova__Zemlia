import React from 'react';
import { Link } from 'react'
import blueLine from '../image/blueLine.svg'
import knot from '../image/Knot.png'
import cube from '../image/cube.png'
import thors from '../image/thorus.png'
import PagePodcastStyle from '../style/podcastList.module.scss'
import podcastData from '../data/podcast.json'
import "../style/reset.scss";
const Pagepodcast = () => {
    return (
        <>
            <section>
                <div className={PagePodcastStyle.podcastList}>
                    <div className={PagePodcastStyle.podcastList__main}>
                        <h1>Подкасти</h1> <img src={blueLine} alt='blue Line' />
                    </div>
                    <div className={PagePodcastStyle.podcastList__container}>
                        {/* <img src={knot} alt="knot" />
                        <img src={cube} alt="cube" />
                        <img src={thors} alt="thours" /> */}
                        <ul className={PagePodcastStyle.podcastList__list}>
                            {podcastData.map(list => (
                                <li key={list.id} className={PagePodcastStyle.podcastList__podcast}>
                                    <img src={list.image} alt="podcast" />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Pagepodcast;