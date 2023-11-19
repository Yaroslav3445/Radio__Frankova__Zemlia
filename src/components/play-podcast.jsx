import React, { useState } from 'react';
import { useLocation, useParams, Link, useRef } from 'react-router-dom';
import PlayPodcastStyles from '../style/play-podcast.module.scss';
import podcastData from '../data/podcast.json';
import '../style/reset.scss'
const playPodcast = () => {
    const { id } = useParams();
    const location = useLocation();
    const [volume, setVolume] = useState(1)
    const audioRef = useRef(null);
    const { podcastData: currentPodcastData } = location.state || {};

    const currentPodcastIndex = podcastData.findIndex(podcast => podcast.id === parseInt(id, 10));
    const nextPodcastIndex = (currentPodcastIndex + 1) % podcastData.length;
    const prevPodcastIndex = (currentPodcastIndex - 1 + podcastData.length) % podcastData.length;

    const nextPodcastId = podcastData[nextPodcastIndex].id;
    const prevPodcastId = podcastData[prevPodcastIndex].id;
    const volumeMove = (event) => {
        const newVolume = parseFloat(event.target.value)
        setVolume(newVolume)
        console.log(volume)
        if (audioRef.current) {
            audioRef.current.volume = newVolume / 100; // Гучність повинна бути в діапазоні від 0 до 1
        }
    };
    return (
        <>
            <section>
                <div className={PlayPodcastStyles.listen}>
                    <div className={PlayPodcastStyles.listen__portret}>
                        <img src={currentPodcastData.image} alt="listen image" />
                    </div>
                    <div className={PlayPodcastStyles.listen__block}>
                        <h1>{currentPodcastData.title}</h1>
                        <p>{currentPodcastData.description}</p>
                        <div className={PlayPodcastStyles.listen__player}>
                            <Link to={`/play-podcast/${prevPodcastId}`} state={{ podcastData: podcastData[prevPodcastIndex] }}>
                                <button className={PlayPodcastStyles.listen__goPodcast} type="button">
                                    <div className={`${PlayPodcastStyles['listen__triagle']} ${PlayPodcastStyles['listen__triagle-2']}   ${PlayPodcastStyles['listen__triagleLeft']}`}></div>
                                    <div className={`${PlayPodcastStyles['listen__triagle']} ${PlayPodcastStyles['listen__triagle-2']}`}></div>
                                </button>
                            </Link>
                            <audio controls src={currentPodcastData.audioUrl} volume={volume} className={`${PlayPodcastStyles['listen__audio']}`} controlsList="nodownload nofullscreen"></audio>
                            <input
                                type="range"
                                min={0}
                                max={100}
                                step={1}
                                value={volume}
                                onChange={volumeMove}
                                className="custom-range-slider"
                            />
                            <Link to={`/play-podcast/${nextPodcastId}`} state={{ podcastData: podcastData[nextPodcastIndex] }}>
                                <button className={PlayPodcastStyles.listen__goPodcast} type="button">
                                    <div className={`${PlayPodcastStyles['listen__triagle']}`}></div>
                                    <div className={`${PlayPodcastStyles['listen__triagle']}  ${PlayPodcastStyles['listen__triagleRight']}`}></div>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </section >
        </>
    );
};

export default playPodcast;
