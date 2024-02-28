import { NavLink, useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import headerStyles from '../style/header.module.scss'
import logo from '../image/logo.webp'
const Header = () => {
    const location = useLocation();
    const [tab, setTab] = useState(false);
    const toggleMenu = () => {
        setTab(!tab);
    };
    const animation = {
        transform: tab === false ? '' : 'rotate(45deg) translateY(5px)   translateX(5px)',
        transition: ' transform 0.5s'
    }
    const animation2 = {
        transform: tab === false ? '' : 'rotate(-45deg) translateY(-5px)  translateX(4px)',
        transition: ' transform 0.5s'
    }
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1000) {
                setTab(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <header className={headerStyles.header}>
                <div className={headerStyles['header__container']}>
                    <nav className={headerStyles['header__menu']}>
                            <div className={headerStyles['header__logo']}>
                                <img src={logo} alt="Logo" />
                            </div>
                            <div onClick={toggleMenu} className={headerStyles['header__tab']}>
                                <span className={headerStyles['header__burger1']} style={animation}></span>
                                <span className={headerStyles['header__burger2']}></span>
                                <span className={headerStyles['header__burger3']} style={animation2}></span>
                            </div>
                            <ul className={`${headerStyles['header__ul']} ${tab ? headerStyles['header__active'] : ''}`} >
                            <NavLink style={location.pathname === '/MainPage' ? { color: 'yellow' } : {}} onClick={toggleMenu} to='/MainPage' className={headerStyles.header__link}><li>Головна</li></NavLink>
                            <NavLink style={location.pathname === '/Page-news' ? { color: 'yellow' } : {}} onClick={toggleMenu} to='/Page-news' className={headerStyles.header__link}><li>Новини</li></NavLink>
                            <NavLink style={location.pathname === '/Page-info' ? { color: 'yellow' } : {}} onClick={toggleMenu} to='/Page-info' className={headerStyles.header__link}><li>Про нас</li></NavLink>
                            <NavLink style={location.pathname === '/Page-shedule' ? { color: 'yellow' } : {}} onClick={toggleMenu} to='/Page-shedule' className={headerStyles.header__link}><li>Розклад</li></NavLink>
                            <NavLink style={location.pathname === '/Page-Command' ? { color: 'yellow' } : {}} onClick={toggleMenu} to='/Page-Command' className={headerStyles.header__link}><li>Команда</li></NavLink>
                            <NavLink style={location.pathname === '/Page-podcast' ? {    color: 'yellow' } : {}} onClick={toggleMenu} to='/Page-podcast' className={headerStyles.header__link}><li>Подкасти</li></NavLink>
                            </ul>
                        <div className={headerStyles['header__button-wrap']}>
                            <NavLink to='https://prytulafoundation.org/donation'><button className={headerStyles['header__button']}>Підтримати</button></NavLink>
                        </div>
                    </nav>
                </div >
            </header >
        </>
    )
}

export default Header;