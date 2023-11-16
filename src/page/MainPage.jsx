import React, {createContext, useEffect, useContext} from "react";
import Illustration from "../components/Illustration";
import { HeadShedule, Today } from "../components/Schedule";
import Podcast from "../components/Podcast";
import Command from "../components/Command";
import Partner from "../components/Partner";
import Schedule from "../components/Schedule";
import Playpodcast from "../components/play-podcast";
function MainPage(props) {
  return (
    <>
      {/* <Illustration />
      <HeadShedule />
      <Today />
      <Schedule  />
      <Podcast />
      <Command />
      <Partner /> */}
      <Playpodcast/>
    </>
  );
}
export default MainPage;
