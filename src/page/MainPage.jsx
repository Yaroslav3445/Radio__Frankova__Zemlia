import React, {createContext, useEffect, useContext} from "react";
import Illustration from "../components/Illustration";
import { HeadShedule, Today } from "../components/Schedule";
import Podcast from "../components/Podcast";
import Command from "../components/Command";
import Partner from "../components/Partner";
import Schedule from "../components/Schedule";
import {Contextfol} from "../components/Context";

function MainPage() {
  const data = useContext(Contextfol)
  console.log('data', data)
  return (
    <>
      <Illustration />
      <HeadShedule />
      <Today />
      <Schedule carData ={data.activeDay}/>
      <Podcast />
      <Command />
      <Partner />
    </>
  );
}
export default MainPage;
