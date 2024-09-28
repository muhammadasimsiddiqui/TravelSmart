import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import TourCard from "../TourCards/Tourcard"; // Import your TourCard component
import accommodationsData from "../data.json";

const AccommodationsPg = () => {
  const [accommodations] = useState(accommodationsData.Accommodation);
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

  // Extract unique ratings for filtering
  const uniqueRatings = [...new Set(accommodations.map((a) => a.rating))].sort(
    (a, b) => b - a
  );

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));

    if (name === "country") {
      const citiesInCountry = accommodations
        .filter((a) => a.country === value)
        .map((a) => a.city);
      setFilteredCities([...new Set(citiesInCountry)]);
      setFilters((prev) => ({ ...prev, city: "", rating: "" }));
    }

    if (name === "city" || name === "country") {
      const filteredAccommodations = accommodations.filter((a) => {
        const matchesCountry = filters.country ? a.country === filters.country : true;
        const matchesCity = filters.city ? a.city === filters.city : true;
        return matchesCountry && matchesCity;
      });

      const ratingsInSelection = [
        ...new Set(filteredAccommodations.map((a) => a.rating)),
      ].sort((a, b) => b - a);
      setAvailableRatings(ratingsInSelection);

      if (name === "city") {
        setFilters((prev) => ({ ...prev, rating: "" }));
      }
    }
  };

  // Filter accommodations based on all selected filters
  const filteredAccommodations = accommodations.filter((accommodation) => {
    const matchesRating = filters.rating ? accommodation.rating >= parseFloat(filters.rating) : true;
    const matchesCity = filters.city ? accommodation.city.toLowerCase() === filters.city.toLowerCase() : true;
    const matchesCountry = filters.country ? accommodation.country.toLowerCase() === filters.country.toLowerCase() : true;
    const matchesSearch = search ? accommodation.name.toLowerCase().includes(search.toLowerCase()) : true;

    return matchesRating && matchesCity && matchesCountry && matchesSearch;
  });

  // Prepare unique values for filter options
  const categories = [...new Set(accommodations.map((a) => a.category))];
  const types = [...new Set(accommodations.map((a) => a.type))];
  const countries = [...new Set(accommodations.map((a) => a.country))];

  return (
    <div className="p-4">
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
        {filteredAccommodations.map((accommodation) => (
          <Link key={accommodation.id} to={`/accommodations/${accommodation.id}`}>
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
};

export default AccommodationsPg;
