import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import PlayPodcastStyles from '../style/play-podcast.module.scss';
import podcastData from '../data/podcast.json';
import '../style/reset.scss';
import play from '../image/play.svg'
import musicClick from '../image/music-prev.svg'
import volumeBlock from '../image/volume-block.svg'
import knot from '../image/Knot.png'

const PlayPodcast = () => {
    const { id } = useParams();
    const location = useLocation();
    const [volume, setVolume] = useState(100);
    const [pause, setPause] = useState(false)
    const audioRef = useRef(null);
    const restoreVolume = useRef(100)
    const [isExpanded, setIsExpanded] = useState(false);

    const { podcastData: currentPodcastData } = location.state || {};

    const currentPodcastIndex = podcastData.findIndex((podcast) => podcast.id === parseInt(id, 10));
    const nextPodcastIndex = (currentPodcastIndex + 1) % podcastData.length;
    const prevPodcastIndex = (currentPodcastIndex - 1 + podcastData.length) % podcastData.length;

    const nextPodcastId = podcastData[nextPodcastIndex].id;
    const prevPodcastId = podcastData[prevPodcastIndex].id;

    const volumeMove = (event) => {
        const newVolume = parseFloat(event.target.value);
        setVolume(newVolume);

        if (audioRef.current) {
            audioRef.current.volume = newVolume / 100;
        }
    };
    const handlePause = () => {
        if (audioRef.current) {
            if (audioRef.current.paused) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    };
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume / 100;
        }
    }, [volume]);

    const clikVolume = () => {
        if (audioRef.current) {
            setIsExpanded(!isExpanded)
            if (volume === 0) {
                setVolume(restoreVolume.current)
            } else {
                restoreVolume.current = volume
                setVolume(0);

            }
            audioRef.current.volume = volume / 100;
        }
    };

    const spanStyle = {
        width: isExpanded ? '25px' : '0px',
        height: isExpanded ? '2px' : '0px',
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
                            <Link to={`/play-podcast/${prevPodcastId}`} onClick={handlePause} state={{ podcastData: podcastData[prevPodcastIndex] }}>
                                <button type="button">
                                    <img src={musicClick} alt="music" />
                                </button>
                            </Link>
                            <audio
                                ref={audioRef}
                                src={currentPodcastData.audioUrl}
                                volume={volume / 100}
                                className={`${PlayPodcastStyles['listen__audio']}`}
                                controlsList="nodownload nofullscreen"
                            ></audio>
                            <button className={PlayPodcastStyles.listen__play} onClick={handlePause} type="button"><img src={play} alt="play" /></button>
                            <Link to={`/play-podcast/${nextPodcastId}`} state={{ podcastData: podcastData[nextPodcastIndex] }}>
                                <button className={PlayPodcastStyles.listen__goPodcast} type="button">
                                    <img src={musicClick} alt="music" />
                                </button>
                            </Link>
                        </div>
                        <div className={PlayPodcastStyles.listen__volume}>
                            <div className={PlayPodcastStyles.listen__volumeBlock} onClick={clikVolume}>
                                <img src={volumeBlock} alt="volume-block" />
                                <span className={`${PlayPodcastStyles["listen__stop"]}`} style={spanStyle} ></span>
                            </div>
                            <input
                                type="range"
                                min={0}
                                max={100}
                                step={1}
                                value={volume}
                                onChange={volumeMove}
                                className={PlayPodcastStyles.listen__sound}
                            />
                        </div>
                    </div>
                    <div className={PlayPodcastStyles.listen__knot}><img src={knot} alt="knot" /></div>
                </div>
            </section>
        </>
    );
};

export default PlayPodcast;
