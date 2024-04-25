import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assest/kinglogo.png";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <section className="navbar1">
        <div className="logo">
          <Link to="/">
            <img id="orekelogo" src={logo} alt="" />
          </Link>
        </div>
        <div className="nav1-items">
          <ul>
            <li>
              <a href="#intro">Home</a>
            </li>
            <li>
              <a href="#symptomChecker">Symptoms Checker</a>
            </li>
            <li className="services">
              <a href="">About</a>
              <div className="services-dropdown">
                <ul>
                  <li>About Us</li>
                  <li>Message from the CEO Management</li>
                  <li>Telemedicine</li>
                  <li> The Founder</li>
                  <li> Our Consultants Gallery</li>
                </ul>
              </div>
            </li>
            <li className="services">
              <a href="">Services</a>
              <div className="services-dropdown">
                <ul>
                  <li>Our Services</li>
                  <li>Schedules</li>
                  <li>Telemedicine</li>
                  <li>Wellman</li>
                  <li>Wellwoman</li>
                  <li>Domestic staff screening Test</li>
                  <li>Retainership</li>
                </ul>
              </div>
            </li>
            <li className="services">
              <a href="">Our Location</a>
              <div className="services-dropdown">
                <ul>
                  <li>LAGOS ISLAND</li>
                  <li>VICTORIA ISLAND</li>
                  <li>LEKKI FREE ZONE</li>
                  <li> MARYLAND SURULERE</li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
