import React, { useState, useEffect ,} from "react";
import pageSheduleStyles from "../style/page-shedule.module.scss";
import Schedule from "../components/Schedule";
import DataWeek from "../data/data.json";
import { HeadShedule } from "../components/Schedule";
const Pageshedule = () => {
  const weekDays = [ 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота', 'Неділя',];

  const [activeDay, setActiveDay] = useState(null);

  useEffect(() => {
    const currentDate = new Date();
    const currentDayIndex = currentDate.getDay();

    setActiveDay(weekDays[currentDayIndex]);
  }, []);

  return (
    <>
      <section>
        <HeadShedule />
        <ul className={pageSheduleStyles.week}>
          {weekDays.map((day, index) =>
            <li key={index}>
              <button
                onClick={() => setActiveDay(day)}
                className={pageSheduleStyles.week__day} style={
                  {
                    backgroundColor: day === activeDay ? ' #4DE5FF' : '#fff',
                    color: day === activeDay ? '#fff' : '#000',
                    transition: '0.3s ease'
                  }
                }
              >
                {day}
              </button>
            </li>
          )}
        </ul>
        <Schedule data={DataWeek} weekDays={weekDays} activeDay={activeDay} />
      </section>
    </>
  );
};
export default Pageshedule;
