import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import HomeCardsData from "../data.json";
import TourCard from "../TourCards/TourCard"; // Adjust the path if necessary
import SectionHeading from "../Heading/SectionHeading"; // Adjust the path if necessary

export default function HomeSixCards() {
  const [data, setData] = useState({
    Accommodation: [],
    Transport: [],
    Destinations: [],
  });
  const [currentView, setCurrentView] = useState("Accommodation");

  useEffect(() => {
    setData(HomeCardsData);
  }, []);

  const handleFilterChange = (view) => {
    setCurrentView(view);
  };

  const getCurrentCards = () => {
    switch (currentView) {
      case "Accommodation":
        return data.Accommodation.slice(0, 6) || []; // Get only the first 6 cards
      case "Transport":
        return data.Transport.slice(0, 6) || []; // Get only the first 6 cards
      case "Destinations":
        return data.Destinations.slice(0, 6) || []; // Get only the first 6 cards
      default:
        return [];
    }
  };

  const currentCards = getCurrentCards();

  return (
    <div className="container">
      <div className="mx-auto p-4">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
          <SectionHeading SectionHeading={currentView} />
          <div className="flex flex-wrap space-x-2 mt-2 sm:mt-0">
            {["Accommodation", "Transport", "Destinations"].map((view) => (
              <button
                key={view}
                onClick={() => handleFilterChange(view)}
                className={`px-4 py-2 border-b-2 ${
                  currentView === view
                    ? "border-blue-500 text-blue-500"
                    : "border-transparent text-gray-600 hover:text-blue-500"
                } transition duration-200`}
              >
                {view}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentCards.map((item) => {
            const linkPath =
              currentView === "Transport"
                ? `/transport/${item.id}`
                : currentView === "Accommodation"
                ? `/accommodations/${item.id}`
                : `/destination/${item.id}`;

            return (
              <Link key={item.id} to={linkPath}>
                <TourCard
                  tour={{
                    id: item.id,
                    img:
                      currentView === "Transport" &&
                      item.transport[0]?.details.image
                        ? item.transport[0].details.image[0]
                        : item.image && item.image[0]
                        ? item.image[0]
                        : "", // Safeguard for images
                    title: item.name || item.destination || "No Title", // Fallback for title
                    location:
                      currentView === "Transport"
                        ? item.origin || "Unknown Origin" // Use origin for transport
                        : item.city
                        ? `${item.city}, ${item.country}`
                        : "Unknown Location", // Fallback for accommodation and destinations
                    price:
                      item.pricePerNight ||
                      (item.transport && item.transport[0]?.details.price) ||
                      "N/A", // Fallback
                    description:
                      item.highlights?.join(", ") ||
                      item.description ||
                      "No Description", // Fallback
                    rating: item.rating > 0 ? item.rating : null, // Only pass rating if greater than 0
                  }}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
