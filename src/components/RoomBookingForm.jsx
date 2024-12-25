import React, { useContext, useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import AuthContext from "../context/AuthContext";
const RoomBookingForm = ({ roomDetails, setRoomDetails }) => {
  const {userId, user} = useContext(AuthContext)
  console.log(roomDetails);
  const [formData, setFormData] = useState({
    userId: userId,
    userName: user.displayName,
    roomId: roomDetails._id,
    bookingDate: new Date(), // Initialize with the current date
  });

  // Handle input changes for text fields
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle date picker change
  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      bookingDate: date,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // Convert date to ISO format before sending
        const response = await axios.post('http://localhost:8000/bookRoom', {
          ...formData,
          bookingDate: formData.bookingDate.toISOString().split("T")[0],
        }
        
      );
        alert('Room booked successfully: ' + response.data.message);
      } catch (error) {
        console.error(error.response?.data?.error || 'Error booking room');
        alert(error.response?.data?.error || 'Error booking room');
      }
  }
  return (
    <div>
       <form onSubmit={handleSubmit} className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
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
