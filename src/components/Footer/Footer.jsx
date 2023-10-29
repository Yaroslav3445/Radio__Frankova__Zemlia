import React from 'react'
import ReactDOM from 'react-dom/client'
import '../reset.scss'
import './footer.scss'
import footer from '../../image/footer.svg'
import instagram from '../../image/instagram.svg'
import facebook from '../../image/facebook.svg'
import twitter from '../../image/twitter.svg'
import line1 from '../../image/Line 1.svg'
import line2 from '../../image/Line 2.svg'
import line3 from '../../image/Line 3.svg'

function Footer() {
    return (
        <>
             <footer className='footer'>
                <div className='footer__wrapper'>
                    <img className='footer__line1 footer__position' src={line1} />
                    <img className='footer__line2  footer__position' src={line2} />
                    <img className='footer__line3  footer__position' src={line3} />
                    <img className='footer__background' src={footer} />
                    <div className='footer__social'>
                        <span className='footer__text'>Шукайте нас у соціальних мережах</span>
                        <div className='footer__icon'>
                            <img src={instagram} />
                            <img src={facebook}/>
                            <img src={twitter} />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;