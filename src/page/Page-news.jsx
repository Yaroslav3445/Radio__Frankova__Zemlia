import React, { useState } from 'react'
import pageNewsStyles from '../style/page-news.module.scss'
import yellowLine from '../image/yellowLine.svg'
import newsimage from '../image/newsImage.png'
import arrow from '../image/arrow.svg'
import articles from '../data/articles.json'
const News = () => {
    const [expandedBlocks, setExpandedBlocks] = useState({});

    const toggleExpand = (id) => {
        setExpandedBlocks((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    return (
        <>
            <div className={pageNewsStyles.news}>
                <div className={pageNewsStyles.news__main}>
                    <h1>Новини</h1> <img src={yellowLine} alt='yellow line' />
                </div>
                <div className={pageNewsStyles.news__wrapper}>
                    {articles.map(item =>
                        <div key={item.id} className={pageNewsStyles.news__box}>
                            <div className={pageNewsStyles.news__image}><img src={item.image} alt="news-image" /></div>
                            <div className={pageNewsStyles.news__info}>
                                <h2>{item.nameContent}</h2>
                                <p className={pageNewsStyles.news__paragraf} style={{
                                    maxHeight: expandedBlocks[item.id] ? '1000px' : '69px',
                                    overflow: 'hidden',
                                    transition: expandedBlocks[item.id] ? 'max-height 0.6s ease-in':'max-height 0.4s ease-out',
                                }}>{item.content}</p>
                                <button onClick={() => toggleExpand(item.id)} type='button'><span className={pageNewsStyles.news__span}>{expandedBlocks[item.id] ? 'Згорнути' : 'Дізнатися більше'}</span><img src={arrow} alt="arrow" /></button>
                            </div>
                        </div>
                    )}
                </div>
            </div >
        </>
    )
}
export default News
