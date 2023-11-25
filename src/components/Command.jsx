
import React, { useState } from 'react'
import '../style/reset.scss'
import commandStyles from '../style/command.module.scss'
import helix from '../image/helix.png'
import thors from '../image/thorus.png'
import yellowLine from '../image/yellowLine.svg'
import command from '../data/command.json'
const Command = ({ itemsToShow }) => {
    const title = 'Наша Команда'
    return (
        <section>
            <div className={commandStyles.command}>
                <div className={commandStyles.command__container}></div>
                <div className={commandStyles['command__present']}>
                    <h1>Наша команда</h1>
                    <img className={commandStyles['command__yellowLine']} src={yellowLine} alt="Yellow Line" />
                </div>
                <div className={commandStyles['command__peson-wrap']}>
                    <img className={commandStyles['command__helix']} src={helix} alt="Helix" />
                    <ul className={commandStyles['command__person']}>
                        {command.slice(0, itemsToShow).map(info => (
                            <li key={info.id} className={commandStyles['command__portret']}>
                                <img src={info.image} alt="Марія Іваненко" />
                                <div className={commandStyles['command__info']}>
                                    <span className={commandStyles['command__text']}>{info.name}</span>
                                    <span className={commandStyles['command__text2']}>{info.jobTitle}</span>
                                    <ul className={commandStyles.command__summary}>
                                        <li>{info.portfolio}</li>
                                        <li>{info.personalInfo}</li>
                                    </ul>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <img className={commandStyles['command__thorus']} src={thors} alt="Thors" />
                </div>
            </div>
        </section>
    )
}
export default Command