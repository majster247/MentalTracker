import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const asciiArt = `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢠⣴⣾⣿⣿⣿⣿⣿⣶⣤⣤⣤⣶⣶⣤⣄⡀⠀⢀⣀⡀⠀⠀⠀⠀
⠀⠀⠀⢠⣿⣿⣿⣿⡿⠻⢿⣿⣿⣿⣿⣿⣿⣿⡿⠿⣿⣿⣿⣿⣿⣦⠀⠀⠀
⠀⢠⣶⣿⣿⣿⡿⠛⠁⠠⣦⣠⣄⠈⠉⠉⣉⡀⠀⢀⣠⡈⠻⢿⣿⣿⡿⠀⠀⠀
⠀⠈⠛⠛⠋⠁⠀⣚⣶⢤⣼⣿⣷⣶⣶⣾⣿⡶⢾⡛⠋⠻⠦⠄⠉⠛⠁⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠘⠋⠁⠀⠀⢹⣿⣿⣿⣿⣿⠀⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠛⠛⠛⠛⠛⠛⠛⠁
Baobab thinking...
`;


  const [isAdmin, setIsAdmin] = useState(false);

  const handleLoginToggle = () => {
    setIsAdmin(!isAdmin);
  };



const handleClick = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
) => {
  return (
    <Router>
      <Navbar isAdmin={isAdmin} onLogin={handleLoginToggle} />
    </Router>
  );
};

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mental Tracker</h1>
        <pre className="ascii-art">{asciiArt}</pre>

        <button className='button' onClick={handleClick}>Start</button>
      </header>
    </div>
  );
}

export default App;
