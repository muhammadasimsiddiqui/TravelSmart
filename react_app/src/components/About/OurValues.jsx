import React from "react";
import SectionHeading from "../Heading/SectionHeading";

export default function OurValues() {
  return (
    <>
      <section className="bg-white py-6 container">
        <div className=" mx-auto px-4">
          {" "}
          <SectionHeading SectionHeading="Our Values" />
          <div className="grid grid-cols-1 text-center md:grid-cols-3 gap-8">
            <div className="p-6 shadow-lg rounded-lg bg-gray-50">
              <h3 className="text-2xl font-bold mb-3">Customer First</h3>
              <p className="text-gray-600">
                We prioritize our customers' needs and provide personalized
                experiences that exceed expectations.
              </p>
            </div>
            <div className="p-6 shadow-lg rounded-lg bg-gray-50">
              <h3 className="text-2xl font-bold mb-3">Sustainability</h3>
              <p className="text-gray-600">
                Traveling responsibly is important to us, and we ensure our
                trips support local communities and the environment.
              </p>
            </div>
            <div className="p-6 shadow-lg rounded-lg bg-gray-50">
              <h3 className="text-2xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously improve our services, offering cutting-edge
                technology and creative solutions for a better travel
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
