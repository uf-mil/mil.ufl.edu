import React from "react";
import PropTypes from "prop-types";

import robotXLogo from "../assets/robotx.svg";
import robosubLogo from "../assets/robosub.svg";

import RobotX from "../components/RobotX";
import RoboSub from "../components/RoboSub";
import RoboBoat from "../components/RoboBoat";

function BannerShape({ children, className, style }) {
  return (
    <div
      className={`relative w-48 h-64 text-center mx-auto ${className}`}
      style={style}
    >
      {/* Main Banner Body */}
      <div className="h-full w-full flex flex-col items-center justify-center relative shadow-2xl">
        {children}
      </div>

      {/* Triangle Bottom
      <div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2
          w-0 h-0 border-l-[48px] border-l-transparent
          border-r-[48px] border-r-transparent
          border-t-[32px] border-t-inherit"
      /> */}
    </div>
  );
}

BannerShape.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default BannerShape;

function PlacementBanner({ place, year, event, competition }) {
  // Places to dark, light colors
  // ex: 1st place: lighter gold, darker gold
  const colors = {
    "1st place": ["#B8860B", "#8B6508"],
    "2nd place": ["#696969", "#4F4F4F"],
    "3rd place": ["#8B4513", "#5A2D0D"],
  };
  const selectedColor = colors[place.toLowerCase()];
  const tailwindColors = {
    "1st place": "bg-gold-500 text-gold-800 border-4 border-gold-800",
    "2nd place": "bg-silver-500 text-silver-800 border-4 border-silver-800",
    "3rd place": "bg-bronze-500 text-bronze-800 border-4 border-bronze-800",
  };
  const logos = {
    RoboSub: RoboSub,
    RobotX: RobotX,
    RoboBoat: RoboBoat,
  };
  const Logo = logos[competition] || RobotX;

  return (
    <BannerShape className={tailwindColors[place.toLowerCase()]}>
      {/* Logo */}
      <div
        className="absolute inset-1 border-2 border-gold-800 flex flex-col items-center justify-center"
        style={{ borderColor: selectedColor[1] }} // Inner border (pistachio green)
      >
        <div className="w-1/2">
          <Logo lightColor={selectedColor[0]} darkColor={selectedColor[1]} />
        </div>
        <div className="px-4">
          <div className="text-4xl mt-4 font-bold tracking-wide">{year}</div>
          <div className="text-lg font-bold uppercase tracking-wide">
            {place}
          </div>
          <div className="text-sm mt-2">{event}</div>
        </div>
      </div>
    </BannerShape>
  );
}

PlacementBanner.propTypes = {
  place: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  event: PropTypes.string.isRequired,
  competition: PropTypes.string.isRequired,
};

function UnifiedBanner({ place, year, event, competition }) {
  return (
    <BannerShape
      className="bg-white border-4 border-blue-900 relative"
      style={{ borderColor: "rgb(9 18 44)" }} // Outer border (dark blue)
    >
      <div
        className="absolute inset-1 border-2 border-green-500 flex flex-col items-center justify-center"
        style={{ borderColor: "rgb(154 205 50)" }} // Inner border (pistachio green)
      >
        {/* Logo */}
        <div className="w-1/2">
          <img
            src={competition === "RoboSub" ? robosubLogo : robotXLogo}
            alt=""
          />
        </div>
        <div className="px-4">
          <div className="text-4xl mt-4 font-bold tracking-wide text-blue-900">
            {year}
          </div>
          <div className="text-lg font-bold uppercase text-blue-900">
            {place}
          </div>
          <div className="text-sm mt-2 text-gray-700">{event}</div>
        </div>
      </div>
    </BannerShape>
  );
}

UnifiedBanner.propTypes = {
  place: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  event: PropTypes.string.isRequired,
  competition: PropTypes.string.isRequired,
};

// Export both
export { PlacementBanner, UnifiedBanner };
