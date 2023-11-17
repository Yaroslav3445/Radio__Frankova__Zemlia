import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import PlayPodcastStyles from '../style/play-podcast.module.scss'
const PlayPodcast = () => {
    const { id } = useParams();
    const location = useLocation();
    const { podcastData } = location.state || {};

    return (
        <>
            <section>
                <div className={PlayPodcastStyles.listen}>
                    <div className={PlayPodcastStyles.listen__portret}>
                        <img src={podcastData.image} alt="listen image" />
                    </div>
                    <div className={PlayPodcastStyles.listen__block}>
                        <h1>{podcastData.title}</h1>
                        <p>{podcastData.description}</p>
                        <audio controls src={podcastData.audioUrl}>
                        </audio>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PlayPodcast;