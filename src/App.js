import React from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import ReviewMapAward from './components/ReviewMapAward';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <Reservation />
      <ReviewMapAward />
      <Footer />
    </>
  );
}

export default App;
