import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import './App.css'; // Ensure this file is imported

const Nav = ({ menuIcon, setMenuIcon }) => {
  return (
    <main className="header">
      <nav>
        <div className={menuIcon ? "navbar active" : "navbar"}>
          <ul className="navbar-lists">
            <div className="logo">
              <li>
                <Link to="/" className="navbar-link">
                  <img src="./logo2.png" className="logo-img" alt="my logo img" height="88px" width="85px" />
                </Link>
              </li>
            </div>
            <div className="navbar-items">
              <li>
                <Link to="/" className="navbar-link" onClick={() => setMenuIcon(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="navbar-link" onClick={() => setMenuIcon(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/products" className="navbar-link" onClick={() => setMenuIcon(false)}>
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="navbar-link" onClick={() => setMenuIcon(false)}>
                  Contact
                </Link>
              </li>
            </div>
            <div className="icons">
              <li>
                <Link to="/" className="navbar-link signup-link">
                  <FaUserAlt className="signup" />
                  <span className="signup-item"> Sign Up </span>
                </Link>
              </li>
              <li>
                <Link to="/login" className="navbar-link login-link">
                  <FaUserAlt className="login" />
                  <span className="login-item"> Login </span>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </main>
  );
};

export default Nav;