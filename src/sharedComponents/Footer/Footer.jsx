import React from "react";

import Logo from '../../assets/logo.png'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10">
      <aside>
        <img src={Logo} alt="" className="w-24 rounded-full" />
        <p>
          Radison Properties Ltd.
          <br />
          Providing reliable service since 2008
        </p>
        <p className="text-gray-600">all rights reserved!@Developed By Joy Chowdhury</p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Real Estate</a>
        <a className="link link-hover">Promotional</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">OuickReserve</h6>
        <Link to="/"><a className="link link-hover">Home</a></Link>
        <Link to="/rooms"><a className="link link-hover">Rooms</a></Link>
        <a className="link link-hover">Career</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
