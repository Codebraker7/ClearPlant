import React from 'react';
import NVC_logo from '../../Images/NVC_logo.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const location = useLocation();
  const renderLinks = () => {
    if (location.pathname === '/') {
      // If the current route is '/special', don't render certain links
      return (
        <>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <button to="/" onClick={() => scrollToSection('services')}>
                Our Services
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')}>
                Contact Us
              </button>
            </li>
          </ul>
        </>
      );
    } else {
      // Render all links for other routes
      return (
        <>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
          </ul>
        </>
      );
    }
  };
  return (
    <div className="header">
      <div className="logo">
          <img src={NVC_logo } alt="" />
      </div>
      <nav className="navigation">{renderLinks()}</nav>
    </div>
  );
};
export default Navbar;
