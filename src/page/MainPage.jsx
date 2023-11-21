
import React, { useEffect } from "react";
import Illustration from "../components/Illustration";
import { HeadShedule, Today, Schedule } from "../components/Schedule"
import Podcast from "../components/Podcast";
import Command from "../components/Command";
import Partner from "../components/Partner";
import Pageshedule from "./Page-shedule";
import DataWeek from "../data/data.json";
function MainPage() {
  const { weekDays, activeDay } = Pageshedule();
  return (
    <>
      <Illustration />
      <HeadShedule />
      <Today />
      <Schedule data={DataWeek} weekDays={weekDays} activeDay={activeDay} />
      <Podcast />
      <Command />
      <Partner />
    </>
  );
}

export default MainPage;