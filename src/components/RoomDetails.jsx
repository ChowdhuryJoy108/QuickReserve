import { Link, useNavigate, useParams } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import RoomBookingForm from "./RoomBookingForm";
import ReviewTestimonials from "./ReviewTestimonials";
import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import BookAnimation from "../assets/lottie/lottieHotels/booking.json";
import AuthContext from "../context/AuthContext";
import ReviewAnimation from "../assets/lottie/lottieHotels/review.json"

const RoomDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [roomDetails, setRoomDetails] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [roomReviews, setRoomReviews] = useState([]);

  const openModal = () => {
    if (!user) {
      navigate("/login");
    }
    setIsModalOpen(true);
  };

  useEffect(() => {
    axios
      .get(`https://quick-reserve-server.vercel.app/room/details/${id}`)
      .then((res) => setRoomDetails(res.data));
  }, [id]);

  useEffect(() => {
    axios
      .get(`https://quick-reserve-server.vercel.app/room-reviews/${id}`)
      .then((res) => setRoomReviews(res.data));
  }, [id]);

  console.log(roomDetails);
  console.log(roomReviews);
  const {
    name,
    photos,
    facilities,
    description,
    currency,
    price,
    availability,
  } = roomDetails;
  return (
    <div className="w-full lg:max-w-5xl mx-auto">
      <Helmet>
        <title>Room Details - QuickReserve</title>
        <meta name="description" content="Welcome to the Room Details Page." />
      </Helmet>
      <div className="flex flex-col items-center">
        <div className=" w-48 lg:w-96 ml-8">
          <Lottie animationData={BookAnimation} />
        </div>
      </div>
      <div className="mt-8">
        <h3 className="flex flex-col  items-center text-xl text-center font-bold mb-8 lg:flex-row gap-2 lg:text-3xl ">
          Explore More About - <span className="text-4xl">{name}</span>
          <div
            className={`badge my-4 ${
              availability ? "badge-success" : "badge-secondary"
            } lg:mx-10`}
          >
            {availability ? "Available" : "Booked"}
          </div>
        </h3>
        <div className="mb-8">
          <h1 className="text-base text-gray-700 lg:text-xl">{description}</h1>
        </div>
        <Carousel className="rounded-xl mb-[100px] ">
          {photos?.map((photo, index) => (
            <img
              key={index}
              src={photo}
              className="h-[500px] w-full object-fit"
            />
          ))}
        </Carousel>
      </div>
      <div>
        <h3 className="text-base font-bold mb-4 lg:text-2xl:">
          <span className="text-2xl font-bold lg:text-4xl ">
            {currency} {price}/Day{" "}
          </span>
        </h3>
        <div className="mb-4">
          <h1 className="font-bold text-base lg:text-2xl">
            Facilites You will get with your booking for this room.
          </h1>
          <div className="grid grid-cols-2 my-8 md:grid-cols-3 gap-4 lg:grid-cols-4">
            {facilities?.map((facility, index) => (
              <button className="btn btn-outline" key={index}>
                {facility}
              </button>
            ))}
          </div>
        </div>

        <div className="my-8">
          <div className="flex flex-col items-center">
            <div className=" w-48 lg:w-96 ml-8">
              <Lottie animationData={ReviewAnimation} />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8 lg:text-4xl ">
            Guest Reviews
          </h2>
          <div>
            {roomReviews.length > 0 ? (
              <ReviewTestimonials roomReviews={roomReviews} />
            ) : (
              <div>
                Opps There is no Reviews for this room. It's going to be
                surprise for you.Book now to enjoy our service and review your
                valuable opinion us. you can review from your booking page.
              </div>
            )}
          </div>
        </div>

        <div className="w-full my-8">
          <Link>
            <button
              disabled={!availability}
              onClick={openModal}
              className="btn w-full  bg-green-400 hover:bg-green-700 hover:text-white"
            >
              Book Now
            </button>
          </Link>
        </div>
      </div>

      {user && isModalOpen && (
        <div className="fixed z-20 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="modal modal-open">
            <div className="modal-box">
              <RoomBookingForm
                roomDetails={roomDetails}
                setRoomDetails={setRoomDetails}
                setIsModalOpen={setIsModalOpen}
              />
              <button
                onClick={() => setIsModalOpen(false)}
                className="btn w-full my-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomDetails;
