import React from 'react'
import pageInfo from '../style/page-info.module.scss'
import blueLine from '../image/blueLine.svg'
import person from '../image/person.png'
import building from '../image/building.png'
import '../style/reset.scss'


const PageInfo = () => {
    return (
        <>
            <div className={pageInfo.about}>
                <div className={pageInfo.about__main}>
                    <h1>Про нас</h1><img className={pageInfo.about__blueLine} src={blueLine} alt="blue line" />
                </div>
                <div className={pageInfo.about__wrapper}>
                    <div className={`${pageInfo['about__bild']} ${pageInfo['about__column']}`}>
                        <div className={`${pageInfo['about__image']} ${pageInfo['about__responsive']}`}> <img src={building} alt="building" /></div>
                        <div className={pageInfo.about__info}>
                            <h1>Франкова земля</h1>
                            <p className={pageInfo.about__text}>У січні 1990 року створено місцеве радіо «Франкова земля» під керівництвом Йосипа Фиштика.</p>
                            <p className={pageInfo.about__text}>У січні 1990 року створено місцеве радіо «Франкова земля» під керівництвом Йосипа Фиштика.</p>
                        </div> 
                    </div>
                    <div className={`${pageInfo['about__person']} ${pageInfo['about__column']}`}>
                        <p className={pageInfo.about__text}>
                            “Радіо «Франкова Земля» – це можливість переосмислити історію та культуру
                            міста через медійність та радіоформат. Спроба відновити автентичну концепцію
                            “Франкової землі” через сенси, змісти, наповнення, базуючись на історичних
                            архівах та водночас – сучасного контексту нашого міста. Можливість стати
                            голосом містян. Більше говорити про культуру, історію, актуальні події,
                            відтак краще зрозуміти локальний контекст через занурення у прадавні
                            генетичні коди. Радіо “Франкова Земля” – це новий майданчик для обміну
                            думок, міркувань та продування інноваційних ідей. А отже – простір для
                            вільних та небайдужих.”, – розповів у коментарі для ВАРТО Олександ Максимов.
                        </p>
                        <div className={`${pageInfo['about__portret']} ${pageInfo['about__responsive']}`}> <img src={person} alt="person" /></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PageInfo