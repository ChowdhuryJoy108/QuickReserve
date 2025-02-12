import React from "react";
import { motion } from "framer-motion";
import AboutAnimation from "../assets/lottie/lottieHotels/about.json";
import Lottie from "lottie-react";

const AboutUs = () => {
  return (
    <motion.div
      className="py-16 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="flex justify-center items-center mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-48 lg:w-96">
          <Lottie animationData={AboutAnimation} />
        </div>
      </motion.div>

      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-semibold text-gray-800 lg:text-5xl">
          About Us
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
          Welcome to Radisson Blu Chittagong! We are dedicated to providing you
          with the highest quality service and an unforgettable stay.
        </p>
      </motion.div>

      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Our Mission
        </h2>
        <p className="text-lg text-gray-600 lg:w-2/3 mx-auto">
          At Radisson Blu Chittagong, we blend modern luxury with comfort,
          offering our guests an unforgettable experience. Our mission is to
          deliver exceptional service, create unforgettable moments, and provide
          premium accommodations for every traveler.
        </p>
      </motion.div>

      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg mb-16"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-semibold text-gray-700 mb-6">
          Radisson Blu: A Global Hotel Chain
        </h3>
        <motion.p
          className="text-sm text-justify text-gray-600 mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Radisson Blu is one of the world’s most recognized and prestigious
          hotel brands, known for its sophisticated design, exceptional service,
          and unrivaled locations. With over 300 properties in more than 80
          countries, Radisson Blu has become a leader in the hospitality
          industry, offering a blend of modern luxury, comfort, and a commitment
          to creating memorable experiences for guests. The brand prides itself
          on delivering high-quality accommodations with an emphasis on elegant
          interiors, state-of-the-art amenities, and impeccable customer
          service. Whether you are traveling for business, leisure, or a special
          occasion, Radisson Blu ensures that every stay is as seamless and
          enjoyable as possible. From the heart of major cities to scenic
          destinations worldwide, Radisson Blu hotels are strategically located
          to cater to a diverse range of travelers. In Bangladesh, Radisson Blu
          has made its mark as a symbol of luxury and modern hospitality.
          Radisson Blu Chittagong stands at the forefront of the brand's
          presence in the country, offering guests a world-class experience.
          Located in one of the most vibrant cities, this hotel is designed to
          cater to both business and leisure travelers, featuring spacious
          rooms, fine dining options, and a variety of recreational facilities.
          Radisson Blu Chittagong is a perfect blend of contemporary comfort and
          local culture, offering panoramic views of the city. Around the world,
          Radisson Blu continues to expand its footprint, maintaining its
          reputation for excellence. Each hotel is carefully designed to provide
          an experience that reflects both the global brand and the local
          environment, making every stay unique and unforgettable. Whether
          you’re in Europe, Asia, Africa, or the Americas, Radisson Blu promises
          to deliver a luxurious experience wherever you go.

          In Bangladesh, Radisson Blu Chittagong stands as a symbol of elegance,
          providing top-tier accommodations and services. The hotel offers a
          perfect blend of comfort and sophistication, ensuring guests have a
          memorable stay. Whether you’re visiting for business or leisure,
          Radisson Blu offers something for every traveler.
        </motion.p>

      </motion.div>

    </motion.div>
  );
};

export default AboutUs;
