
import React from 'react'
import '../style/reset.scss'
import commandStyles from '../style/command.module.scss'
import command1 from '../image/command-portret1.png'
import command2 from '../image/command-portret2.png'
import command3 from '../image/command-portret3.png'
import command4 from '../image/command-portret4.png'
import helix from '../image/helix.png'
import thors from '../image/thorus.png'
import yellowLine from '../image/yellowLine.svg'

const Command = () => {
    return (
        <section>
            <div className={commandStyles.command}>
                <div className={commandStyles['command__present']}>
                    <h1>Наша команда</h1>
                    <img className={commandStyles['command__yellowLine']} src={yellowLine} alt="Yellow Line" />
                </div>
                <div className={commandStyles['command__peson-wrap']}>
                    <img className={commandStyles['command__helix']} src={helix} alt="Helix" />
                    <ul className={commandStyles['command__person']}>
                        <li className={commandStyles['command__portret']}>
                            <img src={command1} alt="Марія Іваненко" />
                            <div className={commandStyles['command__info']}>
                                <span className={commandStyles['command__text']}>Марія Іваненко</span>
                                <span>Ведуча</span>
                            </div>
                        </li>
                        <li className={commandStyles['command__portret']}>
                            <img src={command2} alt="Єва Райська" />
                            <div className={commandStyles['command__info']}>
                                <span className={commandStyles['command__text']}>Єва Райська</span>
                                <span>Продюсер</span>
                            </div>
                        </li>
                        <li className={commandStyles['command__portret']}>
                            <img src={command3} alt="Андрій Коваленко" />
                            <div className={commandStyles['command__info']}>
                                <span className={commandStyles['command__text']}>Андрій Коваленко</span>
                                <span>Звукорежисер</span>
                            </div>
                        </li>
                        <li className={commandStyles['command__portret']}>
                            <img src={command4} alt="Михайло Ковач" />
                            <div className={commandStyles['command__info']}>
                                <span className={commandStyles['command__text']}>Михайло Ковач</span>
                                <span>Ведучий</span>
                            </div>
                        </li>
                    </ul>
                    <img className={commandStyles['command__thorus']} src={thors} alt="Thors" />
                </div>
            </div>
        </section>
    )
}
export default Command