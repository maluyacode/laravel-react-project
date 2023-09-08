import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import App from './App';
import RoutedApp from './Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RoutedApp>
    <App />
  </RoutedApp>
);

