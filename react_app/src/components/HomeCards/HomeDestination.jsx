import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TourCard from "../TourCards/Tourcard";
import destinationsData from "../data.json";

const HomeDestination = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    // Shuffle destinations
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    const shuffledDestinations = shuffleArray([
      ...destinationsData.Destinations,
    ]).slice(0, 6); // Change 6 to however many you want to display
    setDestinations(shuffledDestinations);
  }, []);

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {destinations.map((destination) => (
          <Link key={destination.id} to={`/destination/${destination.id}`}>
            <TourCard
              tour={{
                id: destination.id,
                img: destination.image[0],
                title: destination.name,
                location: destination.country,
                description: destination.description,
                rating: destination.rating,
              }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeDestination;
