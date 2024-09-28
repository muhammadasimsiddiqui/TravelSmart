import React from "react";
import LOGO from "/img/Logo/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup, faLink } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const FooterLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Services", link: "/#" },
  { title: "Contact Us", link: "/contact-us" },
];

const FooterSupportLinks = [
  { title: "FAQ", link: "/faqs" },
  { title: "Privacy Policy", link: "/privacy-policy" },
  { title: "Terms & Conditions", link: "/terms-and-conditions" },
];

const Footer = () => {
  return (
    <footer className="site_footer">
      <div className="container">
        <div className="site_footercontent container mx-auto px-4">
          <div className="site_footertop">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/5 sm:w-1/2 mb-5 lg:mb-0 pr-5">
                <img
                  src={LOGO}
                  alt="TravelSmart"
                  loading="lazy"
                  className="max-w-xs lg:max-w-full" // Responsive class added
                />
              </div>
              <div className="w-full lg:w-1/4 sm:w-1/2 mb-5 lg:mb-0">
                <div className="flex items-center mb-3">
                  <FontAwesomeIcon icon={faUserGroup} className="text-white" />
                  <h4 className="text-white font-medium ml-2">About Us</h4>
                </div>
                <p className="mb-4 ps-0 text-white">
                  TravelSmart makes planning your next adventure easy with
                  comprehensive travel packages, including destinations,
                  activities, and accommodations.
                </p>
                <ul className="social-network flex items-center p-0">
                  {[
                    { icon: faFacebookF, link: "https://www.facebook.com" },
                    { icon: faTwitter, link: "https://twitter.com" },
                    { icon: faLinkedinIn, link: "https://www.linkedin.com" },
                    { icon: faYoutube, link: "https://www.youtube.com" },
                  ].map(({ icon, link }, index) => (
                    <li key={index}>
                      <Link
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.split("//")[1]}
                        className="!text-white mr-3"
                      >
                        <FontAwesomeIcon icon={icon} />
                     </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <nav className="w-full lg:w-1/4 sm:w-1/2 mb-5 lg:mb-0 lg:ml-auto">
                <div className="flex items-center mb-3">
                  <FontAwesomeIcon icon={faLink} className="text-white" />
                  <h4 className="text-white font-medium ml-2">
                    Important Links
                  </h4>
                </div>
                <ul className="link-widget p-0">
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-2 duration-300 text-white space-x-1 text-gray-700 dark:text-gray-200"
                    >
                      <Link
                        to={link.link}
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span>&#11162;</span> <span>{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <nav className="w-full lg:w-1/4 sm:w-1/2 mb-5 lg:mb-0 lg:ml-auto">
                <div className="flex items-center mb-3">
                  <FontAwesomeIcon icon={faHeadset} className="text-white" />
                  <h4 className="text-white font-medium ml-2">Support</h4>
                </div>
                <ul className="link-widget p-0">
                  {FooterSupportLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-2 duration-300 text-white space-x-1 text-gray-700 dark:text-gray-200"
                    >
                      <Link
                        to={link.link}
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span>&#11162;</span> <span>{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          <hr className="p-0 m-0" />
          <div className="container py-3 flex items-center justify-center text-center">
            <p className="text-white">
              Copyright &copy; 2024 TravelSmart. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
