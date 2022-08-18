import React, { FC } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import '../styles/App.css';

import AppRouter from './AppRouter';

const App: FC = () => (
  <Router>
    <AppRouter />
  </Router>
);

export default App;
