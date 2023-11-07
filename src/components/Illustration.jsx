import React from 'react'
import bus from '../image/bus.png'
import portret from '../image/portret.png'
import background2 from '../image/background2.png'
import flower from '../image/flower.png'
import illustrationStyles from '../style/illustration.module.scss';
const Illustration = () => {
    return (
        <>
            <div className={illustrationStyles.illustration}>
                <div className={illustrationStyles.illustration__wrapper}>
                    <div className={illustrationStyles.illustration__ether}>
                        <div className={illustrationStyles.illustration__button}>
                            <div className={illustrationStyles.illustration__triangle}></div>
                            <div className={illustrationStyles.illustration__info}>
                                <span className={`${illustrationStyles['illustration__text-big']}`}>БЛа бла бал</span>
                                <span className={illustrationStyles.illustration__text}>Зараз в ефірі</span>
                            </div>
                        </div>
                        <div className={illustrationStyles.illustration__bus}><img src={bus} alt="Bus" /></div>
                    </div>
                    < div className={illustrationStyles.illustration__image}>
                        <img className={illustrationStyles.illustration__flower} src={flower} alt="Flower" />
                        <img className={illustrationStyles.illustration__background} src={background2} alt="Background" />
                        <img className={illustrationStyles.Illustration__hero} src={portret} alt='portret' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Illustration