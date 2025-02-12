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
        <p className="text-gray-600">All rights reserved!@Developed By Joy Chowdhury</p>
      </aside>
      
      <nav>
        <h6 className="footer-title">OuickReserve</h6>
        <Link to="/"><a className="link link-hover">Home</a></Link>
        <Link to="/rooms"><a className="link link-hover">Rooms</a></Link>
        <Link to="/gallery"><a className="link link-hover">Gallery</a></Link>
        <Link to="/aboutus"><a className="link link-hover">About Us</a></Link>   
      </nav>
      <nav>
        <h6 className="footer-title">Developer Links</h6>
        <Link to="https://github.com/ChowdhuryJoy108"><a className="link link-hover">Github</a></Link>
        <Link to="https://www.facebook.com/share/1BkA741HaF/"><a className="link link-hover">Facebook</a></Link>
        <Link to="https://www.linkedin.com/in/joy-chowdhury798/"><a className="link link-hover">LinkedIn</a></Link>
      </nav>
      
      
    </footer>
  );
};

export default Footer;
