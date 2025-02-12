import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Swal from "sweetalert2";
import Logo from '../../assets/logo.png'

const Navbar = () => {
  const { user,signOutUser } = useContext(AuthContext);
  const navigate = useNavigate()
  const links = (
    <div className="flex flex-col font-semibold gap-4 lg:flex-row">
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/rooms"}>Rooms</NavLink>
      </li>
      <li>
        <NavLink to={"/gallery"}>Gallery</NavLink>
      </li>
      {
        user && (<li>
          <NavLink to={"/bookings"}>My Bookings</NavLink>
        </li>)
      }
    </div>
  );


  const handleSignOut =()=>{
    signOutUser()
      .then(() => {
        Swal.fire({
                    icon: "success",
                    title: "Success..",
                    text: 'User Logged out Successully. welcome!',
                  })
        navigate('/')
      })
      .catch((error) => {
        Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `Log Out Failed : ${error.message}`,
              })
      });
  }
  return (
    <div className="navbar  ticky top-0 z-50 bg-[#F9F7F3] px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link className="">
          <img src={Logo} alt="" className="w-14 rounded-full" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end text-xs md:text-sm space-x-1 lg:text-base lg:space-x-4">
        {user && user.email ? (
          <Link onClick={handleSignOut} className="btn">Log Out</Link>
        ) : (
          <>
            <Link to={"/login"} className="btn">
              Login
            </Link>
            <Link to={"/register"} className="btn">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
