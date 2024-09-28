import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TourCard from "../TourCards/Tourcard";
import accommodationsData from "../data.json";

export default function HomeAccommodation() {
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    // Shuffle accommodations
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    const shuffledAccommodations = shuffleArray([
      ...accommodationsData.Accommodation,
    ]).slice(0, 6);
    setAccommodations(shuffledAccommodations);
  }, []);

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {accommodations.map((accommodation) => (
          <Link
            key={accommodation.id}
            to={`/accommodations/${accommodation.id}`}
          >
            <TourCard
              tour={{
                id: accommodation.id,
                img: accommodation.image[0],
                title: accommodation.name,
                location: accommodation.country,
                price: accommodation.pricePerNight,
                description: accommodation.highlights.join(", "),
                rating: accommodation.rating,
              }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
