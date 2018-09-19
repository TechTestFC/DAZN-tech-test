import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import API from './api';

const node = document.getElementById('root');

ReactDOM.render(
  <App API={API} />,
  node
);