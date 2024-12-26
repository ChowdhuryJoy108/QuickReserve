import Lottie from "lottie-react";
import LoginAnimation from '../../assets/lottie/login.json'
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import Swal from "sweetalert2";
import axios from "axios";
import {  Helmet } from "react-helmet-async";

const Login = () => {
    const navigate = useNavigate()
    const {signInUser,signInWithGoogle} = useContext(AuthContext)
    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        signInUser (email, password)
    .then((userCredential) => {
      
      const user = {
        email : email
      }

      axios.post('https://quick-reserve-server.vercel.app/jwt', user, {withCredentials : true})
      .then(res => console.log(res.data))

      Swal.fire({
        icon: "success",
        title: "Success",
        text: 'User Logged In Successully. welcome!',
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
  }

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
          <title>Login - QuickReserve</title>
          <meta
            name="description"
            content="Welcome to the Login Page."
          />
        </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          
          <div className="w-60 lg:w-96 ml-8">
          <Lottie animationData={LoginAnimation}  />
          </div>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
          <h1 className="text-center text-2xl mt-4 font-bold">Login Now</h1>
          <form onSubmit={handleLogin} className="card-body">
            
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
              <button className="btn bg-blue-400 font-bold hover:bg-blue-700 hover:text-white">Login</button>
              <button onClick={handleGoogleLogin} className="btn flex bg-blue-400 font-bold hover:bg-blue-700 hover:text-white">
                <FaGoogle />
                Login with Google</button>
              <p>
                New to this website ?
                Click here to <Link className=" font-bold text-blue-400 hover:text-blue-700" to={'/login'}>Register</Link> now!
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
