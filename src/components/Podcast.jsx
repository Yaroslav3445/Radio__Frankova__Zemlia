
import React from 'react';
import PodcastList from './PodcastList';
import NamePage from '../components/NamePage';
import podcastData from '../info/podcast';
import PodcastStyle from '../style/podcast.module.scss'
const Podcast = () => {
    return (
        <>
            <section>
                <NamePage />
                <div className={PodcastStyle.podcast}>
                    <PodcastList podcastData={podcastData} currentPage={1} articlesPerPage={5} />
                </div>
            </section>
        </>
    );
};

export default Podcast