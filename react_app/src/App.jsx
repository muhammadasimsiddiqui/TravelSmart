import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUS";
import Services from "./pages/Services";
import Accommodation from "./pages/Services/Accommodation";
import Destinations from "./pages/Services/Destinations";
import Transport from "./pages/Services/Transport";
import AccommodationDetail from "./components/ServicesPageSection/AccommodationDetail";
import DestinationDetail from "./components/ServicesPageSection/DestinationDetail";
import TransportDetail from "./components/ServicesPageSection/TransportDetail";
import Sitemap from "./pages/Sitemap";
import Feedback from "./pages/Feedback";
import FAQs from "./pages/FAQs";
import TermsAndConditions from "./pages/Termsandconditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/accommodations" element={<Accommodation />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/accommodations/:id" element={<AccommodationDetail />} />
          <Route path="/destination/:id" element={<DestinationDetail />} />
          <Route path="/transport/:id" element={<TransportDetail />} />
          <Route path="/faqs" element={<FAQs />}/>
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
