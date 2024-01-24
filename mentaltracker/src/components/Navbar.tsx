// components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/styles.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar-container"> {/* Add a class from styles.css */}
      <ul className="navbar-list"> {/* Add a class from styles.css */}
        <li className="navbar-item"><Link to="/home">Home</Link></li> {/* Add classes from styles.css */}
        <li className="navbar-item"><Link to="/login">Login</Link></li> {/* Add classes from styles.css */}
        <li className="navbar-item"><Link to="/goals">Goals</Link></li> {/* Add classes from styles.css */}
      </ul>
    </nav>
  );
};

export default Navbar;
