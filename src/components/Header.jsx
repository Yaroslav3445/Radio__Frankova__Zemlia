import React from 'react'
import ReactDOM from 'react-dom/client'
import headerStyles from '../style/header.module.scss'
import logo from '../image/logo.png'
function Header() {
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
                                <li className={headerStyles['header__li']}>Новини</li>
                                <li className={headerStyles['header__li']}>Про нас</li>
                                <li className={headerStyles['header__li']}>Розклад</li>
                                <li className={headerStyles['header__li']}>Команда</li>
                                <li className={headerStyles['header__li']}>Подкасти</li>
                                <li className={headerStyles['header__li']}>Контакти</li>
                            </ul>
                        </div>
                        <div className={headerStyles['header__button-wrap']}>
                            <button className={headerStyles['header__button']}>Підтримати</button>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;