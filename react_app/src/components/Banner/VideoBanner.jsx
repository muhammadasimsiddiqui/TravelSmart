import React from "react";
import './VideoBanner.css'

export default function VideoBanner() {
  return (
    <section className="banner relative w-full flex items-center justify-center py-8">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
          
        >
          <source src="/video/banner/campaign.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative z-10 container mx-auto text-center">
        <div className="text-white banner-content ">
          <h2 className="pb-5 mb-5 text-5xl font-bold">BEST IN TRAVEL 2024</h2>
          <button className="btn-main ">
            <span>Explore Now</span>
          </button>
        </div>
      </div>
    </section>
  );
}
