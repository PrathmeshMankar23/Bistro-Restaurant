import React, { useState, useEffect } from 'react';
import './ReviewMapAward.css';
import tripadvisor from '../assets/tripadvisor.png';

const reviews = [
  {
    quote: 'The food was amazing, and the service was top-notch!',
    author: 'M.S.Dhoni',
    stars: 5,
  },
  {
    quote: 'Great ambiance and even better dishes. Will visit again.',
    author: 'Suresh Raina',
    stars: 4,
  },
  {
    quote: 'A hidden gem! Authentic flavors and very courteous staff.',
    author: 'Ravindra Jadeja',
    stars: 5,
  },
];

const ReviewMapAward = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (i) => {
    setIndex(i);
  };

  const { quote, author, stars } = reviews[index];

  return (
    <div className="review-map-award">
      <h2 className="section-title">What some of our diners say</h2>
      <div className="review-card">
        <p className="quote">“ {quote} ”</p>
        <div className="stars">
          {'★'.repeat(stars)}
          {'☆'.repeat(5 - stars)}
        </div>
        <p className="author">- {author}</p>
        <div className="dots">
          {reviews.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? 'active' : ''}`}
              onClick={() => handleDotClick(i)}
            ></span>
          ))}
        </div>
      </div>

      <div className="map-section">
        <h2 className="section-title">On the map</h2>
        <iframe
          title="India Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36500000!2d78.9629!3d20.5937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDM1JzM3LjMiTiA3OMKwNTcnMzcuNSJF!5e0!3m2!1sen!2sin!4v1615912300509!5m2!1sen!2sin"
          width="600"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="award-section">
        <h2 className="section-title">Award</h2>
        <img src={tripadvisor} alt="Tripadvisor Award" width="200" />
      </div>
    </div>
  );
};

export default ReviewMapAward;
