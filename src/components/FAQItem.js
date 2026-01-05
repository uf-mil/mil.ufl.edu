import React, { useState } from "react";
import PropTypes from "prop-types";

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 px-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-5 text-left focus:outline-none"
        aria-expanded={open}
      >
        <span className="text-lg font-medium text-blue-800">{question}</span>
        <span className="text-2xl text-blue-800">{open ? "−" : "+"}</span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="pb-5 pr-8 text-gray-700 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default FAQItem;
