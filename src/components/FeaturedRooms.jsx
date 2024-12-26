import { useLocation } from "react-router-dom";
import RoomCard from "./RoomCard";
import Lottie from 'lottie-react'
import BookDateAnimation from '../assets/lottie/lottieHotels/bookdate.json'

const FeaturedRooms = ({ featuredRooms }) => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="my-8">
      <div className="flex flex-col items-center gap-4 my-8">
        <div className="flex flex-col items-center">
          <div className=" w-48 lg:w-96 ml-8">
            <Lottie animationData={BookDateAnimation} />
          </div>
        </div>
        <h1 className="text-xl font-bold text-center lg:text-3xl">
          Experience Comfort, Style, and Unmatched Value in Our Top Picks
        </h1>

        <p className="text-base px-2 w-full  text-gray-600 text-center lg:w-[800px]">
          Discover our handpicked featured rooms, offering a blend of comfort,
          style, and value. Enjoy modern amenities, cozy interiors, and
          exceptional service. Book your ideal stay effortlessly and create
          lasting memories...
        </p>
      </div>

      <div className="grid grid-cols-1 my-8 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {featuredRooms?.map(
          (room) => room.availability && <RoomCard key={room._id} room={room} />
        )}
      </div>
    </div>
  );
};

export default FeaturedRooms;
