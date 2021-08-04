import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="d-flex d-flex flex-center mainNav">
    <div className="d-flex flex-center links-container">
      <Link to="/" className="logo">CATALOGUE OF RECIPES</Link>
      <ul className="d-flex nav-links">
        <li>
          <Link to="/order">ORDERS</Link>
        </li>
        <li>
          <Link to="/tutorial">TUTORIALS</Link>
        </li>
      </ul>
    </div>
    <a href="#home" className="user-icon d-flex flex-center">Login | Register</a>
  </nav>
);

export default Navbar;
