import React, { useState } from "react";
import pageSheduleStyles from "../style/page-shedule.module.scss";
import Schedule from "../components/Schedule";
const Pageshedule = () => {
  const [active, setActive] = useState(false);
  const activeButton = () => {
    setActive(!active);
  };
  return (
    <>
      <section>
        <div className={pageSheduleStyles.week}>
          <button
            onClick={activeButton}
            className={`${
              active
                ? pageSheduleStyles["week__day"]
                : pageSheduleStyles["week__active"]
            }`}
          >
            Понеділок
          </button>
          <button
            onClick={activeButton}
            className={`${
              active
                ? pageSheduleStyles["week__day"]
                : pageSheduleStyles["week__active"]
            }`}
          >
            Вівторок
          </button>
          <button
            onClick={activeButton}
            className={`${
              active
                ? pageSheduleStyles["week__day"]
                : pageSheduleStyles["week__active"]
            }`}
          >
            Середа
          </button>
          <button
            onClick={activeButton}
            className={`${
              active
                ? pageSheduleStyles["week__day"]
                : pageSheduleStyles["week__active"]
            }`}
          >
            Четвер
          </button>
          <button
            onClick={activeButton}
            className={`${
              active
                ? pageSheduleStyles["week__day"]
                : pageSheduleStyles["week__active"]
            }`}
          >
            П'ятниця
          </button>
          <button
            onClick={activeButton}
            className={`${
              active
                ? pageSheduleStyles["week__day"]
                : pageSheduleStyles["week__active"]
            }`}
          >
            Субота
          </button>
          <button
            onClick={activeButton}
            className={`${
              active
                ? pageSheduleStyles["week__day"]
                : pageSheduleStyles["week__active"]
            }`}
          >
            Неділя
          </button>
        </div>
      </section>
    </>
  );
};
export default Pageshedule;
