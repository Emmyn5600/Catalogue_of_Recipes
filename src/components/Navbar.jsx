import React from 'react';

const Navbar = () => (
  <nav className="d-flex d-flex flex-center mainNav">
    <div className="d-flex flex-center links-container">
      <a href="#home" className="logo">CATALOGUE OF RECIPES</a>
      <ul className="d-flex nav-links">
        <li>
          <a href="#home">ORDER</a>
        </li>
        <li>
          <a href="#home">TUTORIALS</a>
        </li>
      </ul>
    </div>
    <a href="#home" className="user-icon d-flex flex-center">Login | Register</a>
  </nav>
);

export default Navbar;
