
import React, { useEffect, useState } from "react";
import Illustration from "../components/Illustration";
import { HeadShedule, Today, Schedule } from "../components/Schedule"
import Podcast from "../components/Podcast";
import Command from "../components/Command";
import Partner from "../components/Partner";
import Pageshedule from "./Page-shedule";
import DataWeek from "../data/data.json";
import MainPageStyles from "../style/mainPage.module.scss"
function MainPage() {

  const [scheduleData, setScheduleData] = React.useState(null);

  const handleDataUpdate = (data) => {
    setScheduleData(data);
  };
  return (
    <>
      <Illustration />
      <HeadShedule />
      <Today />
      <div className={MainPageStyles.main}><Pageshedule onDataUpdate={handleDataUpdate} /></div>
      {scheduleData && (
        <Schedule data={scheduleData.data} weekDays={scheduleData.weekDays} activeDay={scheduleData.activeDay} />
      )}
      <Podcast />
      <Command />
      <Partner />
    </>
  );
}

export default MainPage;