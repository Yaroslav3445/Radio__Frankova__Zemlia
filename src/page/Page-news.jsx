import React, { useState } from 'react'
import pageNewsStyles from '../style/page-news.module.scss'
import yellowLine from '../image/yellowLine.svg'
// import newsimage from '../image/newsImage.webp'
import arrow from '../image/arrow.svg'
import articles from '../info/articles'
import Pagination from '../components/pagination';
import knot from '../image/Knot.webp'
import thorus from '../image/thorus.webp'
const News = () => {
    const [expandedBlocks, setExpandedBlocks] = useState({});
    const [currentPage, setCurrentPage] = useState(1)
    const articlesPerPage = 3


    const handleClickPage = (page) => {
        setCurrentPage(page);
    };


    const toggleExpand = (id) => {
        setExpandedBlocks((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        const totalPages = Math.ceil(articles.length / articlesPerPage);
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }

    const getPageNumbers = () => {
        const totalPage = Math.ceil(articles.length / articlesPerPage)
        const pages = Array.from({ length: totalPage }, (_, index) => index + 1)
        return pages.filter(
            (pageNumber) =>
                pageNumber === currentPage ||
                pageNumber === currentPage - 1 ||
                pageNumber === currentPage + 1
        );
    }
    const visibleArticles = articles.slice(
        (currentPage - 1) * articlesPerPage,
        currentPage * articlesPerPage
    );

    return (
        <>
            <main>
                <div className={pageNewsStyles.news}>
                <div className={pageNewsStyles.news__knot}><img src={knot} alt="knot" /></div>
                    <div className={pageNewsStyles.news__main}>
                        <h1>Новини</h1> <img src={yellowLine} alt='yellow line' />
                    </div>
                    <div className={pageNewsStyles.news__wrapper}>
                        {visibleArticles.map(item =>
                            <div key={item.id} className={pageNewsStyles.news__box}>
                                <div className={pageNewsStyles.news__image}><img src={item.image} alt="news-image" /></div>
                                <div className={pageNewsStyles.news__info}>
                                    <h2>{item.nameContent}</h2>
                                    <p className={`${pageNewsStyles['news__paragraf']} ${expandedBlocks[item.id] ? pageNewsStyles['news__top'] : pageNewsStyles['news__bottom']}`}>
                                        {item.content}</p>
                                    <button onClick={() => toggleExpand(item.id)} type='button'><span className={pageNewsStyles.news__span}>{expandedBlocks[item.id] ? 'Згорнути' : 'Дізнатися більше'}</span><img src={arrow} alt="arrow" /></button>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={pageNewsStyles.news__pagination}></div>
                    <Pagination
                        currentPage={currentPage}
                        handlePrevPage={handlePrevPage}
                        handleNextPage={handleNextPage}
                        getPageNumbers={getPageNumbers}
                        handleClickPage={setCurrentPage}
                    />
                    <div className={pageNewsStyles.news__thours}><img src={thorus} alt="thorus" /></div>
                </div>
            </main>
        </>
    )
}
export default News
