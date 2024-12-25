import { Link, useParams } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axios from "axios";
import RoomBookingForm from "./RoomBookingForm";
import ReviewTestimonials from "./ReviewTestimonials";

const RoomDetails = () => {
  const { id } = useParams();
  const [roomDetails, setRoomDetails] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [roomReviews, setRoomReviews] = useState([])

  const openModal = () => setIsModalOpen(true);
 

  useEffect(() => {
    axios
      .get(`http://localhost:8000/room/details/${id}`)
      .then((res) => setRoomDetails(res.data));
  }, [id]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/room-reviews/${id}`)
      .then((res) => setRoomReviews(res.data));
  }, [id]);



  console.log(roomDetails);
  console.log(roomReviews)
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
      <div className="mt-8">
        <h3 className="flex items-center text-xl text-center font-bold mb-8">
          Explore More About <span>{name}</span>.
          <div className={`badge ${availability ? "badge-success" : "badge-secondary" }`}>
            {availability ? "Available" : "Booked"}
          </div>
        </h3>
        <Carousel className="rounded-xl mb-[100px] ">
          <img
            src="https://i.ibb.co.com/wMb5Wjf/DALL-E-2024-12-08-12-51-34-A-professional-and-visually-appealing-carousel-image-designed-for-a-visa.webp"
            className="h-[500px] w-full object-fit"
          />
        </Carousel>
      </div>
      <div>
        <h3>Room's Description </h3>
        <p>{description}</p>
        <h3>
          Room Price Per Day :{currency} {price}/Day{" "}
        </h3>
        <div>
          <h1>Facilties: </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4">
            {facilities?.map((facility, index) => (
              <button className="btn btn-outline" key={index}>
                {facility}
              </button>
            ))}
          </div>
        </div>

        <div className="my-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8 lg:text-4xl ">
                Guest Reviews ({roomReviews.length})
              </h2>
          <div>
            {
              roomReviews.length > 0 ? <ReviewTestimonials  roomReviews={roomReviews} /> : <div>
                Opps There is no Reviews for this room. It's going to be surprise for you.Book now to enjoy our service and review your valuable opinion us. you can review from your booking page.
              </div>
            }
            
          </div>
        </div>

        <div className="w-full my-8">
          <Link>
            <button disabled={!availability} onClick={openModal} className="btn w-full">
              Book Now
            </button>
          </Link>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed z-20 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="modal modal-open">
            <div className="modal-box">
                <RoomBookingForm roomDetails={roomDetails} setRoomDetails={setRoomDetails}  setIsModalOpen={setIsModalOpen} />
              <button  onClick={()=>setIsModalOpen(false)} className="btn w-full my-2">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomDetails;
