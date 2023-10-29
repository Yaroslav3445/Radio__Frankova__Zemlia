import React from 'react'
import ReactDOM from 'react-dom/client'
import '../reset.scss'
import './header.scss'
import logo from '../../image/logo.png'
function Header() {
    return (
        <>
            <header className='header'>
                <div className='header__container'>
                    <nav className='header__menu'>
                        <div className='header__menu-wrap'>
                            <div className='header__logo'><img src={logo} /></div>
                            <div className='header__tab'>
                                <span className='header__tab'></span>
                                <span className='header__tab'></span>
                                <span className='header__tab'></span>
                            </div>
                            <ul className='header__ul'>
                                <li className='header__li'>Новини</li>
                                <li className='header__li'>Про нас</li>
                                <li className='header__li'>Розклад</li>
                                <li className='header__li'>Команда</li>
                                <li className='header__li'>Подкасти </li>
                                <li className='header__li'>Контакти</li>
                            </ul>
                        </div>
                        <div className='header__button-wrap'>
                            <button className='header__button'>Підтримати</button>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;