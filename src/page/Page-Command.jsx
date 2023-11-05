import React from 'react'
import pageCommandStyles from '../style/page-command.module.scss'
import Command from '../components/Command'
import Fullommand from '../components/FullCommand'
import News from './Page-news'
const PageCommand = () => {
    return (
        <>
            <div className={pageCommandStyles.command__container}>
                <Command/>
                <Fullommand />
            </div>
        </>
    )
}

export default PageCommand