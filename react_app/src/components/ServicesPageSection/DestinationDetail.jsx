import React, { useState } from "react";
import { useParams } from "react-router-dom";
import destinationsData from "../data.json"; // Adjust the import based on your structure
import SectionHeading from "../Heading/SectionHeading";
import BookNowForm from "./BookNowForm"; // Ensure this path is correct

const DestinationDetail = () => {
  const { id } = useParams();
  const destination = destinationsData.Destinations.find(
    (d) => d.id === parseInt(id)
  );

  if (!destination) return <p className="p-4">Destination not found.</p>;

  // Default to an empty array if images are undefined
  const images = destination.image || [];
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="container mx-auto pt-14 mt-14 pb-6">
      <div className="overflow-hidden">
        <div className="flex flex-col md:flex-row md:space-x-4">
          {/* Main Image */}
          <div className="md:w-1/2 p-4">
            <a
              href={images[0]}
              data-lightbox="gallery"
              data-title={`Main image of ${destination.name}`}
            >
              <img
                src={images[0]}
                alt={`View of ${destination.name}`}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </a>
          </div>

          {/* Destination Details */}
          <div className="md:w-1/2 flex flex-col justify-between p-4">
            <h1 className="text-3xl font-bold mb-4">{destination.name}</h1>
            <div className="text-gray-700 mb-2">
              <p>
                <strong>Location:</strong> {destination.location}
              </p>
              <p>
                <strong>Country:</strong> {destination.country}
              </p>
              <p>
                <strong>Category:</strong> {destination.category}
              </p>
              <p>
                <strong>Type:</strong> {destination.type}
              </p>
              <p>
                <strong>Rating:</strong> {destination.rating}
              </p>
              <p>
                <strong>Description:</strong> {destination.description}
              </p>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
            >
              Plan Your Visit
            </button>
          </div>
        </div>
      </div>

      {/* Booking Form Modal */}
      <BookNowForm
        showForm={showForm}
        setShowForm={setShowForm}
        accommodation={destination}
      />

      {/* Image Gallery */}
      <div className="mt-6">
        <SectionHeading SectionHeading="Gallery" />
        <div className="flex space-x-4 py-4">
          {images.map((imgSrc, index) => (
            <a
              key={index}
              href={imgSrc}
              data-lightbox="gallery"
              data-title={`Gallery image ${index + 1}`}
            >
              <img
                src={imgSrc}
                alt={`Gallery image ${index + 1}`}
                className="h-32 w-auto rounded-lg cursor-pointer transition-transform transform hover:scale-105"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
