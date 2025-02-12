import Lottie from "lottie-react";
import RegisterAnimation from '../../assets/lottie/Register.json'
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import {  Helmet } from "react-helmet-async";

const Register = () => {

  const {createUser,updateProfileInfo,signInWithGoogle} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleRegistration = (e) =>{
    e.preventDefault();
    const form = e.target;
    const name = form.username.value;
    const profile = form.profile.value;
    const email = form.email.value;
    const password = form.password.value;

    const checkUpperCase = /[A-Z]/;
    const checkLowerCase = /[a-z]/;
    const minPasswordLength = 6;

    if (!checkUpperCase.test(password)) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must have at least one uppercase letter.",
      })
    }

    if (!checkLowerCase.test(password)) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must have at least one lowercase letter.",
      })
    }

    if (password.length < minPasswordLength) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must be at least 6 characters long.",
      })
    }

    createUser(email, password)
      .then((userCredentails) => {
        console.log(userCredentails.user)
        updateProfileInfo({
          displayName: name,
          photoURL: profile,
        })
        
          Swal.fire({
            icon: "Success",
            title: "yAy..",
            text: 'User Registered Successully. welcome!',
          })
        navigate("/login");
      })
      .catch((error) => {
        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Registration Failed : ${error.message}`,
      })
    });
  };

  const handleGoogleLogin = () => {
      signInWithGoogle()
      .then((result) => {
        
        Swal.fire({
          icon: "Success",
          title: "yAy..",
          text: 'User Logged In Successully with Gmail Account!',
        })
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Sign In Failed : ${error.message}`,
        })
      });
    };

  
  return (
    <div className="hero max-w-[800px] mx-auto min-h-screen ">
      <Helmet>
          <title>Resgistration - OuickReserve</title>
          <meta
            name="description"
            content="Welcome to the Registration Page."
          />
        </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          
          <div className="w-48 lg:w-96 ml-8">
          <Lottie animationData={RegisterAnimation}  />
          </div>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <h1 className="text-center text-2xl mt-4 font-bold">Login Now</h1>
          <form onSubmit={handleRegistration} className="card-body">
            <div className="form-control">
              <label className="label font-semibold">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                name="username"
                placeholder="username"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-semibold">
                <span className="label-text">Profile</span>
              </label>
              <input
                type="url"
                name="profile"
                placeholder="profile"
                className="input input-bordered"
                
              />
            </div>
            <div className="form-control">
              <label className="label font-semibold">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-semibold">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6 space-y-4">
              <button className="btn font-bold  bg-green-400 hover:bg-green-700 hover:text-white">Register</button>
              <button onClick={handleGoogleLogin} className="btn flex font-bold  bg-green-400 hover:bg-green-700 hover:text-white">
                <FaGoogle />
                Register with Google</button>
              <p>
                Already have an account ?
                Click here to <Link className=" font-bold text-green-400 hover:text-green-700" to={'/login'}>Login</Link> now!
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
