import React, { useState } from 'react';
import PodcastList from '../components/PodcastList';
import NamePage from '../components/NamePage';
import PagePodcastStyle from '../style/podcastList.module.scss';
import podcastData from '../data/podcast.json';
import Pagination from '../components/pagination';
import Thours from '../components/Thours-img';
import Cube from '../components/Cube-img'
import Knot from '../components/Knot-img'
const Pagepodcast = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 8;
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    const totalPages = Math.ceil(podcastData.length / articlesPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const getPageNumbers = () => {
    const totalPage = Math.ceil(podcastData.length / articlesPerPage);
    const pages = Array.from({ length: totalPage }, (_, index) => index + 1);
    return pages.filter(
      (pageNumber) =>
        pageNumber === currentPage ||
        pageNumber === currentPage - 1 ||
        pageNumber === currentPage + 1
    );
  };

  return (
    <main>
      <div className={PagePodcastStyle.podcastList}>
        <div className={PagePodcastStyle.podcastList__page}>
          <NamePage />
          <div className={PagePodcastStyle.podcastList__container}>
            <PodcastList podcastData={podcastData} currentPage={currentPage} articlesPerPage={articlesPerPage} />
            <div className={`${PagePodcastStyle['podcastList__image']} ${PagePodcastStyle['podcastList__knot']}`}>
              <Knot />
            </div>
            <div className={`${PagePodcastStyle['podcastList__image']} ${PagePodcastStyle['podcastList__thours']}`}>
              <Thours />
            </div>
            <div className={`${PagePodcastStyle['podcastList__image']} ${PagePodcastStyle['podcastList__cube']}`}>
              <Cube />
            </div>
          </div>
        </div>
        <div className={PagePodcastStyle.podcastList__pagination}>
          <Pagination
            currentPage={currentPage}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
            getPageNumbers={getPageNumbers}
            handleClickPage={setCurrentPage}
          />
        </div>
      </div>
    </main>
  );
};

export default Pagepodcast;
