import React from 'react'
import pageCommandStyles from '../style/page-command.module.scss'
import Command from '../components/Command'
import Thours from '../components/thours'
const PageCommand = () => {
    return (
        <>
            <main className={pageCommandStyles.command__container}>
                <Command itemsToShow={8} />
                <Thours />
            </main>
        </>
    )
}

export default PageCommand