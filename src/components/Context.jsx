import React, { createContext, useEffect, useState } from 'react';
import Data from '../info/data'
export const Contextfol = createContext()


const Contextlof = (props) => {
    const weekDays = ['', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота', 'Неділя',];

    const [activeDay, setActiveDay] = useState(null);
  
    useEffect(() => {
      const currentDate = new Date();
      const currentDayIndex = currentDate.getDay();
  
      setActiveDay(weekDays[currentDayIndex]);
    }, []);
  const log = {
    weekDays,
    activeDay,

  }
    return (<Contextfol.Provider value={log}>{props.children}</Contextfol.Provider>)
};

export default Contextlof;