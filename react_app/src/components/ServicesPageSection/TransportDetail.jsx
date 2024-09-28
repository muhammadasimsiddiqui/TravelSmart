import React, { useState } from "react";
import { useParams } from "react-router-dom";
import transportData from "../data.json";
import SectionHeading from "../Heading/SectionHeading";
import BookNowForm from "./BookNowForm"; // Ensure this path is correct

const TransportDetail = () => {
  const { id } = useParams();
  const transport = transportData.Transport.find((t) => t.id === parseInt(id));

  if (!transport) return <p className="p-4">Transport not found.</p>;

  const details = transport.transport[0].details;
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="container mx-auto pt-14 mt-14 pb-6">
      <div className="overflow-hidden">
        <div className="flex flex-col md:flex-row md:space-x-4">
          {/* Main Image */}
          <div className="md:w-1/2 p-4">
            <a
              href={details.image[0]}
              data-lightbox="gallery"
              data-title={`Main image of ${details.airline}`}
            >
              <img
                src={details.image[0]}
                alt={`Flight with ${details.airline}`}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </a>
          </div>

          {/* Transport Details */}
          <div className="md:w-1/2 flex flex-col justify-between p-4">
            <h1 className="text-3xl font-bold mb-4">
              {`${transport.origin} to ${transport.destination}`}
            </h1>
            <div className="text-gray-700 mb-2">
              <p>
                <strong>Airline:</strong> {details.airline}
              </p>
              <p>
                <strong>Departure:</strong> {details.departure}
              </p>
              <p>
                <strong>Arrival:</strong> {details.arrival}
              </p>
              <p>
                <strong>Duration:</strong> {details.duration}
              </p>
              <p>
                <strong>Price:</strong> ${details.price}
              </p>
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
        transport={transport}
      />

      {/* Image Gallery */}
      <div className="mt-6">
        <SectionHeading SectionHeading="Gallery" />
        <div className="flex space-x-4 py-4">
          {details.image.map((imgSrc, index) => (
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

export default TransportDetail;
