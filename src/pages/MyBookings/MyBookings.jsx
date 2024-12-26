import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
import RoomReviewForm from "../../components/RoomReviewForm";
import {  Helmet } from "react-helmet-async";

const MyBookings = () => {
  const { user, userId } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [newDate, setNewDate] = useState(new Date());

  const [selectedRoom, setSelectedRoom] = useState(null);


  useEffect(() => {
    axios
      .get(`http://localhost:8000/bookings/${userId}`)
      .then((res) => setBookings(res.data));
  }, [userId]);



  const handleUpdateDate = async () => {
    if (!newDate) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select a new date.",
      });
      return;
    }

    try {
      await axios.put(`http://localhost:8000/update-booking-date`, {
        _id: selectedBooking._id,
        roomId: selectedBooking.roomId,
        bookingDate: newDate, //.toISOString().split("T")[0]
        userId,
      });
      Swal.fire({
        icon: "success",
        title: "Success..",
        text: `Booking Date Successfully Updated !`,
      });
      setBookings((prev) =>
        prev.map((booking) =>
          booking._id === selectedBooking._id
            ? { ...booking, bookingDate: newDate.toISOString().split("T")[0] }
            : booking
        )
      );
      setShowModal(false);
      setSelectedBooking(null);
      setNewDate(null);
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to update booking date.",
      });
    }
  };

  const handleCancelBooking = async (bookingId, roomId) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/cancel-booking",
        {
          bookingId,
          roomId,
        }
      );

      console.log(response.data.message);
      Swal.fire({
        icon: "success",
        title: "Success..",
        text: `Cancelation Success : ${response.data.message}`,
      });

      const remainingBookings = bookings.filter(
        (booking) => booking._id !== bookingId
      );
      setBookings(remainingBookings);
    } catch (error) {
      console.error("Error canceling booking:", error.response);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Error : ${error.response.data.message}`,
      });
    }
  };



  const handleReview = (roomId, userName) => {
    setSelectedRoom({
      roomId,
      userName,
    });
    setShowReviewModal(true);
  };

  const closeReviewForm = () => {
    setSelectedRoom(null);
    setShowReviewModal(false);
  };
  return (
    <div>
      <Helmet>
          <title>My Bookings - QuickReserve</title>
          <meta
            name="description"
            content="Welcome to the My Bookings Page."
          />
        </Helmet>
      <table className="table-auto w-full border-collapse border border-gray-300 text-left my-10">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Image</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
            <th className="border border-gray-300 px-4 py-2">Booking Date</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.length > 0
            ? bookings.map((booking) => (
                <tr key={booking._id}>
                  <td className="border border-gray-300 px-4 py-2">
                    <img
                      src=""
                      alt="booking"
                      className="w-16 h-16 object-cover"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {booking.userName}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    USD {booking.price}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {booking.bookingDate}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      className="btn btn-primary btn-sm mr-2"
                      onClick={() => {
                        setSelectedBooking(booking);
                        setShowModal(true);
                      }}
                    >
                      Update Date
                    </button>
                    <button
                      className="btn btn-error btn-sm mr-2"
                      onClick={() =>
                        handleCancelBooking(booking._id, booking.roomId)
                      }
                    >
                      Cancel
                    </button>
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() =>
                        handleReview(booking.roomId, booking.userName)
                      }
                    >
                      Give Review
                    </button>
                  </td>
                </tr>
              ))
            : "No Booking"}
        </tbody>
      </table>
      {showModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Update Booking Date</h3>

            <DatePicker
              selected={newDate}
              onChange={(date) => {
                // const localDate = new Date(
                // //   date.getFullYear(),
                // //   date.getMonth(),
                // //   date.getDate()
                // // );
                // // setNewDate(localDate);
                const adjustedDate = new Date(date);
                adjustedDate.setDate(adjustedDate.getDate() + 1);
                setNewDate(adjustedDate);
              }}
              dateFormat="yyyy-MM-dd"
              minDate={new Date()}
              className="input input-bordered w-full"
              required
            />

            <div className="modal-action">
              <button className="btn btn-primary" onClick={handleUpdateDate}>
                Save
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {showReviewModal && (
        <RoomReviewForm
          closeReviewForm={closeReviewForm}
          roomId={selectedRoom?.roomId}
          userName={selectedRoom?.userName}
        />
      )}
    </div>
  );
};

export default MyBookings;
