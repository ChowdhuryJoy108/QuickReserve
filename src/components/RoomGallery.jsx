import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GalleryAnimation from "../assets/lottie/lottieHotels/gallery.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

const RoomGallery = () => {
  const [roomGallery, setRoomGallery] = useState([]);

  useEffect(() => {
    axios
      .get("https://quick-reserve-server.vercel.app/rooms")
      .then((res) => setRoomGallery(res.data));
  }, []);

  return (
    <motion.div
      className="my-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center my-8">
        <motion.div
          className="w-48 lg:w-64 ml-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Lottie animationData={GalleryAnimation} />
        </motion.div>
        <h2 className="text-lg font-bold text-center text-gray-800 mb-4 lg:text-4xl">
          ✨ Discover a world of luxury and comfort <br /> at Radisson Blu
          Chittagong.
        </h2>
        <p className="text-base px-2 w-full text-gray-600 text-center lg:w-[900px]">
          Our carefully curated rooms offer a blend of modern elegance and cozy
          ambiance, ensuring a perfect stay for every guest. Browse through our
          gallery to experience the breathtaking interiors, premium amenities,
          and stunning views.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {roomGallery.map((room, index) => (
          <motion.div
            key={room._id}
            className="relative w-full h-40 md:h-52 lg:h-60 overflow-hidden rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }} // Staggered animation
            whileHover={{ scale: 1.05 }}
          >
            <Link to={`/room/details/${room._id}`}>
              <img
                className="w-full h-full object-cover rounded-lg"
                src={room.photos}
                alt="gallery-photo"
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default RoomGallery;
