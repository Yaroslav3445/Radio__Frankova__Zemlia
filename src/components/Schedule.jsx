import React from 'react'
import '../style/reset.scss'
import  scheduleStyles from '../style/schedule.module.scss'
import spheres from '../image/spheres.png'
import yellowLine from '../image/yellowLine.svg'
import helix from '../image/helix.png'

const Schedule = () => {
    return (
        <>
           
            <section>
                <div className={scheduleStyles.schedule}>
                    <div className={scheduleStyles.schedule__link}>
                        <img className={scheduleStyles.schedule__spheres} src={spheres} alt="Spheres" />
                        <h1 className={scheduleStyles.schedule__h1}>Розклад</h1>
                        <img className={`${scheduleStyles['schedule__yellow-line']}`} src={yellowLine} alt="Yellow Line" />
                    </div>
                    <div className={`${scheduleStyles['schedule__table-wrap']}`}>
                        <table className={scheduleStyles.schedule__table}>
                            <thead>
                                <tr className={`${scheduleStyles.schedule__tr} ${scheduleStyles['schedule__tr-head']}`}>
                                    <th>Сьогодні у програмі</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={scheduleStyles.schedule__tr}>
                                    <td className={scheduleStyles.schedule__td}>10:00 - 11:00</td>
                                    <td className={`${scheduleStyles['schedule__td-text']}`}>
                                        <h2>Новини дня</h2>
                                        <p></p>
                                    </td>
                                </tr>
                                <tr className={scheduleStyles.schedule__tr}>
                                    <td className={scheduleStyles.schedule__td}>12:00 - 13:45</td>
                                    <td className={`${scheduleStyles['schedule__td-text']}`}>
                                        <h2>Про культуру</h2>
                                        <p>Валерія Чикириса - художнього керівника та диригента муніципального естрадно-симфонічного оркестру і ансамблю саксофоністів, активного учасника перформансів для збору коштів на потреби ЗСУ;</p>
                                    </td>
                                </tr>
                                <tr className={scheduleStyles.schedule__tr}>
                                    <td className={scheduleStyles.schedule__td}>10:00 - 11:00</td>
                                    <td className={`${scheduleStyles['schedule__td-text']}`}>
                                        <h2>Програма Франкова Земля</h2>
                                        <p></p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <img className={scheduleStyles.schedule__helix} src={helix} alt="Helix" />
                    </div>
                </div>
            </section >
        </>
    )
}

export default Schedule
