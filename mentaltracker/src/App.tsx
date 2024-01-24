// App.tsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import GoalList from './components/GoalList';
import GoalDetails from './components/GoalDetails';
import MainPage from './components/MainPage';

const App: React.FC = () => {
  const handleLoginSuccess = () => {
    console.log('Login successful! Navigate to goals page.');
    // Dodaj kod nawigacyjny po udanym zalogowaniu, na przykład:
    // history.push('/goals');
  };


  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Przekazanie funkcji handleLoginSuccess jako prop do komponentu Login */}
          <Route path="/login" element={<Login/>} />
          <Route path="/goals" element={<GoalList />} />
          <Route path="/goal/:id" element={<GoalDetails />} />
          <Route path="/home" element={<MainPage />} />
          <Route path='' element={<MainPage />} />
          <Route path='/MentalTracker/' element={<MainPage />} />

          <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found</h2>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
