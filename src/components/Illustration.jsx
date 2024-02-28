import React from 'react'
import bus from '../image/bus.webp'
import portret from '../image/portret.webp'
import background from '../image/background.webp'
import flower from '../image/flower.webp'
import illustrationStyles from '../style/illustration.module.scss';
const Illustration = () => {
    return (
        <>
            <section>
                <div className={illustrationStyles.illustration}>
                    <div className={illustrationStyles.illustration__wrapper}>
                        <div className={illustrationStyles.illustration__ether}>
                            <div className={illustrationStyles.illustration__button}>
                                <a href="https://www.radio-ua.com/?gclid=CjwKCAiAt5euBhB9EiwAdkXWOzPFHEEST2foQTpmbmX4FFFZ5QrA_Xthq5ZuqJ1bQfnzL9S4IASF5xoCRjMQAvD_BwE">
                                <div className={illustrationStyles.illustration__triangle}></div>
                                <div className={illustrationStyles.illustration__info}>
                                    <span className={`${illustrationStyles['illustration__text-big']}`}>БЛа бла бал</span>
                                    <span className={illustrationStyles.illustration__text}>Зараз в ефірі</span>
                                </div>
                                </a>
                            </div>
                            <div className={illustrationStyles.illustration__bus}><img src={bus} alt="Bus" /></div>
                        </div>
                        < div className={illustrationStyles.illustration__image}>
                            <img className={illustrationStyles.illustration__flower} src={flower} alt="Flower" />
                            <img className={illustrationStyles.illustration__background} src={background} alt="Background" />
                            <img className={illustrationStyles.illustration__hero} src={portret} alt='portret' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Illustration