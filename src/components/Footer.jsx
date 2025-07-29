import React from "react";
import "./Footer.css"; 
import bistrofooter from '../assets/bistrofooter.png';

function Footer() {
  return (
    <footer>
      <div className="newsletter-section">
        <h3>Special Newsletter signup</h3>
        <p>Get offers and updates</p>
        <div className="newsletter-form">
          <input type="email" placeholder="email" />
          <button>Signup</button>
        </div>

        <div className="feedback">
  <p>Tell us more</p>
  <textarea
    placeholder="Write your feedback here..."
    rows="4"
    style={{
      width: "70%",
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      marginTop: "8px",
      resize: "vertical"
    }}
  ></textarea>

  <button style={{
    marginTop: "10px",
    padding: "8px 16px",
    border: "none",
    backgroundColor: "#f3b007",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer"
  }}>
    Submit
  </button>
</div>

      </div>

      <div className="main-footer">
        <div className="footer-column address">
          <div className="logo">
            <img src={bistrofooter} alt="BISTRO"   style={{ width: '200px', height: 'auto' }} />
          </div>
          <p>2 Lord Edward St,<br />Temple Bar,<br />D02 P634,US</p>
        </div>

        <div className="footer-column">
          <h4>Menu</h4>
          <ul>
            <li>Breakfast menu</li>
            <li>Lunch menu</li>
            <li>Dinner</li>
            <li>Dessert menu</li>
            <li>Drinks menu</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li>About us</li>
            <li>FAQ</li>
            <li>Contact Us</li>
            <li>Locations</li>
            <li>Privacy policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
