// PodcastList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import PagePodcastStyle from '../style/podcastList.module.scss';

const PodcastList = ({ podcastData, currentPage, articlesPerPage }) => {
    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = currentPage * articlesPerPage;
    const visibleArticles = podcastData.slice(startIndex, endIndex);

    return (
        <section>
            <ul className={PagePodcastStyle.podcastList__list}>
                {visibleArticles.map((list, index) => (
                    <Link
                        className={`${PagePodcastStyle.podcastList__podcast} ${index % 5 < 3
                            ? PagePodcastStyle.podcastList__customStyle1
                            : PagePodcastStyle.podcastList__customStyle2
                            } ${(index + 1) % 5 === 0
                                ? `${PagePodcastStyle.podcastList__customStyle3} `
                                : ''
                            }`}
                        key={list.id}
                        to={`/play-podcast/${list.id}`}
                        state={{ podcastData: list }}
                    >
                        <li>
                            <img src={list.image} alt="podcast" />
                        </li>
                    </Link>
                ))}
            </ul>
        </section>
    );
};

export default PodcastList;
