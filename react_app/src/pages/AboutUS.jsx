import {React, useEffect} from "react";
import OurStory from "../components/About/OurStory";
import Testimonial from "../components/Testimonial/Testimonial";
import OurValues from "../components/About/OurValues";
import AboutSection from "../components/About/AboutSection";
import OurGoal from "../components/About/OurGoal";
import Banner from "../components/Banner/Banner";
const AboutUs = () => {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          const headerOffset = 100; // Adjust this based on your fixed header height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.scrollY - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    // Call on mount to handle initial hash
    scrollToHash();

    window.addEventListener("hashchange", scrollToHash);
    return () => {
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);
  return (
    <>
      <div className="pb-6">
        <div className="pt-16" id="introduction">
          <AboutSection />
        </div>
        <div id="ourvalues">
          <OurValues />
        </div>
        <Banner />
        <div id="ourgoal">
          <OurGoal />
        </div>
        <div id="ourmission">
          <OurStory />
        </div>
        <div id="testinomial">
          <Testimonial />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
