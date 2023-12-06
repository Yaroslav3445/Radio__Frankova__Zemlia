
import React, { useEffect, useState } from "react";
import Illustration from "../components/Illustration";
import { HeadShedule, Today, Schedule } from "../components/Schedule"
import Podcast from "../components/Podcast";
import Command from "../components/Command";
import Partner from "../components/Partner";
import Pageshedule from "./Page-shedule";
import MainPageStyles from "../style/mainPage.module.scss"
import Pyramid from "../components/Pyramid-img";
import Thours from "../components/Thours-img";
import Cube from "../components/Cube-img";
import Knot from "../components/Knot-img";
import Helix from "../components/Helix-img";
function MainPage() {

  const [scheduleData, setScheduleData] = React.useState(null);
  const handleDataUpdate = (data) => {
    setScheduleData(data);
  };
  return (
    <>
      <main>
        <Illustration />
        <HeadShedule />
        <Today />
        <div className={MainPageStyles.main}><Pageshedule onDataUpdate={handleDataUpdate} /></div>
        {scheduleData && (
          <Schedule data={scheduleData.data} weekDays={scheduleData.weekDays} activeDay={scheduleData.activeDay} />
        )}
        <div className={MainPageStyles.main__podcast}>
          <div className={`${MainPageStyles['main__image']} ${MainPageStyles['main__cube']}`}>
            <Cube />
          </div >
          <div className={`${MainPageStyles['main__image']} ${MainPageStyles['main__knot']}`}>
            <Knot />
          </div >
          <Podcast />
        </div>
        <div className={`${MainPageStyles['main__image']} ${MainPageStyles['main__knot']}`}>
          <Knot />
        </div >
        <div className={MainPageStyles.main__relative}>
          <Command itemsToShow={4} />
          <div className={`${MainPageStyles['main__image']} ${MainPageStyles['main__helix']}`}>
            <Helix />
          </div>
          <div className={`${MainPageStyles['main__image']} ${MainPageStyles['main__thoursCommand']}`}>
            <Thours />
          </div>
        </div>
        <div className={MainPageStyles.main__partner}>
          <Partner />
          <div className={`${MainPageStyles['main__image']} ${MainPageStyles['main__pyramid']}`}>
            <Pyramid />
          </div>
        </div>
      </main>
    </>
  );
}

export default MainPage;