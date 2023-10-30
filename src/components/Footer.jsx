import React from 'react'
import ReactDOM from 'react-dom/client'
import footerStyles from '../style/footer.module.scss'
import footer from '../image/footer.svg'
import instagram from '../image/instagram.svg'
import facebook from '../image/facebook.svg'
import twitter from '../image/twitter.svg'
import line1 from '../image/Line 1.svg'
import line2 from '../image/Line 2.svg'
import line3 from '../image/Line 3.svg'

function Footer() {
    return (
        <>
            <footer className={footerStyles.footer}>
                <div className={footerStyles.footer__wrapper}>
                    <img className={`${footerStyles['footer__line1']} ${footerStyles['footer__position']}`} src={line1} alt="Line 1" />
                    <img className={`${footerStyles['footer__line2']} ${footerStyles['footer__position']}`} src={line2} alt="Line 2" />
                    <img className={`${footerStyles['footer__line3']} ${footerStyles['footer__position']}`} src={line3} alt="Line 3" />
                    <img className={footerStyles.footer__background} src={footer} alt="Footer Background" />
                    <div className={footerStyles.footer__social}>
                        <span className={footerStyles.footer__text}>Шукайте нас у соціальних мережах</span>
                        <div className={footerStyles.footer__icon}>
                            <img src={instagram} alt="Instagram" />
                            <img src={facebook} alt="Facebook" />
                            <img src={twitter} alt="Twitter" />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;