// App.tsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import GoalList from './components/GoalList';
import GoalDetails from './components/GoalDetails';
import MainPage from './components/MainPage';

const App: React.FC = () => {
  const asciiArt = `
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⢠⣴⣾⣿⣿⣿⣿⣿⣶⣤⣤⣤⣶⣶⣤⣄⡀⠀⢀⣀⡀⠀⠀⠀⠀⠀
  ⠀⠀⠀⢠⣿⣿⣿⣿⡿⠻⢿⣿⣿⣿⣿⣿⣿⣿⡿⠿⣿⣿⣿⣿⣿⣦⠀⠀⠀
  ⠀⢠⣶⣿⣿⣿⡿⠛⠁⠠⣦⣠⣄⠈⠉⠉⣉⡀⠀⢀⣠⡈⠻⢿⣿⣿⡿⠀⠀
  ⠀⠈⠛⠛⠋⠁⠀⣚⣶⢤⣼⣿⣷⣶⣶⣾⣿⡶⢾⡛⠋⠻⠦⠄⠉⠛⠁⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠘⠋⠁⠀⠀⢹⣿⣿⣿⣿⣿⠀⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀     ⢸⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀    ⢸⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀    ⢸⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀    ⢸⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
      ⠛⠛⠛⠛⠛⠛⠛⠁
`;

const [isAuthenticated, setIsAuthenticated] = useState(false);
const [showAsciiArt, setShowAsciiArt] = useState(true);
const [startApp, setStartApp] = useState(false); 

const handleLoginToggle = () => {
  setIsAuthenticated(!isAuthenticated);
};

const handleStartClick = () => {
  setShowAsciiArt(false);
  setStartApp(true);
};

return (
  <Router>
    <div className="App">
      {showAsciiArt && (
        <header className="App-header">
          <h1>Mental Tracker</h1>
          <pre className="ascii-art">{asciiArt}</pre>
          {!isAuthenticated && (
            <button className="button" onClick={handleStartClick}>
              Start
            </button>
          )}
        </header>
      )}
      {startApp && (
        <div className="app-container-start">
          <div className="Tree" ></div>
          <div className="Navbar"><Navbar/></div>
          
        </div>
      )}
    </div>
  </Router>
);
};

export default App;
