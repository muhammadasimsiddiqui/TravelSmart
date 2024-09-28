import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaEnvelope,
  FaQuestionCircle, // Added for FAQ icon
  FaShieldAlt, // Added for Privacy Policy icon
} from "react-icons/fa";

const SiteMapSec = () => {
  return (
    <section className="py-10 pt-16 mt-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-4">
          Navigate with Ease
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Explore our comprehensive site map to find exactly what you need!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <FaHome className="mr-3 text-primary" />
              Home
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-primary transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <FaInfoCircle className="mr-3 text-primary" />
              About Us
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about/#introduction"
                  className="text-gray-700 hover:text-primary transition-colors duration-300"
                >
                  Our Introduction
                </Link>
              </li>
              <li>
                <Link
                  to="/about/#ourvalues"
                  className="text-gray-700 hover:text-primary transition-colors duration-300"
                >
                  Our Values
                </Link>
              </li>
              <li>
                <Link
                  to="/about/#ourmission"
                  className="text-gray-700 hover:text-primary transition-colors duration-300"
                >
                  Our Mission
                </Link>
              </li>
              <li>
                <Link
                  to="/about/#testimonial"
                  className="text-gray-700 hover:text-primary transition-colors duration-300"
                >
                  Testimonial
                </Link>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <FaServicestack className="mr-3 text-primary" />
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/destinations"
                  className="text-gray-700 hover:text-primary transition-colors duration-300"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  to="/accommodations"
                  className="text-gray-700 hover:text-primary transition-colors duration-300"
                >
                  Accommodations
                </Link>
              </li>
              <li>
                <Link
                  to="/transport"
                  className="text-gray-700 hover:text-primary transition-colors duration-300"
                >
                  Transport
                </Link>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <FaEnvelope className="mr-3 text-primary" />
              Contact Page
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/contact-us"
                  className="text-gray-700 hover:text-primary transition-colors duration-300"
                >
                  Get In Touch
                </Link>
              </li>
            </ul>
          </div>
          {/* New Support Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <FaQuestionCircle className="mr-3 text-primary" />
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/faqs"
                  className="text-gray-700 hover:text-primary transition-colors duration-300"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-700 hover:text-primary transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="text-gray-700 hover:text-primary transition-colors duration-300"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiteMapSec;
