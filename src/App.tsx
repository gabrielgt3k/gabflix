import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import dotenv from 'dotenv';
import Routes from './routes';

dotenv.config();

const App: React.FC = () => (
  <Router>
    <Routes />
  </Router>
);

export default App;
