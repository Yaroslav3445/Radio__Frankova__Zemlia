import React from "react";
import "../style/reset.scss";
import scheduleStyles from "../style/schedule.module.scss";
import spheres from "../image/spheres.png";
import yellowLine from "../image/yellowLine.svg";
import helix from "../image/helix.png";
import Data from "../data/data.json";

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

const Schedule = ({ activeDay }) => {
  const filteredData = Data.filter((innerArray) => {
    return innerArray.some((data) => data.day === activeDay);
  });

  return (
    <>
      <section>
        <div className={scheduleStyles.schedule}>
          <div className={`${scheduleStyles["schedule__table-wrap"]}`}>
            <table className={scheduleStyles.schedule__table}>
              <tbody>
                {Data.map((innerArray, indexArray) => (
                  innerArray.map((data, indexArray) => (
                    < tr key={data.id} className={scheduleStyles.schedule__tr} >
                      <td className={scheduleStyles.schedule__td}>
                        {data.session}
                      </td>
                      <td className={`${scheduleStyles["schedule__td-text"]}`}>
                        <h2>{data.nameInfo}</h2>
                        <p>{data.Info}</p>
                      </td>
                    </tr>
                  ))
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
export default Schedule;


