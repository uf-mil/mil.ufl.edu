import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

const Medal = ({ text, placement }) => {
  // Define colors for placements
  const backgroundColors = {
    "1st": "bg-yellow-400",
    "2nd": "bg-gray-400",
    "3rd": "bg-bronze-400",
  };
  const textColors = {
    "1st": "text-black",
  };

  const bgColor = backgroundColors[placement] || "bg-blue-400";
  const textColor = textColors[placement] || "text-white";

  return (
    <div
      className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium ${bgColor} ${textColor}`}
    >
      <FontAwesomeIcon icon={faMedal} className="text-lg" />
      <span>
        {placement} {text}
      </span>
    </div>
  );
};

export default Medal;
