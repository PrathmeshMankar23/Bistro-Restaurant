import React from 'react';
import './Navbar.css';
/*import { FaFacebookF, FaInstagram } from 'react-icons/fa';*/

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src="logo.svg" alt="bistro" className="logo-img" />
        </div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Contact</a>
          <a href="#">Menu</a>
          <a href="#">Order online</a>
        </div>
        
      </nav>

      <div className="banner">
        <div className="banner-content">
          <div>
             <img src="kitchen1.png" alt="kitchen" />
          </div>
          <h1>Bistro Restaurant</h1>
          <div className="banner-buttons">
            <button className="map-btn">View on Map</button>
            <button className="order-btn">Order Online</button>
          </div>
          <div className="banner-icons">
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
