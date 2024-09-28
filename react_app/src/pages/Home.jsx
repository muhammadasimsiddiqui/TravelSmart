import React from "react";
import Hero from "../components/Hero/Hero";
import NatureVid from "/video/banner/hero.mp4";
import Testimonial from "../components/Testimonial/Testimonial";
import Banner from "../components/Banner/Banner";
import OrderPopup from "../components/OrderPopup/OrderPopup";
import DestinationGallery from "../components/DestinationGallery/DestinationGallery";
import HomeAccommodation from "../components/HomeCards/HomeAccommodation";
import SectionHeading from "../components/Heading/SectionHeading";
import HomeDestination from "../components/HomeCards/HomeDestination";
import HomeTravel from "../components/HomeCards/HomeTravel";
import AboutSection from "../components/About/AboutSection";
import OurGoal from "../components/About/OurGoal";
import OurValues from "../components/About/OurValues";
import OurStory from "../components/About/OurStory";
import VideoBanner from  "../components/Banner/VideoBanner";
import HomeSixCards from "../components/HomeCards/HomeSixCards";

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <div className="pb-6">
        <div className="h-[700px] relative">
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
            <source src={NatureVid} type="video/mp4" />
          </video>
          <Hero />
        </div>
        <HomeSixCards />
        <OurGoal />
        <section className="container">
          <SectionHeading SectionHeading="Accommodation" />
          <HomeAccommodation />
        </section>
        <section className="py-10">
          <VideoBanner />
        </section>
        <section className="container">
          <SectionHeading SectionHeading="Destination" />
          <HomeDestination />
        </section>
        <AboutSection />
        <section className="container">
          <SectionHeading SectionHeading="Travel" />
          <HomeTravel />
        </section>
        <Banner />
        <DestinationGallery />
        <OurValues />
        <OurStory />
        <Testimonial />
        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </>
  );
};

export default Home;
