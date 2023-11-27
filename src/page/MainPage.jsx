
import React, { useEffect, useState } from "react";
import Illustration from "../components/Illustration";
import { HeadShedule, Today, Schedule } from "../components/Schedule"
import Podcast from "../components/Podcast";
import Command from "../components/Command";
import Partner from "../components/Partner";
import Pageshedule from "./Page-shedule";
import MainPageStyles from "../style/mainPage.module.scss"
import Pyramid from "../components/pyramid";
import Thours from "../components/thours";
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
        <Podcast />
        <Thours />
        <Command itemsToShow={4} />
        <Thours />
        <Partner />
        <Pyramid />
      </main>
    </>
  );
}

export default MainPage;