import React, { useState, useEffect } from "react";
import pageSheduleStyles from "../style/page-shedule.module.scss";
import DataWeek from "../data/data.json";
import { HeadShedule } from "../components/Schedule";
import { Schedule } from "../components/Schedule";


const Pageshedule = ({ onDataUpdate }) => {
  const weekDays = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота', 'Неділя'];
  const [activeDay, setActiveDay] = useState('');

  const handleDayClick = (day) => {
    setActiveDay(day);
  };

  useEffect(() => {
    const currentDate = new Date();
    const currentDayIndex = currentDate.getDay();

    setActiveDay(weekDays[currentDayIndex]);

    if (typeof onDataUpdate === 'function') {
      onDataUpdate({ data: DataWeek, weekDays, activeDay: weekDays[currentDayIndex] });
    }
  }, []); 

  useEffect(() => {
    if (typeof onDataUpdate === 'function') {
      onDataUpdate({ data: DataWeek, weekDays, activeDay });
    }
  }, [onDataUpdate, activeDay, weekDays]);

  return (
    <>
        <HeadShedule />
        <ul className={pageSheduleStyles.week}>
          {weekDays.map((day, index) => (
            <li key={index}>
              <button
                onClick={() => handleDayClick(day)}
                className={pageSheduleStyles.week__day}
                style={{
                  backgroundColor: day === activeDay ? '#4DE5FF' : '#fff',
                  color: day === activeDay ? '#fff' : '#000',
                  transition: '0.3s ease',
                }}
              >
                {day}
              </button>
            </li>
          ))}
        </ul>
        <Schedule data={DataWeek} weekDays={weekDays} activeDay={activeDay} />
    </>
  );
};



export default Pageshedule;
