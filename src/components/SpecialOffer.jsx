import React from "react";
import Offer from '../assets/offer2.jpg'
const SpecialOffer = ({setShowOfferModal}) => {
  return (
    <div>
    
        <div className="modal modal-open">
          <div className="modal-box relative">
            <button
              className="btn btn-sm btn-circle absolute right-2 top-2"
              onClick={() => setShowOfferModal(false)}
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4 text-center text-red-600">
              Special Rooms on Offer Price!
            </h2>
            <img
              src={Offer}
              alt="Special Offer"
              className="w-full rounded-md mb-4"
            />
            <p className="text-gray-700 text-center">
              🎉 Enjoy up to <strong>50% OFF</strong> on selected Rooms, Breakfast, Dinner and more!
              Offer valid until <strong>January 10th, 2025</strong>. Don’t miss
              out!
            </p>
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setShowOfferModal(false)}
                className="btn  bg-green-400 hover:bg-green-700 hover:text-white"
              >
                Visit Now
              </button>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default SpecialOffer;
