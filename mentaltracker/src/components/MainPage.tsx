// components/MainPage.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/styles.css';


const MainPage: React.FC = () => {
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
  ⠀⠀⠀⠀⠀⠀⠀⠀        ⢸⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀     ⢸⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀     ⢸⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀      ⢸⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                                  ⠛⠛⠛⠛⠛⠛⠛⠁
`;

  const quotes: string[] = ["Baobabium", "Baobab thinking....", "Abbys ababa aboa babybys"];
  const [quote, setQuote] = useState<string>('');
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const getRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
    };

    getRandomQuote();

    const intervalId = setInterval(() => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', { hour12: false });
      setCurrentTime(timeString);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="main-page-container">
      <h2>Mental Tracker</h2>
      <div>
        <pre>{asciiArt}</pre>
      </div>
      <div>
        <blockquote>
          <p>{quote}</p>
        </blockquote>
      </div>
      <div>
        <p>Current Time: {currentTime}</p>
      </div>
    </div>
  );
};

export default MainPage;
