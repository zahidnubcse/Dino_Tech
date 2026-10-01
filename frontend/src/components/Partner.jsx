
import React from "react";
import partner from "../assets/Logo_Partner.png";

const Partner = () => {
  return (
    <div>
      <div className="flex items-center justify-center bg-gray-200 py-16">
        <img
          src={partner}
          alt="partner"
          className="h-auto max-w-full object-contain"
        />
      </div>
    </div>
  );
};

export default Partner;