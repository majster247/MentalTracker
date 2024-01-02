// Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface NavbarProps {
  isAdmin: boolean;
  onLogin: () => void;
}

const StyledNavbar = styled.nav`
  background-color: #333;
  color: white;
  border: 1px solid #ccc;
  padding: 10px;
`;

const Navbar: React.FC<NavbarProps> = ({ isAdmin, onLogin }) => {
  const [showPrivate, setShowPrivate] = useState(false);

  const handleToggleVisibility = () => {
    setShowPrivate(!showPrivate);
  };

  const handleAddGoal = () => {
    // Add logic for adding a goal
    console.log('Add Goal');
  };

  const handleDeleteGoal = () => {
    // Add logic for deleting a goal
    console.log('Delete Goal');
  };

  return (
    <StyledNavbar>
      <div>
        <button onClick={onLogin}>{isAdmin ? 'Logout' : 'Login as Admin'}</button>
        {isAdmin && (
          <>
            <button onClick={handleAddGoal}>Add Goal</button>
            <button onClick={handleDeleteGoal}>Delete Goal</button>
          </>
        )}
        <label>
          <input type="checkbox" checked={showPrivate} onChange={handleToggleVisibility} />
          Show Private Goals
        </label>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create-goal">Create Goal</Link>
        </li>
        <li>
          <Link to="/my-goals">My Goals</Link>
        </li>
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;
