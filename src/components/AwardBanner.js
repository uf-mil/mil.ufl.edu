import React from "react";

function BannerShape({ children, className }) {
  return (
    <div className={`relative w-48 h-64 text-center mx-auto ${className}`}>
      {/* Main Banner Body */}
      <div className="h-full w-full flex flex-col items-center justify-center relative">
        {children}
      </div>

      {/* Triangle Bottom */}
      <div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2
          w-0 h-0 border-l-[48px] border-l-transparent
          border-r-[48px] border-r-transparent
          border-t-[32px] border-t-inherit"
      />
    </div>
  );
}

export default BannerShape;

function PlacementBanner({ place, year, event }) {
  // Determine the background color based on the place
  const bgColor =
    place.toLowerCase() === "1st place"
      ? "bg-yellow-500"
      : place.toLowerCase() === "2nd place"
        ? "bg-gray-400"
        : place.toLowerCase() === "3rd place"
          ? "bg-bronze-500"
          : "bg-gray-200";

  return (
    <BannerShape className={`${bgColor} text-white`}>
      <div className="px-4">
        <div className="text-4xl mt-4 font-bold tracking-wide">{year}</div>
        <div className="text-lg font-bold uppercase tracking-wide">{place}</div>
        <div className="text-sm mt-2">{event}</div>
      </div>
    </BannerShape>
  );
}

function UnifiedBanner({ place, year, event }) {
  return (
    <BannerShape
      className="bg-white border-4 border-blue-900 relative"
      style={{ borderColor: "rgb(9 18 44)" }} // Outer border (dark blue)
    >
      <div
        className="absolute inset-1 border-2 border-green-500 flex flex-col items-center justify-center"
        style={{ borderColor: "rgb(154 205 50)" }} // Inner border (pistachio green)
      >
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

// Export both
export { PlacementBanner, UnifiedBanner };
