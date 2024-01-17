// components/Login.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/styles.css';


const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async () => {
    try {
      // Log opening action
      const globalIP = await fetch('https://api64.ipify.org?format=json')
        .then((response) => response.json())
        .then((data) => data.ip);

      console.log(`[OPEN] IP: ${globalIP}`);

      // Log login attempt
      const response = await fetch(`http://localhost:3001/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log('[LOGIN] Success');
        // Handle success, for example, navigate to the goals page
      } else {
        console.log('[LOGIN] Failure');
        // Handle failure, for example, display an error message
      }
    } catch (error) {
      console.error('Login failed:');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      {/* Link to the destination page */}
      <Link to="/goals">Go to Goals</Link>
    </div>
  );
};

export default Login;
