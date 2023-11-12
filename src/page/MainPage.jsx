import React, {createContext, useEffect, useContext} from "react";
import Illustration from "../components/Illustration";
import { HeadShedule, Today } from "../components/Schedule";
import Podcast from "../components/Podcast";
import Command from "../components/Command";
import Partner from "../components/Partner";
import Schedule from "../components/Schedule";

function MainPage(props) {
  return (
    <>
      <Illustration />
      <HeadShedule />
      <Today />
      <Schedule  />
      <Podcast />
      <Command />
      <Partner />
    </>
  );
}
export default MainPage;
