import React, { useContext, useEffect } from "react";
import "../style/reset.scss";
import scheduleStyles from "../style/schedule.module.scss";
import spheres from "../image/spheres.png";
import yellowLine from "../image/yellowLine.svg";
import helix from "../image/helix.png";


const HeadShedule = () => {

  return (
    <>
      <div className={scheduleStyles.schedule__link}>
        <img
          className={scheduleStyles.schedule__spheres}
          src={spheres}
          alt="Spheres"
        />
        <h1>Розклад</h1>
        <img
          className={`${scheduleStyles["schedule__yellow-line"]}`}
          src={yellowLine}
          alt="Yellow Line"
        />
      </div>
    </>
  );
};

export { HeadShedule };

const Today = () => {
  return (
    <>
      <div
        className={scheduleStyles.schedule__head}>
        <span>Сьогодні у програмі</span>
      </div>
    </>
  );
};
export { Today };

const Schedule = ({ data, weekDays, activeDay }) => {
  if (!weekDays || !activeDay) {
    return <p>Неправильні дані про тиждень</p>;
  }

  const activeDayIndex = weekDays.indexOf(activeDay);

  if (activeDayIndex === -1 || !data || data.length === 0) {
    return <p>Неправильні дані або даних для цього дня немає</p>;
  }

  const activeData = data[activeDayIndex];


  return (
    <>
      <section>
        <div className={scheduleStyles.schedule}>
          <div className={`${scheduleStyles["schedule__table-wrap"]}`}>
            <table className={scheduleStyles.schedule__table}>
              <tbody>
                {activeData.map(data => (
                  < tr key={data.id} className={scheduleStyles.schedule__tr} >
                    <td className={scheduleStyles.schedule__td}>
                      {data.session}
                    </td>
                    <td className={`${scheduleStyles["schedule__td-text"]}`}>
                      <h2>{data.nameInfo}</h2>
                      <p>{data.Info}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <img
              className={scheduleStyles.schedule__helix}
              src={helix}
              alt="Helix"
            />
          </div>
        </div>

      </section >
    </>
  );
};
export  { Schedule };


