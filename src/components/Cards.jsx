import React, { useState } from "react";

const Cards = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shortenedContent = props.content.substring(0, 250);
  return (
    <div className="w-full px-3 py-6 md:w-1/2">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden ">
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900">{props.title}</h3>
          <p
            className={`text-gray-700 text-base mt-4 ${
              isExpanded ? "" : "overflow-hidden"
            }`}
          >
            {isExpanded ? (
              props.content
            ) : (
              <p className="text-gray-700 text-base mt-4">{shortenedContent}</p>
            )}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="block mt-4 text-center text-sm font-bold text-teal-600 uppercase"
            >
              {isExpanded ? "See less" : "See more"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
