import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewTestimonialCard from "./ReviewTestimonialCard";

const ReviewTestimonials = ({roomReviews}) => {
    
     const isSingleReview = roomReviews.length === 1;
      // Slider settings
      const settings = {
        dots: true, // Enable navigation dots
        infinite: !isSingleReview, // Infinite scrolling
        speed: 500, // Transition speed
        slidesToShow: 2, // Number of slides to show at a time
        slidesToScroll: isSingleReview ? 1 : 2, // Number of slides to scroll
        autoplay: true, // Enable autoplay
        // autoplaySpeed: 3000, // Autoplay speed in ms
        arrows: true, // Enable navigation arrows
        responsive: [
            {
              breakpoint: 1024, // For large screens
              settings: {
                slidesToShow: isSingleReview ? 1 : 2,
              },
            },
            {
              breakpoint: 480, // For small screens
              settings: {
                slidesToShow: 1,
              },
            },
          ],
      };
    return (
        
        
        
            <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
             
              <Slider {...settings} className="max-w-4xl mx-auto">
                {roomReviews.map((review) => (
                  <div key={review.id} className=" px-2 ">
                    <ReviewTestimonialCard
                      name={review.userName}
                      rating={review.roomRatings}
                      comment={review.roomReview}
                      date={review.timestamp}
                    />
                  </div>
                ))}
              </Slider>
            </div>
    );
};

export default ReviewTestimonials;