// src/components/AccommodationDetail.js
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import accommodationsData from "../data.json"; // Ensure the path is correct
import SectionHeading from "../Heading/SectionHeading";
import BookNowForm from "./BookNowForm";

const AccommodationDetail = () => {
  const { id } = useParams();
  const accommodation = accommodationsData.Accommodation.find(
    (acc) => acc.id === parseInt(id)
  );

  if (!accommodation) {
    return <p className="p-4">Accommodation not found.</p>;
  }

  const images = accommodation.image || [];
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
              data-title={`Main image of ${accommodation.name}`}
            >
              <img
                src={images[0]}
                alt={`View of ${accommodation.name}`}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </a>
          </div>

          {/* Accommodation Details */}
          <div className="md:w-1/2 flex flex-col justify-between p-4">
            <h1 className="text-3xl font-bold mb-4">{accommodation.name}</h1>
            <div className="text-gray-700 mb-2">
              <p>
                <strong>Location:</strong> {accommodation.location}
              </p>
              <p>
                <strong>Country:</strong> {accommodation.country}
              </p>
              <p>
                <strong>City:</strong> {accommodation.city}
              </p>
              <p>
                <strong>Category:</strong> {accommodation.category}
              </p>
              <p>
                <strong>Type:</strong> {accommodation.type}
              </p>
              <p>
                <strong>Rating:</strong> {accommodation.rating} ⭐
              </p>
              <p>
                <strong>Price per Night:</strong> ${accommodation.pricePerNight}
              </p>
              <p>
                <strong>Highlights:</strong>
              </p>
              <ul className="list-disc list-inside">
                {accommodation.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Booking Form Modal */}
      <BookNowForm
        showForm={showForm}
        setShowForm={setShowForm}
        accommodation={accommodation}
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

export default AccommodationDetail;
