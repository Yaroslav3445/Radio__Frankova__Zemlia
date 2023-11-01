import React from 'react'
import pageNewsStyles from '../style/page-news.module.scss'
import yellowLine from '../image/yellowLine.svg'
import newsimage from '../image/newsImage.png'
const News = () => {
    return (
        <>
            <div className={pageNewsStyles.news}>
                <div className={pageNewsStyles.news__main}>
                    <h1>Новини</h1> <img src={yellowLine} alt='yellow line' />
                </div>
                <div className={pageNewsStyles.news__wrapper}>
                    <div className={pageNewsStyles.news__box}>
                        <div className={pageNewsStyles.news__image}><img src={newsimage} alt="news-image" /></div>
                        <div className={pageNewsStyles.news__info}>
                        <span></span>
                            <h2>Назва новини</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam minus
                                voluptatem fuga vel libero error provident omnis dolor facilis aperiam, nostrum id earum ipsa doloremque corporis esse
                                 consequatur deserunt amet incidunt officia voluptates
                                laborum aliquid veniam. Distinctio suscipit cumque in temporibus voluptate
                                impedit repudiandae deleniti fugit fugiat laudantium asperiores animi quas id,
                                veritatis pariatur! Consequuntur quasi, qui inventore vel repellat dolorem asperiores
                                vero dicta id cupiditate pariatur cum rerum quae. Nulla iusto possimus in architecto
                                voluptate culpa dolor, blanditiis reiciendis provident repudiandae rem, ducimus iste
                                molestiae itaque expedita dicta nam porro sapiente? Molestias maiores inventore vitae quod, odio cupiditate obcaecati!</p>
                            <button type='button'>Дізнатись більше</button>
                        </div>
                    </div>
                    <div className={pageNewsStyles.news__box}>
                        <div className={pageNewsStyles.news__image}><img src={newsimage} alt="news-image" /></div>
                        <div className={pageNewsStyles.news__info}>
                            <h2></h2>
                            <p></p>
                            <button type='button'></button>
                        </div>
                    </div>
                    <div className={pageNewsStyles.news__box}>
                        <div className={pageNewsStyles.news__image}><img src={newsimage} alt="news-image" /></div>
                        <div className={pageNewsStyles.news__info}>
                            <h2></h2>
                            <p></p>
                            <button type='button'></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default News