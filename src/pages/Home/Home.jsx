import { useState, useEffect } from "react";
import HotelMap from "../../components/HotelMap";
import { Carousel } from "@material-tailwind/react";
import backgroundImageOne from "../../assets/banners/bannerImg1.webp";
import backgroundImageTwo from "../../assets/banners/bannerImg2.webp";
import backgroundImageThree from "../../assets/banners/bannerImg3.webp";
import { Link } from "react-router-dom";
import axios from "axios";
import ReviewTestimonials from "../../components/ReviewTestimonials";
import { Helmet } from "react-helmet-async";
import FeaturedRooms from "../../components/FeaturedRooms";
import Lottie from "lottie-react";
import HotelAnimation from "../../assets/lottie/lottieHotels/hotel.json";
import ReviewAnimation from "../../assets/lottie/lottieHotels/review.json";
import SpecialOffer from '../../components/SpecialOffer'

const Home = () => {
  const [allReviews, setAllReviews] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [showOfferModal, setShowOfferModal] = useState(false);

  // Show the modal when the page loads (runs only once)
  useEffect(() => {
    setShowOfferModal(true);
  }, []);


  useEffect(() => {
    axios
      .get("https://quick-reserve-server.vercel.app/room-reviews")
      .then((res) => setAllReviews(res.data));
  }, []);

  useEffect(() => {
    axios
      .get("https://quick-reserve-server.vercel.app/rooms")
      .then((res) => setFeaturedRooms(res.data.slice(0, 7)));
  }, []);

  // console.log(featuredRooms)

  return (
    <div className="my-8">
      <Helmet>
        <title>Home - QuickReserve</title>
        <meta
          name="description"
          content="Welcome to the home page of My Website."
        />
      </Helmet>

      <div className="flex flex-col items-center">
        <div className=" w-48 lg:w-96 ml-8">
          <Lottie animationData={HotelAnimation} />
        </div>
      </div>

      {
        showOfferModal && (
          <SpecialOffer setShowOfferModal={setShowOfferModal} />
        )
      }
      <Carousel className="rounded-xl mb-[50px]">
        <div
          className="relative flex flex-col items-center space-y-4 my-[50px] h-[380px] bg-cover bg-center text-white py-16 px-4  lg:h-[500px] "
          style={{
            backgroundImage: `url(${backgroundImageOne})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          <div className="relative z-10 text-center  lg:top-32">
            <h1 className="text-xl text-center font-bold lg:text-4xl">
              Dear Guest Welcome to Radisson Blu Hotel, Chittagong.
            </h1>
            <p className="w-full text-center mb-4 ml-0 text-gray-200 lg:w-[700px] lg:ml-32">
              Explore all of our Rooms in one place! Find detailed information
              of rooms, facilities, and booking steps to make your online
              booking journey seamless and hassle-free.
            </p>
            <div>
              <Link to={"/rooms"}>
                <button className="btn">View Rooms</button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="relative flex flex-col items-center space-y-4 my-[50px] h-[380px] bg-cover bg-center text-white py-16 px-4  lg:h-[500px] "
          style={{
            backgroundImage: `url(${backgroundImageTwo})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          <div className="relative z-10 text-center  lg:top-32">
            <h1 className="text-xl text-center font-bold lg:text-4xl">
              Dear Guest Welcome to Radisson Blu Hotel, Chittagong.
            </h1>
            <p className="w-full text-center mb-4 ml-0 text-gray-200 lg:w-[700px] lg:ml-32">
              Explore all of our Rooms in one place! Find detailed information
              of rooms, facilities, and booking steps to make your online
              booking journey seamless and hassle-free.
            </p>
            <div>
              <Link to={"/rooms"}>
                <button className="btn">View Rooms</button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="relative flex flex-col items-center space-y-4 my-[50px] h-[380px] bg-cover bg-center text-white py-16 px-4  lg:h-[500px] "
          style={{
            backgroundImage: `url(${backgroundImageThree})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          <div className="relative z-10 text-center  lg:top-32">
            <h1 className="text-xl text-center font-bold lg:text-4xl">
              Dear Guest Welcome to Radisson Blu Hotel, Chittagong.
            </h1>
            <p className="w-full text-center mb-4 ml-0 text-gray-200 lg:w-[700px] lg:ml-32">
              Explore all of our Rooms in one place! Find detailed information
              of rooms, facilities, and booking steps to make your online
              booking journey seamless and hassle-free.
            </p>
            <div>
              <Link to={"/rooms"}>
                <button className="btn">View Rooms</button>
              </Link>
            </div>
          </div>
        </div>
        
      </Carousel>

      <HotelMap />

      <FeaturedRooms featuredRooms={featuredRooms} />

      <div>
        <div className="flex flex-col items-center">
          <div className=" w-48 lg:w-96 ml-8">
            <Lottie animationData={ReviewAnimation} />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8 lg:text-4xl ">
          Guest Reviews ({allReviews.length})
        </h2>
        <ReviewTestimonials roomReviews={allReviews} />
      </div>
    </div>
  );
};

export default Home;
