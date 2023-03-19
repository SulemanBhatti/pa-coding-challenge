import React from 'react';
import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom';
import { AuthenticationPage } from './pages';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            // add inline class for just the sake of the example
            <button style={{ backgroundColor: 'pink' }}>
              <Link to="/signup">Move to /signup route</Link>{' '}
            </button>
          }
        />
        <Route path="/signup" element={<AuthenticationPage />} />
      </Routes>
    </Router>
  );
};

export default App;
