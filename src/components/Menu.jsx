import React from 'react';
import './Menu.css';
import coffee from '../assets/coffee (1).jpg';
import breakfast from '../assets/breakfast.jpg';
import lunch from '../assets/lunch.jpg';
import drinks from '../assets/drinks.jpeg';
import dinner from '../assets/dinner.jpg';
import dessert from '../assets/dessert.jpg';


const menuItems = [
  { title: 'COFFEE', image: coffee},
  { title: 'LUNCH', image: lunch },
  { title: 'BREAKFAST', image: breakfast},
  { title: 'DRINKS', image: drinks },
  { title: 'DINNER', image: dinner },
  { title: 'DESSERTS', image: dessert },
];

const Menu = () => {
  return (
    <div className="menu-wrapper">
      <p className="menu-subheading">Discover Authentic English Flavours</p>
      <h2 className="menu-heading">Explore our menu</h2>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="menu-label">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
