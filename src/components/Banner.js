import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Banner({
  message,
  bgColor = "bg-yellow-500",
  textColor = "text-black",
  link = "#",
}) {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const bannerClosed = localStorage.getItem("bannerClosed");
    if (bannerClosed) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("bannerClosed", "true");
  };

  const handleClick = () => {
    if (link) {
      navigate(link);
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={`${bgColor} ${textColor} w-full py-2 px-4 text-sm md:text-base flex items-center justify-between cursor-pointer`}
      onClick={handleClick}
    >
      <div className="flex-1 text-center">{message}</div>
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent triggering the link on close
          handleClose();
        }}
        className={`text-right ${textColor} hover:text-gray-300 focus:outline-none`}
        aria-label="Close banner"
      >
        &times;
      </button>
    </div>
  );
}

export default Banner;
