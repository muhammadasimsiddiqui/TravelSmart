import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const TourCard = ({ tour }) => {
  const { id, img, title, location, price, description, rating } = tour;

  // Ensure the id is defined
  if (!id) {
    console.error("Tour ID is undefined:", tour);
    return null; // Prevent rendering if id is not valid
  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg h-[420px] flex flex-col">
      <div className="relative">
        <div className="overflow-hidden">
          <img
            className="w-full h-40 object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
            src={img}
            alt={title}
          />
          {/* Show Featured label only for ratings above 4.8 */}
          {rating && rating > 4.8 && (
            <p className="absolute pr-8 pl-4 text-white font-semibold py-1 bottom-2 rounded-l-full right-0 bg-red-500 text-lg">
              Featured
            </p>
          )}
        </div>
      </div>
      <div className="px-6 py-4 h-full">
        <div className="flex items-center justify-between">
          <p className="text-base flex items-center">
            <FontAwesomeIcon className="pr-2" icon={faMapMarkerAlt} />
            <span className="truncate">
              {location.length > 32
                ? location.substring(0, 32) + "..."
                : location}
            </span>
          </p>
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-500" />
            <span>{rating ? rating.toFixed(1) : "N/A"}</span>
          </div>
        </div>
        <div className="font-bold text-lg mb-2 flex flex-col justify-between">
          <span className="py-2">
            {title.length > 20 ? title.substring(0, 20) + "..." : title}
          </span>
          <p className="text-gray-700 text-base font-light overflow-hidden overflow-ellipsis">
            {description.length > 60
              ? description.substring(0, 60) + "..."
              : description}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between px-6 py-2">
        {price !== undefined && (
          <p className="text-sm font-semibold mb-3">
            Starts From <br />
            <span className="text-xl">${price}</span>
          </p>
        )}
        <button className="btn text-sm bg-blue-500 text-white py-2 px-4 rounded mb-3">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default TourCard;
