import React from "react";

export default function PageBanner({ backgroundImage, title }) {
  return (
    <>
      <div
        className="min-h-60vh w-full flex items-center justify-center align-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h1 className="text-white text-4xl font-bold drop-shadow-lg">
          {title}
        </h1>
      </div>
    </>
  );
}
