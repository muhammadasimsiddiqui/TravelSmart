import React from "react";
import AboutSection from "./AboutSection";
import OurGoal from "./OurGoal";
// import OurStory from "./OurStory";
import PageBanner from "../PageBanner/PageBanner.jsx"; // Reusable banner
import AboutPicture from "/img/banner/footer_coud.jpg"; // Image import
export default function About() {
  return (
    <>
      <PageBanner
        backgroundImage={AboutPicture}
        title="Welcome to TravelSmart"
      />
      <AboutSection />
      <OurGoal />
      {/* <OurStory /> */}
    </>
  );
}
