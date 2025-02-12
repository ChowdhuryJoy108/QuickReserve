import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewTestimonialCard from "./ReviewTestimonialCard";

const ReviewTestimonials = ({roomReviews}) => {
    
     const isSingleReview = roomReviews.length === 1;
     
      const settings = {
        dots: true, 
        infinite: !isSingleReview, 
        speed: 500, 
        slidesToShow: 2,
        slidesToScroll: isSingleReview ? 1 : 2, 
        autoplay: true, 
    
        arrows: true,
        responsive: [
            {
              breakpoint: 1024, 
              settings: {
                slidesToShow: isSingleReview ? 1 : 2,
              },
            },
            {
              breakpoint: 480,
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