import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Tree from './components/Tree';

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
const Quote = ["Baobabium","Baobab thinking....","Abbys ababa aboa babybys"]
const getRandomQuote = (array) => {
  const randomQuote = array[Math.floor(Math.random() * array.length)]
  return randomQuote
}
const [randomQuote, setRandomQuote] = useState(() => getRandomQuote(Quote))
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
          <pre className="ascii-art">{asciiArt}<br/></pre>
          {!isAuthenticated && (
            <button className="button" onClick={handleStartClick}>
              Start
            </button>
          )}
        </header>
      )}
      {startApp && (
        <div className="app-container-start">
          <div className="Tree" ><Tree/></div>
          <div className="Navbar"><Navbar isAuthenticated={isAuthenticated} onLogin={handleLoginToggle} /></div>
          
        </div>
      )}
    </div>
  </Router>
);
};

export default App;
