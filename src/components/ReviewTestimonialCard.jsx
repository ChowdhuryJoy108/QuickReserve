import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ReviewTestimonialCard = ({ name, rating, comment, date }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col space-y-4 max-w-md w-full">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <div className="text-yellow-500 font-bold">{`⭐ ${rating}/5`}</div>
      </div>

      {/* Comment */}
      <p className="text-gray-600">{comment}</p>

      {/* Footer */}
      <div className="text-sm text-gray-400">{date}</div>
    </div>
    );
};

export default ReviewTestimonialCard;