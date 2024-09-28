import React, { useState, useEffect } from "react";
import transportData from "../data.json";
import { Link } from "react-router-dom";

const HomeTravel = () => {
  const [transports, setTransports] = useState([]);

  // Shuffle function
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Effect to shuffle transports on load
  useEffect(() => {
    const shuffledTransports = shuffleArray([...transportData.Transport]).slice(
      0,
      6
    ); // Display 6 transport options
    setTransports(shuffledTransports);
  }, []);

  // TransportCard component
  const TransportCard = ({ transport }) => {
    const {
      id,
      origin,
      destination,
      airline,
      departure,
      arrival,
      price,
      duration,
      images,
    } = transport;

    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg h-[420px] flex flex-col">
        <Link
          to={`/transport/${id}`} // Link to a detailed transport page
          className="btn text-sm mt-auto"
        >
          <div className="relative">
            <div className="overflow-hidden">
              <img
                className="w-full h-40 object-cover transition duration-700 hover:scale-110"
                src={images[0]} // Display the first image
                alt={`${airline} from ${origin} to ${destination}`}
              />
            </div>
          </div>
          <div className="px-6 py-4 h-full flex flex-col justify-between">
            <div className="font-bold text-lg mb-2">
              {origin} to {destination}
            </div>
            <p className="text-gray-700 text-base font-light mb-2">
              Airline: {airline}
            </p>
            <p className="text-gray-700 text-base font-light mb-2">
              Departure: {departure} | Arrival: {arrival}
            </p>
            <p className="text-gray-700 text-base font-light mb-2">
              Duration: {duration}
            </p>
            <div className="flex justify-between aligncenter mb-2">
              {price !== undefined && (
                <p className="text-sm font-semibold mb-3">
                  Price: <span className="text-xl">${price}</span>
                </p>
              )}
              <button className="btn text-sm bg-blue-500 text-white py-2 px-4 rounded ">
                Book Now
              </button>
            </div>

            <button className="btn text-sm mt-auto"></button>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {transports.map((transport) => (
          <Link key={transport.id} to={`/transport/${transport.id}`}>
            <TransportCard
              transport={{
                id: transport.id,
                origin: transport.origin,
                destination: transport.destination,
                airline: transport.transport[0].details.airline,
                departure: transport.transport[0].details.departure,
                arrival: transport.transport[0].details.arrival,
                price: transport.transport[0].details.price,
                duration: transport.transport[0].details.duration,
                images: transport.transport[0].details.image,
              }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeTravel;
