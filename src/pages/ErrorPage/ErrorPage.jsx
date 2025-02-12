import React from "react";
import { Link } from "react-router-dom";
import Lottie from 'lottie-react'
import ErrorAnimation from '../../assets/lottie/error/error.json'
const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
      
      <div className="flex flex-col items-center">
        <div className=" w-48 lg:w-96 ml-8">
          <Lottie animationData={ErrorAnimation} />
        </div>
      </div>

      <h1 className="text-4xl md:text-6xl font-bold text-red-500">404</h1>

      <p className="text-lg md:text-xl text-gray-700 mt-4">
        Oops! Page not found.
      </p>
      <p className="text-gray-500 mt-2">
        The page you're looking for doesn't exist or has been moved.
      </p>
      
      <Link 
        to="/" 
        className="mt-6 px-6 py-3 bg-green-400 hover:bg-green-700 hover:text-white transition-all duration-200 text-sm rounded-lg md:text-base"
      >
       Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
