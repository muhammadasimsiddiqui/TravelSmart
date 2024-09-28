import React from "react";
import "./About.css";
import About_Img from "/img/banner/about-img.jpg";
import About_Img_One from "/img/banner/about-img-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function AboutSection() {
  return (
    <>
      <div className="container mx-auto py-10">
        <div className="flex flex-col lg:flex-row items-center gap-5">
          <div className="lg:w-5/12">
            <div className="w-full h-full border-[50px] border-transparent border-t-[#13357B] border-b-[#13357B]">
              <img
                src={About_Img}
                className="w-full h-full object-cover"
                alt="Travel experience representation"
              />
            </div>
          </div>
          <div className="relative lg:w-7/12 p-8">
            <div
              className="absolute inset-0 bg-white bg-opacity-15"
              style={{
                backgroundImage: `url(${About_Img_One})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: 0,
                opacity: 0.15,
              }}
            />
            
            <div className="relative z-10">
              <h5 className="text-lg font-semibold text-gray-700">About Us</h5>
              <h1 className="text-4xl font-bold mb-4">
                Welcome to <span className="text-primary">TravelSmart</span>
              </h1>
              <p className="mb-4">
                At TravelSmart, we believe that every journey should be as
                memorable as the destination itself. Whether you're exploring
                exotic beaches or navigating bustling city streets, we’re here
                to ensure your travel experience is nothing short of
                exceptional. With personalized itineraries and top-tier
                services, we take care of every detail, so you can focus on
                creating unforgettable memories.
              </p>
              <p className="mb-4">
                From luxury vacations to spontaneous weekend getaways, our
                expert team is dedicated to crafting trips that cater to your
                unique tastes and preferences. With TravelSmart, your adventure
                begins the moment you step out of your door.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <p>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-primary mr-2"
                  />
                  First Class Flights
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-primary mr-2"
                  />
                  Handpicked Hotels
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-primary mr-2"
                  />
                  5 Star Accommodations
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-primary mr-2"
                  />
                  Latest Model Vehicles
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-primary mr-2"
                  />
                  150 Premium City Tours
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-primary mr-2"
                  />
                  24/7 Service
                </p>
              </div>
              <button className="btn-main">
                <span> Read More</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
