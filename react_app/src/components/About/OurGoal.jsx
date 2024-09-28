import React from "react";
import "./OurGoal.css";

export default function OurGoal() {
  return (
    <>
      <section className="OurGoal py-10">
        <div className="container">
          <div className="section-cards">
            <div className="section-card">
              <span>1</span>
              <h2> Explore Destinations</h2>
              <p>
                Discover new horizons and explore the world with our expert
                guides.
              </p>
              <a href="#">Explore Destination</a>
            </div>
            <div className="section-card">
              <span>2</span>
              <h2>Book Flights</h2>
              <p>
                Find the best deals on flights and book your ticket with ease.
              </p>
              <a href="#">Book Now</a>
            </div>
            <div className="section-card">
              <span>3</span>
              <h2>Plan Your Trip</h2>
              <p>
                Let us help you plan your dream trip with our expert travel
                advisors.
              </p>
              <a href="#">Get Started</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
