import React, { useContext } from "react";
import { motion } from "framer-motion";
import AuthContext from "../../context/AuthContext";
import { Helmet } from "react-helmet";
import ProfileAnimation from "../../assets/lottie/lottieHotels/profile.json";
import Lottie from "lottie-react";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
        <h1 className="text-2xl font-bold text-center mt-8 lg:text-4xl" >Welcome {user.displayName || user.email} !!!</h1>
      <div className="flex flex-col justify-center items-center gap-4 min-h-screen mb-8 px-4 lg:flex-row">
        <Helmet>
          <title>My Profile - QuickReserve</title>
        </Helmet>
        <div className="flex flex-col items-center">
          <div className=" w-48 lg:w-64 ml-8">
            <Lottie animationData={ProfileAnimation} />
          </div>
        </div>
        <motion.div
          className="bg-white p-8 rounded-xl shadow-lg max-w-lg w-full text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={user.photoURL || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          <motion.h2
            className="text-2xl font-semibold mt-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {user.displayName || "User Name"}
          </motion.h2>

          <motion.p
            className="text-gray-600 mt-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {user.email || "user@example.com"}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
