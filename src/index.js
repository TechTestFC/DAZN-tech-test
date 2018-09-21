import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import App from './app.js';
import API from './api';
import '../styles/global-styles.js';


const node = document.getElementById('root');
Modal.setAppElement(node);

ReactDOM.render(
  <App API={API} />,
  node
);