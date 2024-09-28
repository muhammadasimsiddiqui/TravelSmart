import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import TourCard from "../TourCards/Tourcard"; // Import your TourCard component
import destinationsData from "../data.json";

const DestinationsPg = () => {
  const [destinations] = useState(destinationsData.Destinations);
  const [filters, setFilters] = useState({
    category: "",
    type: "",
    rating: "",
    city: "",
    country: "",
  });
  const [search, setSearch] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const [availableRatings, setAvailableRatings] = useState([]);

  // Extract unique ratings from all destinations
  const extractUniqueRatings = (destinations) => {
    return [...new Set(destinations.map((d) => d.rating))].sort((a, b) => b - a);
  };

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));

    if (name === "country") {
      const citiesInCountry = destinations
        .filter((d) => d.country === value)
        .map((d) => d.city);
      setFilteredCities([...new Set(citiesInCountry)]);
      setFilters((prev) => ({ ...prev, city: "", rating: "" }));
    }

    if (name === "city" || name === "country") {
      const filteredDestinations = destinations.filter((d) => {
        const matchesCountry = filters.country ? d.country === filters.country : true;
        const matchesCity = filters.city ? d.city === filters.city : true;
        return matchesCountry && matchesCity;
      });

      // Set available ratings based on filtered destinations
      const ratingsInSelection = filters.country || filters.city
        ? extractUniqueRatings(filteredDestinations)
        : extractUniqueRatings(destinations);
      setAvailableRatings(ratingsInSelection);

      if (name === "city") {
        setFilters((prev) => ({ ...prev, rating: "" }));
      }
    }
  };

  // Filter destinations based on all selected filters
  const filteredDestinations = destinations.filter((destination) => {
    const matchesRating = filters.rating ? destination.rating >= parseFloat(filters.rating) : true;
    const matchesCity = filters.city ? destination.city.toLowerCase() === filters.city.toLowerCase() : true;
    const matchesCountry = filters.country ? destination.country.toLowerCase() === filters.country.toLowerCase() : true;
    const matchesSearch = search ? destination.name.toLowerCase().includes(search.toLowerCase()) : true;

    return matchesRating && matchesCity && matchesCountry && matchesSearch;
  });

  // Prepare unique values for filter options
  const categories = [...new Set(destinations.map((d) => d.category))];
  const types = [...new Set(destinations.map((d) => d.type))];
  const countries = [...new Set(destinations.map((d) => d.country))];

  return (
    <div className="p-4 mt-16">
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        <select
          name="rating"
          onChange={handleFilterChange}
          className="p-2 border rounded"
          value={filters.rating}
        >
          <option value="">All Ratings</option>
          {availableRatings.map((rating) => (
            <option key={rating} value={rating}>
              {rating} and above
            </option>
          ))}
        </select>
        <select
          name="city"
          onChange={handleFilterChange}
          className="p-2 border rounded"
          value={filters.city}
        >
          <option value="">All Cities</option>
          {filteredCities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        <select
          name="country"
          onChange={handleFilterChange}
          className="p-2 border rounded"
          value={filters.country}
        >
          <option value="">All Countries</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDestinations.map((destination) => (
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

export default DestinationsPg;
