import React from 'react';
import coffeeImg from '../assets/coffee.jpg';
import './Hero.css';

const Hero = () => {
  return (
   
      <div className="promo-section">
        <img src={coffeeImg} alt="Coffee" className="promo-img" />
        <div className="promo-text">
          <h2>Bistro Restaurant</h2>
          <h3>Welcomes you</h3>
          <div className="para">
             <p>Discover the charm of Bistro, an authentic English</p>             <p>restaurant offering a taste of Ireland in every bite.</p>              <p>Indulge in traditional English cuisine crafted with</p>              <p>care, complemented by warm hospitality and a cozy</p>             <p>ambiance. From hearty stews to savory pies,</p>              <p>experience the flavors of English at Bistro.</p>
          </div>

           <div className="map">
            <button>View Map</button></div>
        </div>
      </div>

  );
};

export default Hero;



