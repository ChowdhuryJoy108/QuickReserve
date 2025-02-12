import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa"; // For the paper plane icon
import Swal from "sweetalert2";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     Swal.fire({
            icon: "success",
            title: "Success",
            text: `Successfully Subscribed with ${email}`
          })
    setEmail(""); 
  };

  return (
    <motion.div
      className="py-16 px-4 bg-gradient-to-r from-green-100 via-teal-500 to-green-500 rounded-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-white text-3xl sm:text-4xl font-semibold mb-6 tracking-wide"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Stay in the Loop
        </motion.h2>
        <motion.p
          className="text-white text-lg sm:text-xl mb-8 mx-auto max-w-3xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Be the first to know about our latest offers, trends, and exciting programs!
          Sign up for our newsletter and never miss out.
        </motion.p>


        <motion.form
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-x-4 sm:space-y-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleInputChange}
            required
            className="w-full sm:w-96 px-4 py-2 rounded-full text-black text-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
          />
          <button
            type="submit"
            className="bg-white text-black text-lg py-2 px-4 rounded-full flex items-center justify-center space-x-2 hover:bg-green-800 hover:text-white transition duration-300 mt-4 sm:mt-0"
          >
            <span>Subscribe</span>
            <FaPaperPlane className="text-xl" />
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Newsletter;
