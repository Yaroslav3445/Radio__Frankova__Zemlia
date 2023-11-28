import React from 'react'
import pageCommandStyles from '../style/page-command.module.scss'
import Command from '../components/Command'
import Thours from '../components/Thours'
import Helix from '../components/helix'
const PageCommand = () => {
    return (
        <>
            <main className={pageCommandStyles.command}>
                <Command itemsToShow={8} />
                <div className={`${pageCommandStyles['command__image']} ${pageCommandStyles['command__helix']}`}>
                    <Helix />
                </div>
                <div className={`${pageCommandStyles['command__image']} ${pageCommandStyles['command__thours']}`}>
                    <Thours />
                </div>
            </main>
        </>
    )
}

export default PageCommand