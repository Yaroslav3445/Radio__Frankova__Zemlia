
import commandStyles from '../style/command.module.scss'
import yellowLine from '../image/yellowLine.svg'
import command from '../data/command.json'
const FullCommand = () => {
    return (
        <>
            <section>
                <div className={commandStyles.command}>
                    <div className={commandStyles['command__peson-wrap']}>
                        <ul className={commandStyles['command__person']}>
                            {command.slice(4, 8).map(info => (
                                <li key={info.id} className={commandStyles['command__portret']}>
                                    <img src={info.image} alt="Марія Іваненко" />
                                    <div className={commandStyles['command__info']}>
                                        <span className={commandStyles['command__text']}>{info.name}</span>
                                        <span>{info.jobTitle}</span>
                                        <ul className={commandStyles.command__summary}>
                                            <li>{info.portfolio}</li>
                                            <li>{info.personalInfo}</li>
                                        </ul>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
export default FullCommand