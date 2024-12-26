import React, { useContext, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const RoomBookingForm = ({ roomDetails }) => {
  const { userId, user } = useContext(AuthContext);
  const navigate = useNavigate();

 
 
  const [formData, setFormData] = useState({
    userId: userId,
    userName: user?.displayName || user?.email,
    roomId: roomDetails._id,
    roomName: roomDetails.name, 
    bookingDate: new Date(), 
  });

  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      bookingDate: date,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     
      const response = await axios.post(
        "https://quick-reserve-server.vercel.app/bookRoom",
        {
          ...formData,
          bookingDate: formData.bookingDate.toISOString().split("T")[0],
        },
        {
          withCredentials:true
        }
      );
      Swal.fire({
        icon: "success",
        title: "Success..",
        text: "Room booked successfully.",
      });
      // alert("Room booked successfully: " + response.data.message);
      navigate("/bookings");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error..",
        text: "Error booking room",
      });
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-4">Book a Room</h2>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">User ID</span>
          </label>
          <input
            type="text"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
            readOnly
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
            readOnly
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Room ID</span>
          </label>
          <input
            type="text"
            name="roomId"
            value={formData.roomId}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
            readOnly
          />
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Room Name</span>
          </label>
          <input
            type="text"
            name="roomName"
            value={formData.roomName}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
            readOnly
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Booking Date</span>
          </label>
          <DatePicker
            selected={formData.bookingDate}
            onChange={handleDateChange}
            dateFormat="yyyy-MM-dd"
            minDate={new Date()}
            defaultValue={new Date()}
            className="input input-bordered w-full"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default RoomBookingForm;
