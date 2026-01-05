import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function MemberCard({
  name,
  role,
  image,
  degree,
  graduationYear,
  email,
  linkedIn,
  website,
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-3">
      <div className="w-full h-48 overflow-hidden rounded-lg relative">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full absolute top-0 left-0"
        />
      </div>
      <div className="mt-2 text-center">
        <h3 className="text-xl font-bold text-black">{name}</h3>
        <p className="text-gray-600">{role}</p>
        <p className="text-gray-500 text-sm mt-1">{degree}</p>
        <p className="text-gray-500 text-sm mt-1">{graduationYear}</p>
        <div className="flex justify-center mt-2 space-x-4">
          {linkedIn && (
            <a
              href={`https://linkedin.com/in/${linkedIn}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-blue-600 hover:text-blue-800 text-2xl"
              />
            </a>
          )}
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website"
            >
              <FontAwesomeIcon
                icon={faGlobe}
                className="text-gray-600 hover:text-gray-800 text-2xl"
              />
            </a>
          )}
          {email && (
            <a href={`mailto:${email}`} aria-label="Email">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-gray-600 hover:text-gray-800 text-2xl"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

MemberCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  image: PropTypes.string,
  degree: PropTypes.string,
  graduationYear: PropTypes.string,
  linkedIn: PropTypes.string,
  website: PropTypes.string,
  email: PropTypes.string,
};

export default MemberCard;
