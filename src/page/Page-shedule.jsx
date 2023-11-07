import React, { useState, useEffect } from "react";
import pageSheduleStyles from "../style/page-shedule.module.scss";
import Schedule from "../components/Schedule";
const Pageshedule = () => {
  const weekDays = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота', 'Неділя'];
  const [activeDay, setActiveDay] = useState(null);
  const [activeBtn, setActiveBtn] = useState(Array(weekDays.length).fill(false));
  const activeButton = (index) => {
    setActiveDay(weekDays[index]);
    const newButtonActive = [...activeBtn]
    newButtonActive[index] = true
    for (let i = 0; i < newButtonActive.length; i++) {
      if (i !== index) {
        newButtonActive[i] = false;
      }
    };
    setActiveBtn(newButtonActive)
  }
  useEffect(() => {
    const currentDayIndex = new Date().getDay() - 1;

    if (currentDayIndex >= 0 && currentDayIndex < weekDays.length) {
      setActiveDay(currentDayIndex);
    }
  }, []);

  return (
    <>
      <section>
        <ul className={pageSheduleStyles.week}>
          {weekDays.map((day, index) =>
            <li key={index}>
              <button
                onClick={() => activeButton(index)}
                className={pageSheduleStyles.week__day} style={
                  {
                    backgroundColor: activeBtn[index] ? ' #4DE5FF' : '#fff',
                    color: activeBtn[index] ? '#fff' : '#000',
                    transition: '0.3s ease'
                  }
                }
              >
                {day}
              </button>
            </li>
          )}
        </ul>
        <Schedule activeDay={activeDay} />
      </section>
    </>
  );
};
export default Pageshedule;
