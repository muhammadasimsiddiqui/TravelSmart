import React from "react";

export default function SectionHeading({ SectionHeading }) {
  return (
    <div>
      <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
        {SectionHeading}
      </h1>
    </div>
  );
}
