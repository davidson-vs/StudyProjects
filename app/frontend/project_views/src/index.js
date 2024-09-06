import React from 'react';
import ReactDOM from 'react-dom/client';

import AppRouters from './routes';

import './global.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouters/>
  </React.StrictMode>
);
