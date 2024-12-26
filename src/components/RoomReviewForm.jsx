import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";

const RoomReviewForm = ({ roomId, userName, closeReviewForm }) => {
  const { user, userId } = useContext(AuthContext);
  const [roomRatings, setRoomRatings] = useState(5);
  const [roomReview, setRoomReview] = useState("");

  const handleSubmitReview = async () => {
    if (roomRatings < 1 || roomRatings > 5) {
      console.log("Rating must be between 1 and 5.");
      return;
    }

    const review = {
      roomId,
      userName,
      email: user?.email,
      roomRatings,
      roomReview,
      timestamp: new Date().toISOString(),
    };

    try {
      await axios.post("https://quick-reserve-server.vercel.app/reviews", review);
      console.log("Review submitted successfully!");
    } catch (error) {
      console.error("Error submitting review:", error);
      console.log("Failed to submit review.");
    }
  };

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Give Review for </h3>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input
            type="text"
            value={user?.displayName || user?.email}
            className="input input-bordered"
            readOnly
          />
        </div>

        {/* Rating */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating (1-5)</span>
          </label>
          <input
            type="number"
            value={roomRatings}
            min={1}
            max={5}
            onChange={(e) => setRoomRatings(e.target.value)}
            className="input input-bordered"
          />
        </div>

        {/* Comment */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Comment</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Write your review..."
            value={roomReview}
            onChange={(e) => setRoomReview(e.target.value)}
          ></textarea>
        </div>

        <div className="modal-action">
          <button onClick={closeReviewForm} className="btn btn-error">
            Cancel
          </button>
          <button onClick={handleSubmitReview} className="btn btn-success">
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomReviewForm;
