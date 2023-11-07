import React from "react";
import Illustration from "../components/Illustration";
import Schedule from "../components/Schedule";
import Podcast from "../components/Podcast";
import Command from "../components/Command";
import Partner from "../components/Partner";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageShedule from "../page/Page-shedule";

function MainPage() {
  return (
    <>
      <Illustration />
      <Schedule />
      <Podcast />
      <Command />
      <Partner />
      {/* <PageShedule /> */}
    </>
  );
}
export default MainPage;
