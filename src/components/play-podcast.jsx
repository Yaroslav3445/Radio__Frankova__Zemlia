import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import PlayPodcastStyles from '../style/play-podcast.module.scss';
import podcastData from '../info/podcast';
import '../style/reset.scss';
import play from '../image/play.svg';
import musicClick from '../image/music-prev.svg';
import volumeBlock from '../image/volume-block.svg';
import knot from '../image/Knot.png';

const PlayPodcast = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { id } = useParams();
  const location = useLocation();
  const [volume, setVolume] = useState(100);
  const audioRef = useRef(null);
  const restoreVolume = useRef(100);
  const [isExpanded, setIsExpanded] = useState(false);
  const { podcastData: currentPodcastData } = location.state || {};
  const currentPodcastIndex = podcastData.findIndex((podcast) => podcast.id === parseInt(id, 10));
  const nextPodcastIndex = (currentPodcastIndex + 1) % podcastData.length;
  const prevPodcastIndex = (currentPodcastIndex - 1 + podcastData.length) % podcastData.length;

  const nextPodcastId = podcastData[nextPodcastIndex].id;
  const prevPodcastId = podcastData[prevPodcastIndex].id;
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [buffered, setBuffered] = useState(0);

  const volumeMove = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);

    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };

  const handlePause = async () => {
    if (audioRef.current) {
      try {
        if (audioRef.current.paused) {
          await audioRef.current.play();
          setIsPlaying(true);
        } else {
          audioRef.current.pause();
          setIsPlaying(false);
        }
      } catch (error) {
        console.error("Failed to play/pause audio:", error);
      }
    }
  };
  const updateProgressBar = () => {
    if (audioRef.current && audioRef.current.readyState >= 2) {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration;

      const ranges = audioRef.current.buffered;
      let index = -1;



      const buffered = index !== -1 ? (ranges.end(index) / duration) * 100 : 0;

      setBuffered(buffered);
      setCurrentTime(currentTime);
    }
  };

  useEffect(() => {
    const handleLoadedMetadata = () => {
      setDuration(audioRef.current.duration);
    };

    const handleTimeUpdate = () => {
      updateProgressBar();
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
    const formattedHours = String(hours).padStart(2);
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
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

  const seekTo = (newTime) => {
    if (audioRef.current) {
      if (audioRef.current.readyState >= 2) {
        audioRef.current.currentTime = newTime;
      } else {
        console.warn("Audio is not fully loaded yet.");
      }
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
              <Link to={`/play-podcast/${prevPodcastId}`} onClick={handlePause} state={{ podcastData: podcastData[prevPodcastIndex] }}>
                <button type="button">
                  <img src={musicClick} alt="music" />
                </button>
              </Link>
              <button className={PlayPodcastStyles.listen__play} onClick={handlePause} type="button">
                {isPlaying ? (
                  <FontAwesomeIcon icon={faPause} style={{ color: '#6867ab' }} />
                ) : (
                  <FontAwesomeIcon icon={faPlay} style={{ color: '#6867ab' }} />
                )}
              </button>
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
            <div className={PlayPodcastStyles.listen__timerPlay}>
              <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
            </div>
            <div className={PlayPodcastStyles.listen__progress} onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const offsetX = e.clientX - rect.left;
              const percentage = (offsetX / rect.width) * 100;
              seekTo((percentage / 100) * duration);
            }}>
              <div className={PlayPodcastStyles.listen__progressBar} style={{ width: `${currentTime / duration * 100}%` }}>
                <span className={PlayPodcastStyles.listen__progressTrack}></span>
              </div>
            </div>
            <div className={PlayPodcastStyles.listen__knot}>
              <img src={knot} alt="knot" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlayPodcast;
