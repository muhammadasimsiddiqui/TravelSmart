import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlusSquare } from "@fortawesome/free-solid-svg-icons";

const DestinationGalleryData = [
  {
    id: 1,
    imageSrc: "img/destinations/destination-1.jpg",
    title: "New York City",
    country: "USA",
  },
  {
    id: 2,
    imageSrc: "img/destinations/destination-2.jpg",
    title: "Las Vegas",
    country: "USA",
  },
  {
    id: 3,
    imageSrc: "img/destinations/destination-3.jpg",
    title: "San Francisco",
    country: "USA",
  },
  {
    id: 4,
    imageSrc: "img/destinations/destination-4.jpg",
    title: "Toronto",
    country: "Canada",
  },
  {
    id: 5,
    imageSrc: "img/destinations/destination-5.jpg",
    title: "Vancouver",
    country: "Canada",
  },
  {
    id: 6,
    imageSrc: "img/destinations/destination-6.jpg",
    title: "London",
    country: "UK",
  },
  {
    id: 7,
    imageSrc: "img/destinations/destination-7.jpg",
    title: "Paris",
    country: "France",
  },
  {
    id: 8,
    imageSrc: "img/destinations/destination-8.jpg",
    title: "Berlin",
    country: "Germany",
  },
  {
    id: 9,
    imageSrc: "img/destinations/destination-9.jpg",
    title: "Beijing",
    country: "China",
  },
];

const countries = ["All", "USA", "Canada", "UK", "France", "Germany", "China"];

export default function DestinationGallery() {
  const [selectedCountry, setSelectedCountry] = useState("All");

  const filteredDestinations = DestinationGalleryData.filter(
    (destination) =>
      selectedCountry === "All" || destination.country === selectedCountry
  );

  return (
    <>
      <section className="container">
        <div className="mx-auto p-4  py-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-5">
              <h5 className="text-lg font-bold mb-2">Destination</h5>
              <h1 className="text-3xl font-bold mb-0">Popular Destinations</h1>
            </div>

            <div className="flex justify-center mb-5">
              <ul className="flex flex-wrap justify-center space-x-2">
                {countries.map((country, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setSelectedCountry(country)}
                      className={`py-2 px-4 text-sm font-bold rounded-full ${
                        selectedCountry === country
                          ? "bg-gray-200"
                          : "bg-gray-100 hover:bg-gray-200"
                      }`}
                    >
                      {country}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredDestinations.map((destination) => (
                <div
                  key={destination.id}
                  className="relative overflow-hidden rounded-lg group transition-transform duration-300"
                >
                  <a
                    href={destination.imageSrc}
                    data-lightbox={destination.country}
                    data-title={destination.title}
                  >
                    <img
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      src={destination.imageSrc}
                      alt={destination.title}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-60 transition-transform transform translate-y-full group-hover:translate-y-0">
                      <h4 className="text-white mb-2 mt-3">
                        {destination.title}
                      </h4>
                      <a href="#" className="text-white hover:text-gray-300">
                        View All Places{" "}
                        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                      </a>
                    </div>
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FontAwesomeIcon
                        icon={faPlusSquare}
                        className="fa-lg text-white"
                      />
                    </div>{" "}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
