import { Link, } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import PageNews from '../page/Page-news'
import App from '../App'
import headerStyles from '../style/header.module.scss'
import logo from '../image/logo.png'
const Header = () => {
    return (
        <>
            <header className={headerStyles.header}>
                <div className={headerStyles['header__container']}>
                    <nav className={headerStyles['header__menu']}>
                        <div className={headerStyles['header__menu-wrap']}>
                            <div className={headerStyles['header__logo']}>
                                <img src={logo} alt="Logo" />
                            </div>
                            <div className={headerStyles['header__tab']}>
                                <span className={headerStyles['header__tab']}></span>
                                <span className={headerStyles['header__tab']}></span>
                                <span className={headerStyles['header__tab']}></span>
                            </div>
                            <ul className={headerStyles['header__ul']}>
                                <li><Link to='/Page-news' className={headerStyles.header__link}><span>Новини</span></Link></li>
                                <li><Link to='/Page-info' className={headerStyles.header__link}> <span>Про нас</span></Link></li>
                                <li><Link to='' className={headerStyles.header__link}> <span>Розклад</span></Link></li>
                                <li><Link to='/Page-Command' className={headerStyles.header__link}> <span>Команда</span></Link></li>
                                <li><Link to='' className={headerStyles.header__link}><span>Подкасти</span></Link></li>
                                <li><Link to='' className={headerStyles.header__link}><span>Контакти</span></Link></li>
                            </ul>
                        </div>
                        <div className={headerStyles['header__button-wrap']}>
                            <button className={headerStyles['header__button']}>Підтримати</button>
                        </div>
                    </nav>
                </div >
            </header >
        </>
    )
}

export default Header;