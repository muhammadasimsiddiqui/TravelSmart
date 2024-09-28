import React, { useState, useEffect } from "react";
import transportData from "../data.json";
import { Link } from "react-router-dom";

const TransportPg = () => {
  const [transports, setTransports] = useState([]);
  const [filters, setFilters] = useState({
    airline: "",
    type: "",
  });
  const [search, setSearch] = useState("");

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
    const shuffledTransports = shuffleArray([...transportData.Transport]);
    setTransports(shuffledTransports);
  }, []);

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // Filter transports based on selected filters
  const filteredTransports = transports.filter((transport) => {
    const matchesAirline = filters.airline
      ? transport.transport[0].details.airline === filters.airline
      : true;
    const matchesType = filters.type
      ? transport.transport[0].type === filters.type
      : true;
    const matchesSearch = search
      ? transport.origin.toLowerCase().includes(search.toLowerCase()) ||
        transport.destination.toLowerCase().includes(search.toLowerCase())
      : true;

    return matchesAirline && matchesType && matchesSearch;
  });

  // Prepare unique values for filter options
  const airlines = [
    ...new Set(transports.map((t) => t.transport[0].details.airline)),
  ];
  const types = [...new Set(transports.map((t) => t.transport[0].type))];

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
              <p className="text-sm font-semibold">
                Price: <span className="text-xl">${price}</span>
              </p>
            )}
            <Link
              to={`/transport/${id}`} // Link to a detailed transport page
              className="btn text-sm bg-blue-500 text-white py-2 px-4 rounded "
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-4 mt-16">
      <input
        type="text"
        placeholder="Search by origin or destination..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        <select
          name="airline"
          onChange={handleFilterChange}
          className="p-2 border rounded"
          value={filters.airline}
        >
          <option value="">All Airlines</option>
          {airlines.map((airline) => (
            <option key={airline} value={airline}>
              {airline}
            </option>
          ))}
        </select>
        <select
          name="type"
          onChange={handleFilterChange}
          className="p-2 border rounded"
          value={filters.type}
        >
          <option value="">All Types</option>
          <option value="Airline">Airline</option>
          {/* Add more transport types if necessary */}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTransports.map((transport) => (
           <Link key={transport.id} to={`/transport/${transport.id}`}>
          <TransportCard
            key={transport.id}
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
          /></Link>
        ))}
      </div>
    </div>
  );
};

export default TransportPg;
