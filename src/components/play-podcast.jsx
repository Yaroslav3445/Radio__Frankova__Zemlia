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
    const audioRef = useRef(null);
    const restoreVolume = useRef(100);
    const [isExpanded, setIsExpanded] = useState(false);
    const [progress, setProgress] = useState(0);
    const { podcastData: currentPodcastData } = location.state || {};
    const currentPodcastIndex = podcastData.findIndex((podcast) => podcast.id === parseInt(id, 10));
    const nextPodcastIndex = (currentPodcastIndex + 1) % podcastData.length;
    const prevPodcastIndex = (currentPodcastIndex - 1 + podcastData.length) % podcastData.length;
    const [loading, setLoading] = useState(false);

    const nextPodcastId = podcastData[nextPodcastIndex].id;
    const prevPodcastId = podcastData[prevPodcastIndex].id;
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

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
        const handleLoadedMetadata = () => {
            setDuration(audioRef.current.duration);
        };

        const handleTimeUpdate = () => {
            setCurrentTime(audioRef.current.currentTime);
        };

        if (audioRef.current) {
            audioRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
            audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener("loadedmetadata", handleLoadedMetadata);
                audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
            }
        };
    }, [audioRef]);

    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = Math.floor(time % 60);
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    };

    const updateProgressBar = () => {
        if (audioRef.current && audioRef.current.readyState >= 2) {
            const currentTime = audioRef.current.currentTime;
            const duration = audioRef.current.duration;
            const progress = (currentTime / duration) * 100;
            setProgress(progress);
        }
    };

    const clikVolume = () => {
        if (audioRef.current) {
            setIsExpanded(!isExpanded);
            if (volume === 0) {
                setVolume(restoreVolume.current);
            } else {
                restoreVolume.current = volume;
                setVolume(0);
            }
            audioRef.current.volume = volume / 100;
        }
    };

    const spanStyle = {
        width: isExpanded ? '25px' : '0px',
        height: isExpanded ? '2px' : '0px',
    };

    const seekTo = (percentage) => {
        const seekTo = (percentage) => {
            if (audioRef.current && audioRef.current.readyState >= 2) {
              setLoading(true); 
          
              const newTime = (percentage / 100) * duration;
          
              if (!Number.isFinite(newTime) || isNaN(newTime)) {
                console.error("Invalid newTime:", newTime);
                return;
              }
          
              audioRef.current.currentTime = newTime;
          
              audioRef.current.addEventListener("canplaythrough", () => {
                setLoading(false);
              }, { once: true });
            } else {
              console.warn("Audio is not fully loaded yet.");
            }
          };
          
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
                                <span className={`${PlayPodcastStyles["listen__stop"]}`} style={spanStyle}></span>
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
                        <audio
                            ref={audioRef}
                            src={currentPodcastData.audioUrl}
                            volume={volume / 100}
                            className={`${PlayPodcastStyles['listen__audio']}`}
                        ></audio>
                        <div className={PlayPodcastStyles.listen__progress}
                             onClick={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const offsetX = e.clientX - rect.left;
                                const percentage = (offsetX / rect.width) * 100;
                                seekTo(percentage);
                              }}>
                            {loading ? (
                                <div className={PlayPodcastStyles.listen__Indicator}>
                                    завантаження
                                    dhdfhfh
                                    ghfgdhfgdhfgh
                                    fgh
                                    fghfdgh
                                    fd
                                    <h1>fghfdgh</h1>
                                </div>
                            ) : (
                                <div className={PlayPodcastStyles.listen__progressBar} style={{ width: `${progress}%` }} ><span className={PlayPodcastStyles.listen__progressTrack}></span>
                                    <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
                                </div>
                            )}
                        </div>
                        <div className={PlayPodcastStyles.listen__knot}><img src={knot} alt="knot" /></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PlayPodcast
