import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AuthenticationPage } from './pages';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AuthenticationPage />} />
      </Routes>
    </Router>
  );
};

export default App;
