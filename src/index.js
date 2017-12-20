import React from 'react';
import ReactDOM from 'react-dom';
import { StyleSheet } from 'aphrodite/no-important';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import './styles/reset.styles.js';
import './styles/base.styles.js'; // shoot this works but should I do this?

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
